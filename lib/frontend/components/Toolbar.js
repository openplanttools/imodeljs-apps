"use strict";
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const imodeljs_frontend_1 = require("@bentley/imodeljs-frontend");
require("./Components.scss");
/** Toolbar containing simple navigation tools */
const toolbar = () => {
    return (React.createElement("div", { className: "toolbar" },
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.SelectionTool.flyover, onClick: select },
            React.createElement("span", { className: "icon icon-cursor" })),
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.FitViewTool.flyover, onClick: fitView },
            React.createElement("span", { className: "icon icon-fit-to-view" })),
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.RotateViewTool.flyover, onClick: rotate },
            React.createElement("span", { className: "icon icon-gyroscope" })),
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.PanViewTool.flyover, onClick: pan },
            React.createElement("span", { className: "icon icon-hand-2" })),
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.ZoomViewTool.flyover, onClick: zoom },
            React.createElement("span", { className: "icon icon-zoom" }))));
};
/**
 * See the https://imodeljs.github.io/iModelJs-docs-output/learning/frontend/tools/
 * for more details and available tools.
 */
const select = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.SelectionTool.toolId);
};
const fitView = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.FitViewTool.toolId, imodeljs_frontend_1.IModelApp.viewManager.selectedView);
};
const rotate = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.RotateViewTool.toolId, imodeljs_frontend_1.IModelApp.viewManager.selectedView);
};
const pan = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.PanViewTool.toolId, imodeljs_frontend_1.IModelApp.viewManager.selectedView);
};
const zoom = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.ZoomViewTool.toolId, imodeljs_frontend_1.IModelApp.viewManager.selectedView);
};
exports.default = toolbar;
//# sourceMappingURL=Toolbar.js.map