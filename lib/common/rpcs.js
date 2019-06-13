"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const imodeljs_common_1 = require("@bentley/imodeljs-common");
const presentation_common_1 = require("@bentley/presentation-common");
/**
 * Returns a list of RPCs supported by this application
 */
function getSupportedRpcs() {
    return [
        imodeljs_common_1.IModelReadRpcInterface,
        imodeljs_common_1.IModelTileRpcInterface,
        presentation_common_1.PresentationRpcInterface,
        imodeljs_common_1.SnapshotIModelRpcInterface,
    ];
}
exports.default = getSupportedRpcs;
//# sourceMappingURL=rpcs.js.map