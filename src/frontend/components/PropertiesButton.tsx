/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
import "./Components.scss";
import { propertiesClick } from "./App";

/** React properties for the viewport component */
export interface Props {
  /** whether or not an element is selected in the viewport */
  elementSelected: boolean;
}

/** Viewport component for the viewer app */
export default class SimpleViewportComponent extends React.Component<Props> {
  /** Renders the Viewport */
  public render() {
    if (!this.props.elementSelected) { // no elements selected
      return (
        <div className="properties-normal">
          <a href="#" className="tool" title="Properties" onClick={properties}><span className="icon icon-info"></span></a>
        </div>
      );
    } else { // element(s) selected
      return (
        <div className="properties-highlighted">
          <a href="#" className="tool" title="Properties" onClick={properties}><span className="icon icon-info"></span></a>
        </div>
      );
    }
  }
}

/** Enables toggling the Properties widget in the toolbar */
async function properties() {
  await propertiesClick();
}
