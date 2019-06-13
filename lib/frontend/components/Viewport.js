"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = require("react");
const ui_components_1 = require("@bentley/ui-components");
const presentation_components_1 = require("@bentley/presentation-components");
const Toolbar_1 = require("./Toolbar");
// create a HOC viewport component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleViewport = presentation_components_1.viewWithUnifiedSelection(ui_components_1.ViewportComponent);
/** Viewport component for the viewer app */
class SimpleViewportComponent extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(SimpleViewport, { imodel: this.props.imodel, ruleset: this.props.rulesetId, viewDefinitionId: this.props.viewDefinitionId }),
            React.createElement(Toolbar_1.default, null)));
    }
}
exports.default = SimpleViewportComponent;
//# sourceMappingURL=Viewport.js.map