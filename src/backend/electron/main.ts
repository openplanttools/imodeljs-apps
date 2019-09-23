/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/
import * as path from "path";
import {
  RpcInterfaceDefinition,
  ElectronRpcManager
} from "@bentley/imodeljs-common";
import { IModelJsElectronManager } from "@bentley/electron-manager";
import { SqlConnection } from "../Database";
import { dialog, app, FileFilter, Event } from "electron";
import * as electronFs from "fs";
import * as messages from "./messages";

let conn: SqlConnection;
/**
 * Initializes Electron backend
 */
export const manager = new IModelJsElectronManager(
  path.join(__dirname, "..", "..", "webresources")
);

export default function initialize(rpcs: RpcInterfaceDefinition[]) {
  (async () => {
    // tslint:disable-line:no-floating-promises

    await manager.initialize({
      width: 800,
      height: 700,
      webPreferences: {
        experimentalFeatures: true // Needed for CSS Grid support
      },
      autoHideMenuBar: true,
      show: false
    });
    // tell ElectronRpcManager which RPC interfaces to handle
    ElectronRpcManager.initializeImpl({}, rpcs);
    if (manager.mainWindow) {

      // Reads current config contents, creates a window displaying the data with options
      console.log(path.join(__dirname, "../../common/iModel.Settings.json"));
      electronFs.readFile(path.join(__dirname, "../../common/iModel.Settings.json"), (error: Error | null, data: any) => {
        const jsonObject = JSON.parse(data);
        // tslint:disable-next-line:no-console
        console.log(error);
        let buttonsArray = [messages.configDialogDefault, messages.configDialogSelect, messages.configDialogExit];
        let validFile: boolean = true;
        if (jsonObject.project_name.length < 1 || jsonObject.imodel_name < 1) {
          validFile = false;
          buttonsArray = [messages.configDialogSelect, messages.configDialogExit];
        }
        dialog.showMessageBox({
          title: messages.initialTitle,
          message: validFile ? `${messages.currentProject}${jsonObject.project_name}${messages.currentiModel}${jsonObject.imodel_name}` : messages.configDialogNoDefault,
          buttons: buttonsArray,
          cancelId: validFile ? 2 : 1, // closes the application if the window is closed
        }, (index: number) => {
          // Conditionals dealing with the outcomes of the buttons on the startup screen

          if (index === 2 || (index === 1 && !validFile)) {
            app.quit();
          } else if ((index === 1 && validFile) || (index === 0 && !validFile)) {
            createFileSelectionWindow();
          } else if (index === 0 && validFile) {
            if (manager.mainWindow) {
              selectDatabase();
            }
          }
        });
      });
    }
  })();
}

function selectDatabase() {
  if (manager.mainWindow) {
  dialog.showOpenDialog(manager.mainWindow, {
    title: "Select external database file",
    properties: ['openFile'],
    filters: [{ name: 'All Files', extensions: ['db'] }]
  }, (path: any) => {
    console.log(path[0]);
    conn = new SqlConnection(path[0]);
    console.log(conn);
    if (manager.mainWindow) {
      manager.mainWindow.show();
    }

  });
}
}

export function createFileSelectionWindow() {

  // creates a filter to be applied in the window
  const fileFilters: FileFilter[] = [];
  const configurationFilter: FileFilter = {
    name: ".json",
    extensions: ["Settings.json"],
  };
  fileFilters.push(configurationFilter);

  // opens the window, binds the callback function and applies the filter
  if (manager.mainWindow) {
    dialog.showOpenDialog(manager.mainWindow, {
      title: messages.selectionTitle,
      properties: ["openFile", "multiSelections"],
      filters: fileFilters,
    }, (filePaths) => {
      if (!filePaths) {
        app.quit();
      }
      fileSelectionData(filePaths);
      selectDatabase();
    });
  }
}

export const fileSelectionData = (filePath: string[]) => {
  const configObject: any = "";
  if (!filePath) { // if the window is closed without a file selected, closes the application without error
    // NOTE: should maybe try to return to the original dialog
    app.quit();
    return;
  }
  electronFs.readFile(filePath[0], (error: Error | null, data: any) => {
    if (error) {
      // tslint:disable-next-line:no-console
      console.log("error " + error);
    }
    const jsonObject = JSON.parse(data);
    console.log("Sleected file data: ", jsonObject);
    if (jsonObject.imodel_name.length < 1 || jsonObject.project_name.length < 1) {
      app.quit();
    } else {
      editConfig(jsonObject.project_name, jsonObject.imodel_name);

    }
  });
  return configObject;
};

export const editConfig = (projectName: string, imodelName: string) => {
  const newConfig = {
    project_name: projectName,
    imodel_name: imodelName
  };
  const stringifiedConfig = JSON.stringify(newConfig);
  electronFs.writeFileSync(path.join(__dirname, "../../common/iModel.Settings.json"), stringifiedConfig);
};

export const readData = (event?: Event, arg?: any) => {
  let configObject: any = "";
  electronFs.readFile(path.join(__dirname, "../../common/iModel.Settings.json"), (error: Error | null, data: any) => {
    if (error) {
      // tslint:disable-next-line:no-console
      console.log("error " + error + arg);
    }
    const jsonObject = JSON.parse(data);
    configObject = jsonObject;
    if (event) {
      event.sender.send("readConfigResults", jsonObject);
    }
  });
  return configObject;
};

export { conn };
