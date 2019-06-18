/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as path from "path";
import { RpcInterfaceDefinition, ElectronRpcManager} from "@bentley/imodeljs-common";
import { IModelJsElectronManager } from "@bentley/electron-manager";
import * as electron from "electron";

import { HubIModel, Project } from "@bentley/imodeljs-clients";
if(electron){
  console.log("Electron is loaded");
} else {
  console.log("Electron not loaded");
}
if(electron.ipcMain){
  console.log(electron.ipcMain + "electron ipc main loaded");
}
var iModelsList: HubIModel[];
var currentProject: Project;

export var getiModelsList = () => {
  return iModelsList;
};

export var getCurrentProject = () => {
  return currentProject;
};

export var setCurrentProject = (theProject: Project) => {
  currentProject = theProject;
};
export var setiModelsList = (listOfModels: HubIModel[]) => {
  iModelsList = listOfModels;
  console.log("IMODELS SET SUCCESSFULLY" + iModelsList);
  for (let i = 0; i < iModelsList.length; i++) {
    console.log(iModelsList[i].name);
  }
};
/**
 * Initializes Electron backend
 */
const manager = new IModelJsElectronManager(path.join(__dirname, "..", "..", "webresources"));
export default function initialize(rpcs: RpcInterfaceDefinition[]) {
(async () => { // tslint:disable-line:no-floating-promises
  await manager.initialize({
    width: 1280,
    height: 800,
    title: "Plant View",

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
  }) ();
}

/* initialize the opening of a secondary window, parented by the main window */
export function initializePopup() {
  (async () => { // tslint:disable-line:no-floating-promises
    const secondaryWindow = new electron.remote.BrowserWindow(
      {
      width: 640,
      height: 400,
      parent: manager.mainWindow,
      resizable: true,
      title: "List of iModels",
      webPreferences: {
        experimentalFeatures: true,
      },
    },
    );
    if (manager.mainWindow)
    manager.mainWindow.addTabbedWindow(secondaryWindow);
    secondaryWindow.webContents.send("currentProject", currentProject);
    secondaryWindow.webContents.send("iModelsList", iModelsList);
    secondaryWindow.loadFile("../../../../../src/frontend/iModelList.html");
  }) ();


}
