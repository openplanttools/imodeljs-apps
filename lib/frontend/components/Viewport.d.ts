import * as React from "react";
import { Id64String } from "@bentley/bentleyjs-core";
import { IModelConnection } from "@bentley/imodeljs-frontend";
/** React properties for the viewport component */
export interface Props {
    /** iModel whose contents should be displayed in the viewport */
    imodel: IModelConnection;
    /** View definition to use when the viewport is first loaded */
    viewDefinitionId: Id64String;
    /** ID of the presentation rule set to use for unified selection */
    rulesetId: string;
}
/** Viewport component for the viewer app */
export default class SimpleViewportComponent extends React.Component<Props> {
    render(): JSX.Element;
}
//# sourceMappingURL=Viewport.d.ts.map