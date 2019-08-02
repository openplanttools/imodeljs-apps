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

/**
 *  This method reads the config, parses it into a JSON object, and returns it back to the renderer
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

/**
 * This method sets the project name in the settings.json
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

      // Reads current config contents, creates a window displaying the data with options
      electronFs.readFile(path.join(__dirname, "../../common/iModel.Settings.json"), (error: Error | null, data: any) => {
        const jsonObject = JSON.parse(data);
        console.log(error);
        let buttonsArray = ["Exit", "Select new configuration file", "Continue with current configuration"];
        if (jsonObject.project_name.length < 1 || jsonObject.imodel_name < 1) {
          buttonsArray = ["Exit", "Select new configuration file"];
        }
        electron.dialog.showMessageBox({
          title: "OpenPlant Viewer",
          message: "Current project: " + jsonObject.project_name + " Current iModel: " + jsonObject.imodel_name,
          buttons: buttonsArray,
        }, (index: number) => {
          console.log(index);

          // Conditionals dealing with the outcomes of the buttons on the startup screen
          if (index === 0) {
            electron.app.quit();
          } else if (index === 1) {
            createFileSelectionWindow();
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

/**
 * Displays the data currently in the iModel.Settings.json file
 * @param jsonObject The contents of the configuration file
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

/** Creates a modal file selection window
 * @param event The event sent if called from renderer processes, normally not used
 */
export function createFileSelectionWindow(event?: electron.Event) {

  // creates a filter to be applied in the window
  const fileFilters: electron.FileFilter[] = [];
  const configurationFilter: electron.FileFilter = {
    name: ".json",
    extensions: ["Settings.json"],
  };
  fileFilters.push(configurationFilter);

  // opens the window, binds the callback function and applies the filter
  if (manager.mainWindow) {
    electron.dialog.showOpenDialog(manager.mainWindow, {
      title: "Select configuration File",
      properties: ["openFile", "multiSelections"],
      filters: fileFilters,
    }, (filePaths) => {
      if (!filePaths) {
        electron.app.quit();
      }
      fileSelectionData(filePaths, event);
    });
  }
}

/**
 * Handles the file paths chosen by the file selection window
 * @param filePath the file paths chosen
 * @param event if the window is opened from the renderer processes, the event that is sent
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
      editConfig(jsonObject.project_name, jsonObject.imodel_name);
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
 * @param drawingName string wsgId of the new drawing
 */
export const editConfig = (projectName: string, imodelName: string) => {
  const newConfig = {
    imodel_name: imodelName,
    project_name: projectName,
    drawing_name: "",
  };
  const stringifiedConfig = JSON.stringify(newConfig);
  electronFs.writeFileSync(path.join(__dirname, "../../common/iModel.Settings.json"), stringifiedConfig);
};

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
