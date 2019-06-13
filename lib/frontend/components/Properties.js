"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = require("react");
const imodeljs_frontend_1 = require("@bentley/imodeljs-frontend");
const ui_core_1 = require("@bentley/ui-core");
const ui_components_1 = require("@bentley/ui-components");
const presentation_components_1 = require("@bentley/presentation-components");
// create a HOC property grid component that supports unified selection
// tslint:disable-next-line:variable-name
const SimplePropertyGrid = presentation_components_1.propertyGridWithUnifiedSelection(ui_components_1.PropertyGrid);
/** Property grid component for the viewer app */
class SimplePropertiesComponent extends React.PureComponent {
    getDataProvider(props) {
        if (props.dataProvider) {
            const providerProps = props;
            return providerProps.dataProvider;
        }
        else {
            const imodelProps = props;
            return new presentation_components_1.PresentationPropertyDataProvider(imodelProps.imodel, imodelProps.rulesetId);
        }
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("h3", { "data-testid": "property-pane-component-header" }, imodeljs_frontend_1.IModelApp.i18n.translate("SimpleViewer:components.properties")),
            React.createElement("div", { style: { flex: "1", height: "calc(100% - 50px)" } },
                React.createElement(SimplePropertyGrid, { orientation: ui_core_1.Orientation.Horizontal, dataProvider: this.getDataProvider(this.props) }))));
    }
}
exports.default = SimplePropertiesComponent;
//# sourceMappingURL=Properties.js.map