"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
// tslint:disable:no-console
const bentleyjs_core_1 = require("@bentley/bentleyjs-core");
function init() {
    // map between iModelJs LogFunction signature and console logger
    const errorLogger = (_category, message, getMetaData) => console.log("Error: " + message + (getMetaData ? " " + JSON.stringify(getMetaData()) : ""));
    const warningLogger = (_category, message, getMetaData) => console.log("Warning: " + message + (getMetaData ? " " + JSON.stringify(getMetaData()) : ""));
    const infoLogger = (_category, message, getMetaData) => console.log("Info: " + message + (getMetaData ? " " + JSON.stringify(getMetaData()) : ""));
    bentleyjs_core_1.Logger.initialize(errorLogger, warningLogger, infoLogger);
}
exports.default = init;
//# sourceMappingURL=logging.js.map