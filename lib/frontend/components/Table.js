"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = require("react");
const ui_components_1 = require("@bentley/ui-components");
const presentation_components_1 = require("@bentley/presentation-components");
// create a HOC table component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleTable = presentation_components_1.tableWithUnifiedSelection(ui_components_1.Table);
/** Table component for the viewer app */
class SimpleTableComponent extends React.PureComponent {
    getDataProvider(props) {
        if (props.dataProvider) {
            const providerProps = props;
            return providerProps.dataProvider;
        }
        else {
            const imodelProps = props;
            return new presentation_components_1.PresentationTableDataProvider({ imodel: imodelProps.imodel, ruleset: imodelProps.rulesetId });
        }
    }
    render() {
        return (React.createElement("div", { style: { height: "100%" } },
            React.createElement(SimpleTable, { dataProvider: this.getDataProvider(this.props) })));
    }
}
exports.default = SimpleTableComponent;
//# sourceMappingURL=Table.js.map