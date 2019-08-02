/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
import {
  IModelApp,
  ZoomViewTool, PanViewTool, SelectionTool, FitViewTool,
  // ScreenViewport, Viewport, ViewState,
} from "@bentley/imodeljs-frontend";

import "./Components.scss";

/** Toolbar containing simple navigation tools */
const toolbar = () => {
//   const style = IModelApp.viewManager.selectedView;
//  // WIP NCIK
//   if(style){
//     ViewState.changeCategoryDisplay;
//     style.view;
//   }
  return (
    <div className="toolbar">
      <a href="#" title={SelectionTool.flyover} onClick={select}><span className="icon icon-cursor"></span></a>
      <a href="#" title={FitViewTool.flyover} onClick={fitView}><span className="icon icon-fit-to-view"></span></a>
      <a href="#" title={PanViewTool.flyover} onClick={pan}><span className="icon icon-hand-2"></span></a>
      <a href="#" title={ZoomViewTool.flyover} onClick={zoom}><span className="icon icon-zoom"></span></a>
    </div>
  );
};

/**
 * See the https://imodeljs.github.io/iModelJs-docs-output/learning/frontend/tools/
 * for more details and available tools.
 */

 /** Enables making a selection in the viewport */
export const select = () => {
  IModelApp.tools.run(SelectionTool.toolId);
};

 /** Fits the view in the viewport */
export const fitView = () => {
  IModelApp.tools.run(FitViewTool.toolId, IModelApp.viewManager.selectedView);
};

 /** Enables panning in the viewport */
const pan = () => {
  IModelApp.tools.run(PanViewTool.toolId, IModelApp.viewManager.selectedView);
};

 /** Enables zooming in the viewport */
const zoom = () => {
  IModelApp.tools.run(ZoomViewTool.toolId, IModelApp.viewManager.selectedView);
};

export default toolbar;
