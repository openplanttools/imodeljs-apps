/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as path from "path";
import { RpcInterfaceDefinition, ElectronRpcManager} from "@bentley/imodeljs-common";
import { IModelJsElectronManager } from "@bentley/electron-manager";
// const EventEmitter = require("events");
// var myEE = new EventEmitter();

// import {getIModelsList, getCurrentProject} from "../../frontend/components/App";
//import * as iModelList from "../../frontend/components/iModelList";
// import {BrowserWindow } from "electron";
import * as electron from "electron";
// const IPC = electron.remote.ipcMain;
import { HubIModel, Project } from "@bentley/imodeljs-clients";

// IPC.on("iModelData", (theProject: Project, iModelList: HubIModel[]) => {
//   console.log("Message Received from main");
//   iModelsList = iModelList;
//   currentProject = theProject;
// });
var iModelsList: HubIModel[];
var currentProject: Project;

export const getiModelsList = () => {
  return iModelsList;
};

export const getCurrentProject = () => {
  return currentProject;
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
    // manager.mainWindow.webContents.on('did-finish-load', () => {
    //   if(manager.mainWindow)
    //   manager.mainWindow.setTitle("PlantView");
    // })
    manager.mainWindow.show();
  }
  }) ();
}

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
