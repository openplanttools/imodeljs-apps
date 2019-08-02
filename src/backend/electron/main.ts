/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as path from "path";
import { RpcInterfaceDefinition, ElectronRpcManager } from "@bentley/imodeljs-common";
import { IModelJsElectronManager } from "@bentley/electron-manager";
import * as electron from "electron";
import * as configurationData from "../../common/iModel.Settings.json";
import * as electronFs from "fs";
// import html from "../../frontend/components/Popup.html";
// tslint:disable: no-console

/** Method to change the iModelName stored in the config.json
 * @param iModelName string wsgId of the new iModel
 */
export const changeiModel = (iModelName: string) => {
  const newConfig = {
    imodel_name: iModelName,
    project_name: configurationData.project_name,
    drawing_name: configurationData.drawing_name,
  };
  const stringifiedConfig = JSON.stringify(newConfig);
  electronFs.writeFileSync(path.join(__dirname, "../../common/iModel.Settings.json"), stringifiedConfig);
};

/** This method reads the config, parses it into a JSON object, and returns it back to the renderer
 * @param event The event sent by the renderer processes back to the main
 */
export const readData = (event?: electron.Event, arg?: string) => {
  let configObject: any = "";
  electronFs.readFile(path.join(__dirname, "../../common/iModel.Settings.json"), (error: Error | null, data: any) => {
    if (error) {
      // tslint:disable-next-line:no-console
      console.log("error " + error + arg);
    }
    const jsonObject = JSON.parse(data);
    configObject = jsonObject;
    if (event) {
        // displayConfig(jsonObject);
        event.sender.send("readConfigResults", jsonObject);
    }
  });
  return configObject;
};

/** This method sets the project name in the settings.json
 * @param projectName The name of the desired project
 */
export const changeProject = (projectName: string) => {
  const newConfig = {
    imodel_name: configurationData.imodel_name,
    project_name: projectName,
    drawing_name: configurationData.drawing_name,
  };
  const stringifiedConfig = JSON.stringify(newConfig);
  electronFs.writeFileSync(path.join(__dirname, "../../common/iModel.Settings.json"), stringifiedConfig);
};

/** Method to change the iModelName stored in the config.json
 * @param drawingName string wsgId of the new drawing
 */
export const changeDrawingName = (drawingName: string) => {
  const newConfig = {
    imodel_name: configurationData.imodel_name,
    project_name: configurationData.project_name,
    drawing_name: drawingName,
  };
  const stringifiedConfig = JSON.stringify(newConfig);
  electronFs.writeFileSync(path.join(__dirname, "../../common/iModel.Settings.json"), stringifiedConfig);
};

// The following four variables are bound to functions, and serve as getters and settings for backend-frontend communication
// This is because external components that require data gathered in App.tsx, are unable to import that file, due to security reasons.
// Thus the data must travel App.tsx -> main.ts (backend) -> component that needs the data

/** Initializes Electron backend
 * @param rpcs the RPC interfaces
 */
const manager = new IModelJsElectronManager(path.join(__dirname, "..", "..", "webresources"));
export default function initialize(rpcs: RpcInterfaceDefinition[]) {
  // Much of electron and iModelJS's functionality is wrapped in promises, so this nested async function is needed to avoid unhandled promise exceptions
  (async () => { // tslint:disable-line:no-floating-promises
    await manager.initialize({
      width: 1280,
      height: 800,
      title: "Plant Viewer",

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
      electronFs.readFile(path.join(__dirname, "../../common/iModel.Settings.json"), (error: Error | null, data: any) => {
        const jsonObject = JSON.parse(data);
        console.log(error);
        let buttonsArray = ["Exit", "Select new configuration file", "Continue with current configuration"];
        if (jsonObject.project_name.length < 1 || jsonObject.imodel_name < 1) {
          buttonsArray = ["Exit", "Select new configuration file"];
        }
        electron.dialog.showMessageBox({
          title: "Configuration Data",
          message: "Current project: " + jsonObject.project_name + " Current iModel: " + jsonObject.imodel_name,
          buttons: buttonsArray,
        }, (index: number) => {
          console.log(index);
          if (index === 0) {
            electron.app.quit();
          } else if (index === 1) {
            newWindow();
          } else if (index === 2) {
            if (manager.mainWindow) {
              manager.mainWindow.show();
            }
          }
        });
      });
    }
  })();
}

/** Displays the current configuration file information
 * @param jsonObject The current config JSON
 */
export function displayConfig(jsonObject: any) {
  if (manager.mainWindow) {
    const configData = "Project: " + jsonObject.project_name + " iModel: " + jsonObject.imodel_name;
    electron.dialog.showMessageBox(manager.mainWindow, {
      title: "Current Configuration",
      message: configData,
    });
  }
}

/** Pops up new window for configuration file selection
 * @param event the selection made by the user
 */
export function newWindow(event?: electron.Event) {
  const test1: electron.FileFilter[] = [];
  const test: electron.FileFilter = {
    name: ".json",
    extensions: ["Settings.json"],
  };
  test1.push(test);
  if (manager.mainWindow) {
    electron.dialog.showOpenDialog(manager.mainWindow, {
      title: "Select configuration File",
      properties: ["openFile", "multiSelections"],
      filters: test1,
    }, (filePaths) => {
      if (!filePaths) {
      }
      fileSelectionData(filePaths, event);
    });
  }
}

/** Reads and parses the configuration file for valid information
 * @param filePath the file path chosen by the user
 * @param event the selection made by the user
 */
export const fileSelectionData = (filePath: string[], event?: electron.Event) => {
  const configObject: any = "";
  electronFs.readFile(filePath[0], (error: Error | null, data: any) => {
    if (error) {
      // tslint:disable-next-line:no-console
      console.log("error " + error);
    }
    const jsonObject = JSON.parse(data);
    if (jsonObject.imodel_name.length < 1 || jsonObject.project_name.length < 1) {
      electron.app.quit();
    } else {
      editConfig(jsonObject.project_name, jsonObject.imodel_name, jsonObject.drawing_name);
      if (event)
      event.sender.send("readConfigResults", jsonObject);
    }
    if (manager.mainWindow) {
      manager.mainWindow.show();
    }
  });
  return configObject;
};

/** Method to change the iModelName stored in the config.json
 * @param projectName string wsgId of the new project
 * @param imodelName string wsgId of the new imodel
 * @param drawingName string wsgId of the new drawing
 */
export const editConfig = (projectName: string, imodelName: string, drawingName: string) => {
  const newConfig = {
    project_name: projectName,
    imodel_name: imodelName,
    drawing_name: drawingName,
  };
  const stringifiedConfig = JSON.stringify(newConfig);
  electronFs.writeFileSync(path.join(__dirname, "../../common/iModel.Settings.json"), stringifiedConfig);
};

/** Creates a warning pop-up for an incorrect JSON file
 * @param typeOfError the type of error with the file
 */
export function popupWarning(typeOfError?: string) {
  if (typeOfError) {
    // tslint:disable-next-line: no-console
    console.log(typeOfError + " is the error");
  }
  const errorMessage = "Warning! The current settings file is incomplete!";
  if (manager.mainWindow) {
    electron.dialog.showMessageBox(manager.mainWindow, { type: "error", message: errorMessage, title: "Error" });
  }
}

// export function tempTest() {
// // let win = new electron.BrowserWindow({frame: true, width: 400, height: 200, webPreferences: {webSecurity: true}});
// // let newPath = path.join(__dirname + "../../../frontend/components/Popup.html");
// // win.loadFile(newPath);
// // win.show();
// }
