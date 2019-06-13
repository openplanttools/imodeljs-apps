"use strict";
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import {
//   IModelApp, IModelConnection,
//   ZoomViewTool, PanViewTool, RotateViewTool, SelectionTool, FitViewTool,
// } from "@bentley/imodeljs-frontend";
/*
import {
  IModelApp,
  ZoomViewTool, PanViewTool, RotateViewTool, SelectionTool, FitViewTool,
} from "@bentley/imodeljs-frontend";
*/
require("./Group.scss");
const ui_core_1 = require("@bentley/ui-core");
//import { IModelJsElectronManager } from "@bentley/electron-manager";
//import { IModelHubClient } from "@bentley/imodeljs-clients";
/** Toolbar containing simple navigation tools */
const groupWidget = () => {
    return (React.createElement("div", null,
        React.createElement("link", { rel: 'stylesheet', href: 'Group.scss', type: 'text/css' }),
        React.createElement("h2", null, "New iModel"),
        React.createElement("div", { className: "formField" },
            React.createElement("input", { type: 'text', id: "openinput", name: 'text1' }),
            React.createElement("form", { name: "form1", action: "#" /*METHOD*/ })),
        React.createElement("div", { className: "midLeft" },
            React.createElement(ui_core_1.Button, { id: "submitt", buttonType: ui_core_1.ButtonType.Primary, name: "submit", value: "Submit" }, "Submit"),
            React.createElement(ui_core_1.Button, { id: "newImodel", buttonType: ui_core_1.ButtonType.Primary, title: "newImodel" }, "View iModels"))));
};
// const select = () => {
//   let iModelList = IModelConnection.rootSubjectId
// };
/**
 * See the https://imodeljs.github.io/iModelJs-docs-output/learning/frontend/tools/
 * for more details and available tools.
 */
/*
const select = () => {
          IModelApp.tools.run(SelectionTool.toolId);
        };

const fitView = () => {
          IModelApp.tools.run(FitViewTool.toolId, IModelApp.viewManager.selectedView);
        };

const rotate = () => {
          IModelApp.tools.run(RotateViewTool.toolId, IModelApp.viewManager.selectedView);
        };

const pan = () => {
          IModelApp.tools.run(PanViewTool.toolId, IModelApp.viewManager.selectedView);
        };

const zoom = () => {
          IModelApp.tools.run(ZoomViewTool.toolId, IModelApp.viewManager.selectedView);
        };
*/
exports.default = groupWidget;
//# sourceMappingURL=Group.js.map