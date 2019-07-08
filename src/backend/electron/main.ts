/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as path from "path";
import { RpcInterfaceDefinition, ElectronRpcManager } from "@bentley/imodeljs-common";
import { IModelJsElectronManager } from "@bentley/electron-manager";
import * as electron from "electron";
import * as configurationData from "../../common/config.json";
const electronFs = require("fs");

/** Testing method for updating config.json */
export let testingMethod = () => {
  const temp = {
    imodel_name : "testing",
    project_name : "testing",
    drawing_name : "testing",
  };
  const newTemp = JSON.stringify(temp);
 electronFs.writeFileSync(path.join(__dirname, "../../common/config.json"), newTemp);
};

/** Method to change the iModelName stored in the config.json
 * @param iModelName string wsgId of the new iModel
 */
export const changeiModel = (iModelName: string) => {
const newConfig = {
  imodel_name : iModelName,
  project_name : configurationData.project_name,
  drawing_name : configurationData.drawing_name,
};
const stringifiedConfig = JSON.stringify(newConfig);
electronFs.writeFileSync(path.join(__dirname, "../../common/config.json"), stringifiedConfig);
};

/** Method to change the iModelName stored in the config.json
 * @param ProjectName string wsgId of the new Project
 */
export const changeProject = (projectName: string) => {
  const newConfig = {
    imodel_name : configurationData.imodel_name,
    project_name : projectName,
    drawing_name : configurationData.drawing_name,
  };
  const stringifiedConfig = JSON.stringify(newConfig);
  electronFs.writeFileSync(path.join(__dirname, "../../common/config.json"), stringifiedConfig);
};

/** Method to change the iModelName stored in the config.json
 * @param drawingName string wsgId of the new drawing
 */
export const drawingName = (drawingName: string) => {
  const newConfig = {
    imodel_name : configurationData.imodel_name,
    project_name : configurationData.project_name,
    drawing_name : drawingName,
  };
  const stringifiedConfig = JSON.stringify(newConfig);
  electronFs.writeFileSync(path.join(__dirname, "../../common/config.json"), stringifiedConfig);
};

import { HubIModel, Project } from "@bentley/imodeljs-clients";
import { Drawing } from "@bentley/imodeljs-backend";

// Console logging conditionals, that ensure that electron backend has loaded property, a problem with older versions of the application, that can arise
// again when improperly importing and using electron modules
// if (electron) {
//   console.log("Electron is loaded");
// } else {
//   console.log("Electron not loaded");
// }
// if (electron.ipcMain) {
//   console.log(electron.ipcMain + "electron ipc main loaded");
// }

// The following four variables are bound to functions, and serve as getters and settings for backend-frontend communication
// This is because external components that require data gathered in App.tsx, are unable to import that file, due to security reasons.
// Thus the data must travel App.tsx -> main.ts (backend) -> component that needs the data
// This data is stored here as instance variables
let iModelsList: HubIModel[];
let projectsList: Project[];
let currentProject: Project;
let drawingsList: Drawing[];

// Getters and setters for instance variables, that provide frontend <-> backend communication
export let getIModelsList = () => {
  return iModelsList;
};

export let getProjectsList = () => {
  return projectsList;
};

export let getCurrentProject = () => {
  return currentProject;
};

export let getDrawingsList = () => {
  return drawingsList;
};

export let setCurrentProject = (theProject: Project) => {
  currentProject = theProject;
};

export let setProjectsList = (listOfProjects: Project[]) => {
  projectsList = listOfProjects;
};

export let setIModelsList = (listOfModels: HubIModel[]) => {
  iModelsList = listOfModels;
};

export let setDrawingsList = (listOfDrawings: Drawing[]) => {
  drawingsList = listOfDrawings;
};

/**
 * Initializes Electron backend
 */
const manager = new IModelJsElectronManager(path.join(__dirname, "..", "..", "webresources"));
export default function initialize(rpcs: RpcInterfaceDefinition[]) {

  // Much of electron and iModelJS's functionality is wrapped in promises, so this nested async function is needed to avoid unhandled promise exceptions
  (async () => { // tslint:disable-line:no-floating-promises
    await manager.initialize({
      width: 1280,
      height: 800,
      title: "Plant View",

      // Web preferences deal with the paths the main electron window will use
      webPreferences: {
        preload: path.resolve("preload.js"),
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
  testingMethod();
}

/* initialize the opening of a secondary window, parented by the main window */
export function initializePopup() {
  (async () => { // tslint:disable-line:no-floating-promises
    const secondaryWindow = new electron.remote.BrowserWindow(
      {
        width: 640,
        height: 400,

        // establishes this windows relation to its parent window
        parent: manager.mainWindow,
        resizable: true,
        title: "List of iModels",
        webPreferences: {
          experimentalFeatures: true,
        },
      },
    );

    // once the secondary window has been initialized, low its relative files, send messages across the main window
    if (manager.mainWindow)
      manager.mainWindow.addTabbedWindow(secondaryWindow);
    secondaryWindow.webContents.send("currentProject", currentProject);
    secondaryWindow.webContents.send("projectsList", projectsList);
    secondaryWindow.webContents.send("iModelsList", iModelsList);
    secondaryWindow.loadFile("../../../../../src/frontend/iModelList.html");
  })();
}
