/*---------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
 * Licensed under the MIT License. See LICENSE.md in the project root for license terms.
 *--------------------------------------------------------------------------------------------*/
import { app as electron, ipcMain, Event, app } from "electron";
import { Logger } from "@bentley/bentleyjs-core";
import { IModelHost } from "@bentley/imodeljs-backend";
import getSupportedRpcs from "../common/rpcs";
import { RpcInterfaceDefinition } from "@bentley/imodeljs-common";
import setupEnv from "../common/configuration";
import {readSettings, readData, readEquipmentCols} from "./electron/main";
import { SqlConnection } from "./Database";

const globals:any = global;

ipcMain.on("readSettings", (event: Event, arg: any) => {
  if (event) {
    console.log(arg);
  }
  readSettings(event, arg);
});

ipcMain.on("readConfig", (event: Event, arg: any) => {
    if (event) {
      console.log(arg);
    }
    readData(event, arg);
});

ipcMain.on("readEquipmentCols", (event: Event, arg: any) => {
    if (event) {
      console.log(arg);
    }
    readEquipmentCols(event);
});

ipcMain.on("insertIntoTable", async (event: Event, arg: any) => {
  if (event) {
    console.log(arg);
  }

  let conn: SqlConnection;
  const dbName = "Vendor-iModelLink.bim";
  console.log( globals["newSqliteConnection"] );

  if ( globals["newSqliteConnection"] ) {
    console.log( "SAVED CONN  " );
    conn = globals["newSqlConnection"];
  } else {
    console.log("NEW CONN: ", globals["vendorDbPathSqlite"] + dbName, "  " );
    conn = new SqlConnection(globals["vendorDbPathSqlite"] + dbName);
    globals["newSqliteConnection"] = conn;
  }

  if (arg.length > 0 && conn){
    conn.createVendorComponentTable();
    conn.insert(arg.toString());
    console.log("Inserted Data");
  }
});


// setup environment
setupEnv();

// initialize logging
Logger.initializeToConsole();

// initialize imodeljs-backend
IModelHost.startup();

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

  ipcMain.on("executeQuery", async (event: Event, arg: any) => {
    console.log(event);
    var connection = globals["vendorDbSqliteConnection"];
    console.log(connection);
    let result: any = "";
    await connection.execute(arg).then((data: any) => {
      console.log(data);
      result = data
    });
    console.log(result);
    event.sender.send("readResultSet", result);
  });

  electron.on("before-quit", async () => {
    console.log("QUitting the app");
    if ( globals["vendorDbSqliteConnection"] ) {
      globals["vendorDbSqliteConnection"].close();
      console.log( globals["vendorDbSqliteConnection"] );
    }
    if ( globals["vendorDbSqliteConnection"] ) {
      globals["newSqliteConnection"].close();
      console.log( globals["newSqliteConnection"] );
    }
    app.exit();
  });
})();
