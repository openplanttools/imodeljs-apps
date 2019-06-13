"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const path = require("path");
const imodeljs_common_1 = require("@bentley/imodeljs-common");
const electron_manager_1 = require("@bentley/electron-manager");
/**
 * Initializes Electron backend
 */
function initialize(rpcs) {
    (async () => {
        const manager = new electron_manager_1.IModelJsElectronManager(path.join(__dirname, "..", "..", "webresources"));
        await manager.initialize({
            width: 1280,
            height: 800,
            title: "PlantView",
            webPreferences: {
                preload: path.resolve('preload.js'),
                experimentalFeatures: true,
            },
            autoHideMenuBar: true,
            show: false,
        });
        // tell ElectronRpcManager which RPC interfaces to handle
        imodeljs_common_1.ElectronRpcManager.initializeImpl({}, rpcs);
        if (manager.mainWindow) {
            // manager.mainWindow.webContents.on('did-finish-load', () => {
            //   if(manager.mainWindow)
            //   manager.mainWindow.setTitle("PlantView");
            // })
            manager.mainWindow.show();
        }
    })();
}
exports.default = initialize;
//# sourceMappingURL=main.js.map