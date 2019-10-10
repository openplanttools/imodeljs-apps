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
import { dialog, Event } from "electron";
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
      width: messages.winWidth,
      height: messages.winHeight,
      webPreferences: {
        experimentalFeatures: true // Needed for CSS Grid support
      },
      autoHideMenuBar: true,
      show: false
    });
    // tell ElectronRpcManager which RPC interfaces to handle
    ElectronRpcManager.initializeImpl({}, rpcs);
        selectDatabase();
  })();
}

function  selectDatabase() {
  if (manager.mainWindow) {
  dialog.showOpenDialog( {
    title: "Select external database file",
    properties: ['openFile'],
    filters: [{ name: 'All Files', extensions: ['db'] }]
  }, async (path: any) => {
    console.log(path[0]);
    conn = new SqlConnection(path[0]);
    const tableNames: any = await conn.GetTableNames();
    console.log(tableNames);
    conn.GetColNames(tableNames[1]);
    if (manager.mainWindow) {
      manager.mainWindow.show();
    }

  });
}
}

export const readData = (event?: Event, arg?: any) => {
  let configObject: any = "";
  electronFs.readFile(path.join(__dirname, "../../common/DisplaySettings.json"), (error: Error | null, data: any) => {
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
