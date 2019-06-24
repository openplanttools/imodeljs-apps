/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as path from "path";
import { RpcInterfaceDefinition, ElectronRpcManager } from "@bentley/imodeljs-common";
import { IModelJsElectronManager } from "@bentley/electron-manager";
import * as electron from "electron";

/*
const getGlobalShortcut = () => {
  var globalShortcut;
  (async () => { // tslint:disable-line:no-floating-promises
    const resolvedGlobalShortcut = await electron.remote.globalShortcut;
      globalShortcut = resolvedGlobalShortcut;
  });
  return globalShortcut;
} */
import { HubIModel, Project } from "@bentley/imodeljs-clients";

//Console logging conditionals, that ensure that electron backend has loaded property, a problem with older versions of the application, that can arise
//again when improperly importing and using electron modules
if (electron) {
  console.log("Electron is loaded");
} else {
  console.log("Electron not loaded");
}
if (electron.ipcMain) {
  console.log(electron.ipcMain + "electron ipc main loaded");
}

//The following four variables are bound to functions, and serve as getters and settings for backend-frontend communication
//This is because external components that require data gathered in App.tsx, are unable to import that file, due to security reasons.
// Thus the data must travel App.tsx -> main.ts (backend) -> component that needs the data
//This data is stored here as instance variables
var iModelsList: HubIModel[];
var projectsList: Project[];
var currentProject: Project;

//Getters and setters for instance variables, that provide frontend <-> backend communication
export var getiModelsList = () => {
  return iModelsList;
};

export var getProjectsList = () => {
  return projectsList;
};

export var getCurrentProject = () => {
  return currentProject;
};

export var setCurrentProject = (theProject: Project) => {
  currentProject = theProject;
};

export var setProjectsList = (listOfProjects: Project[]) => {
  projectsList = listOfProjects;
};

export var setiModelsList = (listOfModels: HubIModel[]) => {
  iModelsList = listOfModels;
};

/**
 * Initializes Electron backend
 */
const manager = new IModelJsElectronManager(path.join(__dirname, "..", "..", "webresources"));
export default function initialize(rpcs: RpcInterfaceDefinition[]) {

  //Much of electron and iModelJS's functionality is wrapped in promises, so this nested async function is needed to avoid unhandled promise exceptions
  (async () => { // tslint:disable-line:no-floating-promises
    await manager.initialize({
      width: 1280,
      height: 800,
      title: "Plant View",

      //Web preferences deal with the paths the main electron window will use
      webPreferences: {
        preload: path.resolve('preload.js'),
        experimentalFeatures: true, // Needed for CSS Grid support
      },
      autoHideMenuBar: true,
      show: false,
    });
    // tell ElectronRpcManager which RPC interfaces to handle
    ElectronRpcManager.initializeImpl({}, rpcs);
    if (manager.mainWindow) {
      manager.mainWindow.show();
    }
  })();

  /* This part of the code is a global shortcut, these allow you to apply key bdings to the window eg: f5 = refreshing the page
  const globalShortcut = getGlobalShortcut();
  if(globalShortcut) {
  globalShortcut.register("f5", () => {
    if (manager.mainWindow)
      manager.mainWindow.reload();
  });
  } */
}

/* initialize the opening of a secondary window, parented by the main window */
export function initializePopup() {
  (async () => { // tslint:disable-line:no-floating-promises
    const secondaryWindow = new electron.remote.BrowserWindow(
      {
        width: 640,
        height: 400,

        //establishes this windows relation to its parent window
        parent: manager.mainWindow,
        resizable: true,
        title: "List of iModels",
        webPreferences: {
          experimentalFeatures: true,
        },
      },
    );

    //once the secondary window has been initialized, low its relative files, send messages across the main window
    if (manager.mainWindow)
      manager.mainWindow.addTabbedWindow(secondaryWindow);
    secondaryWindow.webContents.send("currentProject", currentProject);
    secondaryWindow.webContents.send("projectsList", projectsList);
    secondaryWindow.webContents.send("iModelsList", iModelsList);
    secondaryWindow.loadFile("../../../../../src/frontend/iModelList.html");
  })();
}
