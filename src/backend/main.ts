/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as path from "path";
import { app as electron, ipcMain, Event, app } from "electron";
import { Logger } from "@bentley/bentleyjs-core";
import { IModelHost } from "@bentley/imodeljs-backend";
import { Presentation } from "@bentley/presentation-backend";
import getSupportedRpcs from "../common/rpcs";
import { RpcInterfaceDefinition } from "@bentley/imodeljs-common";
import setupEnv from "../common/configuration";
import {changeiModel, changeProject, readData, newWindow, popupWarning} from "./electron/main";
// tslint:disable: no-console

/* This block of listeners await the main app to be ready, and then listen for commands from the app dictating whether to read or write
* to a locally stored JSON file (settings.json). This local file cannot be accessed from the main app, and neither can the methods to read or write a local file
*/
ipcMain.on("imodelSelection",  (event: Event, arg: any) => {
  console.log(event);
  changeiModel(arg);
});

ipcMain.on("closeApplication", (event: Event, arg: any) => {
  if (event) {
    console.log(arg);
  }
  app.quit();
});

ipcMain.on("projectSelection", (event: Event, arg: any) => {
  console.log(event);
  changeProject(arg);
});

ipcMain.on("readConfig", (event: Event, arg: any) => {
if (event) {
  console.log(arg);
}
readData(event, arg);
});

ipcMain.on("popupWarning", (event: Event, arg: any) => {
  if (event) {
    console.log("arg");
  }
  popupWarning(arg);
});

ipcMain.on("configDataMissing", (event: Event, arg: any) => {
if (event) {
  console.log(arg);
}
newWindow();
});
setupEnv();

// initialize logging
Logger.initializeToConsole();
IModelHost.startup();

// initialize presentation-backend
Presentation.initialize({

  // Specify location of where application's presentation rule sets are located.
  // May be omitted if application doesn't have any presentation rules.
  rulesetDirectories: [path.join("assets", "presentation_rules")],
});

// invoke platform-specific initialization
// tslint:disable-next-line:no-floating-promises
(async () => {

  // get platform-specific initialization function
  let init: (rpcs: RpcInterfaceDefinition[]) => void;
  if (electron) {
    init = (await import("./electron/main")).default;
  } else {
    init = (await import("./web/BackendServer")).default;
  }
  // get RPCs supported by this backend
  const rpcs = getSupportedRpcs();
  // do initialize
  init(rpcs);
})();
