"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = require("react");
const ReactDOM = require("react-dom");
const SimpleViewerApp_1 = require("./api/SimpleViewerApp");
const App_1 = require("./components/App");
require("./index.css");
const configuration_1 = require("../common/configuration");
// setup environment
configuration_1.default();
// initialize the application
SimpleViewerApp_1.SimpleViewerApp.startup();
// tslint:disable-next-line:no-floating-promises
SimpleViewerApp_1.SimpleViewerApp.ready.then(() => {
    // when initialization is complete, render
    ReactDOM.render(React.createElement(App_1.default, null), document.getElementById("root"));
});
//# sourceMappingURL=index.js.map