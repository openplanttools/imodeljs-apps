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
import { dialog,  Event } from "electron";
import * as electronFs from "fs";

const globals:any = global;

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
      webPreferences: {
        nodeIntegration: true,
        preload: path.join(__dirname, "preload.js"),
        experimentalFeatures: true, // Needed for CSS Grid support
        webSecurity: true
      },
      autoHideMenuBar: true,
      show: false,
    });
    // tell ElectronRpcManager which RPC interfaces to handle
    ElectronRpcManager.initializeImpl({}, rpcs);
    selectDatabase();
  })();
}


function  selectDatabase() {
  if (manager.mainWindow) {
    dialog.showOpenDialog(manager.mainWindow, {
    title: "Select external database file",
    properties: ['openFile'],
    filters: [{ name: 'All Files', extensions: ['db'] }],
    }, async (path: any) => {
        console.log( path[0] );
        let conn: SqlConnection = new SqlConnection( path[0] );
        globals["vendorDbPathSqlite"] = path[0].substring(0, path[0].lastIndexOf('\\')) + "\\"; // removing filename to get the path only
        globals["vendorDbSqliteConnection"] = conn;

        //conn.insert("INSERT INTO Vendor_Components(VendorId, ComponentId, VendorName, ComponentName) VALUES (1,1,'v1','c1'), (2,2,'v2','c2'),");
        const tableNames: any = await conn.GetTableNames();
        console.log(tableNames);
        conn.GetColNames(tableNames[1]);
        if (manager.mainWindow) {
          manager.mainWindow.show();
        }
      });
  }
}

export const readSettings = (event?: any, arg?: any) => {
  let configObject: any = "";
  electronFs.readFile(path.join(__dirname, "../../common/DisplaySettings.json"), (error: Error | null, data: any) => {
    if (error) {
      // tslint:disable-next-line:no-console
      console.log("error " + error + arg);
    }
    const jsonObject = JSON.parse(data);
    configObject = jsonObject;
    if (event) {
      event.sender.send("readSettingResults", jsonObject);
    }
  });
  return configObject;
};
