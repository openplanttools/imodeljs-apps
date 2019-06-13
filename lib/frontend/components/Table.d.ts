import * as React from "react";
import { IModelConnection } from "@bentley/imodeljs-frontend";
import { IPresentationTableDataProvider } from "@bentley/presentation-components";
/** React properties for the table component, that accepts an iModel connection with ruleset id */
export interface IModelConnectionProps {
    /** iModel whose contents should be displayed in the table */
    imodel: IModelConnection;
    /** ID of the presentation rule set to use for creating the content displayed in the table */
    rulesetId: string;
}
/** React properties for the table component, that accepts a data provider */
export interface DataProviderProps {
    /** Custom property pane data provider. */
    dataProvider: IPresentationTableDataProvider;
}
/** React properties for the table component */
export declare type Props = IModelConnectionProps | DataProviderProps;
/** Table component for the viewer app */
export default class SimpleTableComponent extends React.PureComponent<Props> {
    private getDataProvider;
    render(): JSX.Element;
}
//# sourceMappingURL=Table.d.ts.map