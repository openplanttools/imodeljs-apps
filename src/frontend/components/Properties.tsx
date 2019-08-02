/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { IModelApp, IModelConnection } from "@bentley/imodeljs-frontend";
import { Orientation } from "@bentley/ui-core";
import { PropertyGrid } from "@bentley/ui-components";
import {
  IPresentationPropertyDataProvider,
  PresentationPropertyDataProvider,
  propertyGridWithUnifiedSelection,
} from "@bentley/presentation-components";

// create a HOC property grid component that supports unified selection
// tslint:disable-next-line:variable-name
const SimplePropertyGrid = propertyGridWithUnifiedSelection(PropertyGrid);

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
export type Props = IModelConnectionProps | DataProviderProps;

/** Property grid component for the viewer app */
export default class SimplePropertiesComponent extends React.PureComponent<Props> {

  /** Gets the data provider to fill the Properties widget
   * @param props the data provider props
   */
  private getDataProvider(props: Props) {
    if ((props as any).dataProvider) {
      const providerProps = props as DataProviderProps;
      return providerProps.dataProvider;
    } else {
      const imodelProps = props as IModelConnectionProps;
      const provider: PresentationPropertyDataProvider = new PresentationPropertyDataProvider(imodelProps.imodel, imodelProps.rulesetId);
     this.test(provider);
      return provider;
    }
  }

  /** Tests for the Properties widget
   * @provider the data provider for the Properties widget
   */
  public async test(provider: PresentationPropertyDataProvider) {
    console.log(await provider.getData());
    console.log(await provider.getContentDescriptor());
    console.log(await provider.keys);
  }

  /** Renders the Properties widget */
  public render() {
    return (
      <>
        <h3 data-testid="property-pane-component-header">{IModelApp.i18n.translate("SimpleViewer:components.properties")}</h3>
        <div style={{ flex: "1", height: "calc(100% - 50px)"}}>
          <SimplePropertyGrid
            orientation={Orientation.Horizontal}
            dataProvider={this.getDataProvider(this.props)}
          />
        </div>
      </>
    );
  }
}
