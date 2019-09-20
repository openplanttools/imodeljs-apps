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
import * as messages from "./messages";

/**
 * Initializes Electron backend
 */
const manager = new IModelJsElectronManager(path.join(__dirname, "..", "..", "webresources"));

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
      event.sender.send("readConfigResults", jsonObject);
    }
  });

  if (manager.mainWindow) {
     manager.mainWindow.setTitle(messages.mainTitle);
  }

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


export default function initialize(rpcs: RpcInterfaceDefinition[]) {
  // Much of electron and iModelJS's functionality is wrapped in promises, so this nested async function is needed to avoid unhandled promise exceptions
  (async () => { // tslint:disable-line:no-floating-promises
    await manager.initialize({
      width: 1280,
      height: 800,
      title: messages.mainTitle,

      // Web preferences deal with the paths the main electron window will use
      webPreferences: {
        preload: path.resolve("preload.js"),
        experimentalFeatures: true, // Needed for CSS Grid support
      },
      autoHideMenuBar: true, // toggles the visibiliy of the menu bar
      show: false,
    });

    // tell ElectronRpcManager which RPC interfaces to handle
    ElectronRpcManager.initializeImpl({}, rpcs);
    if (manager.mainWindow) {

      // Reads current config contents, creates a window displaying the data with options
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
        electron.dialog.showMessageBox({
          title: messages.mainTitle,
          message: validFile ? `${messages.currentProject}${jsonObject.project_name}${messages.currentiModel}${jsonObject.imodel_name}` : messages.configDialogNoDefault,
          buttons: buttonsArray,
          cancelId: validFile ? 2 : 1, // closes the application if the window is closed
        }, (index: number) => {
          // Conditionals dealing with the outcomes of the buttons on the startup screen

          if (index === 2 || (index === 1 && !validFile)) {
            electron.app.quit();
          } else if ((index === 1 && validFile) || (index === 0 && !validFile)) {
            createFileSelectionWindow();
          } else if (index === 0 && validFile) {
            if (manager.mainWindow) {
              manager.mainWindow.setTitle(messages.mainTitle);
              // manager.mainWindow.setAutoHideMenuBar(true);
              manager.mainWindow.show();
              // does not work manager.mainWindow.setTitle(messages.mainTitle);
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
    electron.dialog.showMessageBox(manager.mainWindow, {
      title: messages.configurationTitle,
      message: `${messages.project}${jsonObject.project_name} ${messages.imodel}${jsonObject.imodel_name}`,
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
      title: messages.selectionTitle,
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
  if (!filePath) { // if the window is closed without a file selected, closes the application without error
    // NOTE: should maybe try to return to the original dialog
    electron.app.quit();
    return;
  }
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

/**
 * Displays a warning to the user, normally sent from the renderer processes
 * @param typeOfError The message to be associated with the error, for logging purposes
 */
export function popupWarning(typeOfError?: string) {
  if (typeOfError) {
    // tslint:disable-next-line: no-console
    console.log(typeOfError + " is the error");
  }

  if (manager.mainWindow) {
    electron.dialog.showMessageBox(manager.mainWindow, { type: "error", message: messages.errorMessage, title: "Error" });
  }
}
