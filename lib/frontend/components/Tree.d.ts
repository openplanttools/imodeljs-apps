import * as React from "react";
import { IModelConnection } from "@bentley/imodeljs-frontend";
import { TreeNodeItem } from "@bentley/ui-components";
import { IPresentationTreeDataProvider } from "@bentley/presentation-components";
/** React properties for the tree component, that accepts an iModel connection with ruleset id */
export interface IModelConnectionProps {
    /** iModel whose contents should be displayed in the tree */
    imodel: IModelConnection;
    /** ID of the presentation rule set to use for creating the hierarchy in the tree */
    rulesetId: string;
    onNodesSelected?: (nodes: TreeNodeItem[], replace: boolean) => boolean;
}
/** React properties for the tree component, that accepts a data provider */
export interface DataProviderProps {
    /** Custom tree data provider. */
    dataProvider: IPresentationTreeDataProvider;
    onNodesSelected?: (nodes: TreeNodeItem[], replace: boolean) => boolean;
}
/** React properties for the tree component */
export declare type Props = IModelConnectionProps | DataProviderProps;
/** Tree component for the viewer app */
export default class SimpleTreeComponent extends React.PureComponent<Props> {
    private getDataProvider;
    render(): JSX.Element;
}
//# sourceMappingURL=Tree.d.ts.map