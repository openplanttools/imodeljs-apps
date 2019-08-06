/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
import "./Components.scss";
import { propertiesClick } from "./App";

/** Button for showing the properties of a selected element */
const propertiesButton = () => {
  return (
    <div className="properties">
      <a href="#" className="tool" title="Properties" onClick={properties}><span className="icon icon-info"></span></a>
    </div>
  );
};

/** Enables toggling the Properties widget in the toolbar */
const properties = () => {
  propertiesClick();
};

export default propertiesButton;
