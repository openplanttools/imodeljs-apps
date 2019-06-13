import * as React from "react";
import { IModelConnection } from "@bentley/imodeljs-frontend";
import { IPresentationPropertyDataProvider } from "@bentley/presentation-components";
/** React properties for the property pane component, that accepts an iModel connection with ruleset id */
export interface IModelConnectionProps {
    /** iModel whose contents should be displayed in the property pane */
    imodel: IModelConnection;
    /** ID of the presentation rule set to use for creating the hierarchy in the property pane */
    rulesetId: string;
}
/** React properties for the property pane component, that accepts a data provider */
export interface DataProviderProps {
    /** Custom property pane data provider. */
    dataProvider: IPresentationPropertyDataProvider;
}
/** React properties for the property pane component */
export declare type Props = IModelConnectionProps | DataProviderProps;
/** Property grid component for the viewer app */
export default class SimplePropertiesComponent extends React.PureComponent<Props> {
    private getDataProvider;
    render(): JSX.Element;
}
//# sourceMappingURL=Properties.d.ts.map