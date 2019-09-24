/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
import "./Components.scss";
import { propertiesClick } from "./App";

/** React properties for the properties button */
export interface PropertiesButtonProps {
  /** whether or not an element is selected in the viewport */
  elementSelected: boolean;
}

/** Properties button for the viewport in the viewer app */
export default class PropertiesButton extends React.Component<PropertiesButtonProps> {

  /** Enables toggling the Properties widget in the toolbar */
  public async properties() {
    await propertiesClick();
  }

  /** Renders the properties button */
  public render() {
    if (!this.props.elementSelected) { // no elements selected
      return (
        <div className="properties-normal">
          <a href="#" className="tool" title="Properties" onClick={this.properties}><span className="icon icon-info"></span></a>
        </div>
      );
    } else { // element(s) selected
      return (
        <div className="properties-highlighted">
          <a href="#" className="tool" title="Properties" onClick={this.properties}><span className="icon icon-info"></span></a>
        </div>
      );
    }
  }
}
