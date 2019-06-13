"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const imodeljs_common_1 = require("@bentley/imodeljs-common");
const rpcs_1 = require("../../common/rpcs");
/**
 * Initializes RPC communication based on the platform
 */
function initRpc(rpcParams) {
    let config;
    const rpcInterfaces = rpcs_1.default();
    if (imodeljs_common_1.ElectronRpcConfiguration.isElectron) {
        // initializes RPC for Electron
        config = imodeljs_common_1.ElectronRpcManager.initializeClient({}, rpcInterfaces);
    }
    else {
        // initialize RPC for web apps
        if (!rpcParams)
            rpcParams = { info: { title: "PlantView", version: "v1.0" }, uriPrefix: "http://localhost:3001" };
        config = imodeljs_common_1.BentleyCloudRpcManager.initializeClient(rpcParams, rpcInterfaces);
    }
    return config;
}
exports.default = initRpc;
//# sourceMappingURL=rpc.js.map