"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
// tslint:disable:no-console
const imodeljs_common_1 = require("@bentley/imodeljs-common");
const express_server_1 = require("@bentley/express-server");
/**
 * Initializes Web Server backend
 */
async function initialize(rpcs) {
    // tell BentleyCloudRpcManager which RPC interfaces to handle
    const rpcConfig = imodeljs_common_1.BentleyCloudRpcManager.initializeImpl({ info: { title: "simple-viewer-app", version: "v1.0" } }, rpcs);
    const port = Number(process.env.PORT || 3001);
    const server = new express_server_1.IModelJsExpressServer(rpcConfig.protocol);
    await server.initialize(port);
    console.log("RPC backend for simple-viewer-app listening on port " + port);
}
exports.default = initialize;
//# sourceMappingURL=BackendServer.js.map