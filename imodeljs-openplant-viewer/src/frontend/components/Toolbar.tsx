/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
import { IModelApp, ZoomViewTool, PanViewTool, SelectionTool, FitViewTool, RotateViewTool } from "@bentley/imodeljs-frontend";
import "./Components.scss";
import { expandCollapseViewport } from "./App";

/** React properties for the toolbar */
interface ToolbarProps {
  /** whether or not the viewport is in 3D */
  is3D: boolean;
  /** determines whether the title should say to expand or collapse the view */
  title: string;
}

/** Properties button for the viewport in the viewer app */
export default class Toolbar extends React.PureComponent<ToolbarProps> {
  /**
   * See the https://imodeljs.github.io/iModelJs-docs-output/learning/frontend/tools/
   * for more details and available tools.
   */

  /** Enables making a selection in the viewport */
  private _select = () => {
    IModelApp.tools.run(SelectionTool.toolId);
  }

  /** Fits the view in the viewport */
  private _fitView = () => {
    IModelApp.tools.run(FitViewTool.toolId, IModelApp.viewManager.selectedView);
  }

  /** Enables rotating in the viewport */
  private _rotate = () => {
    IModelApp.tools.run(RotateViewTool.toolId, IModelApp.viewManager.selectedView);
  }

  /** Enables panning in the viewport */
  private _pan = () => {
    IModelApp.tools.run(PanViewTool.toolId, IModelApp.viewManager.selectedView);
  }

  /** Enables zooming in the viewport */
  private _zoom = () => {
    IModelApp.tools.run(ZoomViewTool.toolId, IModelApp.viewManager.selectedView);
  }

  /** Toggles whether the viewport is expanded or collapsed */
  private _expandOrCollapse = () => {
    expandCollapseViewport(this.props.is3D);
  }

  /** Renders the properties button */
  public render() {
    console.log("TOOLBAR!!!!!!");
    console.log(this.props.title);
    if (this.props.is3D) { // enable rotate if in 3D
      return (
        <div className="toolbar">
          <a href="#" className="tool" title={SelectionTool.flyover} onClick={this._select}><span className="icon icon-cursor"></span></a>
          <a href="#" className="tool" title={FitViewTool.flyover} onClick={this._fitView}><span className="icon icon-fit-to-view"></span></a>
          <a href="#" className="tool" title={RotateViewTool.flyover} onClick={this._rotate}><span className="icon icon-gyroscope"></span></a>
          <a href="#" className="tool" title={PanViewTool.flyover} onClick={this._pan}><span className="icon icon-hand-2"></span></a>
          <a href="#" className="tool" title={ZoomViewTool.flyover} onClick={this._zoom}><span className="icon icon-zoom"></span></a>
          <a href="#" className="tool" title={this.props.title} onClick={this._expandOrCollapse}>
            {this.props.title === "Collapse 3D View" ? <span className="icon icon-close"></span> : <img src="split-view.png" alt="Split View"></img>}
          </a>
        </div>
      );
    } else { // disable rotate if in 2D
      return (
        <div className="toolbar">
          <a href="#" className="tool" title={SelectionTool.flyover} onClick={this._select}><span className="icon icon-cursor"></span></a>
          <a href="#" className="tool" title={FitViewTool.flyover} onClick={this._fitView}><span className="icon icon-fit-to-view"></span></a>
          <a href="#" className="tool" title={PanViewTool.flyover} onClick={this._pan}><span className="icon icon-hand-2"></span></a>
          <a href="#" className="tool" title={ZoomViewTool.flyover} onClick={this._zoom}><span className="icon icon-zoom"></span></a>
          <a href="#" className="tool" title={this.props.title} onClick={this._expandOrCollapse}>
            {this.props.title === "Collapse 2D View" ? <span className="icon icon-close"></span> : <img src="split-view.png" alt="Split View"></img>}
          </a>
        </div>
      );
    }
  }
}

/** Exports a function to automatically fit the view */
export function fitTheView() {
  IModelApp.tools.run(FitViewTool.toolId, IModelApp.viewManager.selectedView);
}
