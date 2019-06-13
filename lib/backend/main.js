"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const path = require("path");
const electron_1 = require("electron");
const bentleyjs_core_1 = require("@bentley/bentleyjs-core");
const imodeljs_backend_1 = require("@bentley/imodeljs-backend");
const presentation_backend_1 = require("@bentley/presentation-backend");
const rpcs_1 = require("../common/rpcs");
const configuration_1 = require("../common/configuration");
// setup environment
configuration_1.default();
// initialize logging
bentleyjs_core_1.Logger.initializeToConsole();
// initialize imodeljs-backend
imodeljs_backend_1.IModelHost.startup();
// initialize presentation-backend
presentation_backend_1.Presentation.initialize({
    // Specify location of where application's presentation rule sets are located.
    // May be omitted if application doesn't have any presentation rules.
    rulesetDirectories: [path.join("assets", "presentation_rules")],
});
// invoke platform-specific initialization
// tslint:disable-next-line:no-floating-promises
(async () => {
    // get platform-specific initialization function
    let init;
    if (electron_1.app) {
        init = (await Promise.resolve().then(() => require("./electron/main"))).default;
    }
    else {
        init = (await Promise.resolve().then(() => require("./web/BackendServer"))).default;
    }
    // get RPCs supported by this backend
    const rpcs = rpcs_1.default();
    // do initialize
    init(rpcs);
})();
//# sourceMappingURL=main.js.map