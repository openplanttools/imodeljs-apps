/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
import {
  IModelApp,
  ZoomViewTool, PanViewTool, SelectionTool, FitViewTool, RotateViewTool,
} from "@bentley/imodeljs-frontend";
import "./Components.scss";

/** React properties for the toolbar */
export interface ToolbarProps {
  /** whether or not the viewport is in 3D */
  is3D: boolean;
}

/** React state for the open iModel button */
interface ToolbarState {
  /** the current selection in the toolbar */
  currentSelection: ToolbarSelection;
}

/** Properties button for the viewport in the viewer app */
export default class Toolbar extends React.PureComponent<ToolbarProps, ToolbarState> {

  /** Sets the current toolbar selection to none by default */
  public state = {
    currentSelection: ToolbarSelection.none,
  };

  /**
   * See the https://imodeljs.github.io/iModelJs-docs-output/learning/frontend/tools/
   * for more details and available tools.
   */

  /** Enables making a selection in the viewport */
  public select() {
    console.log("SELECT");
    // this.setState({ currentSelection: ToolbarSelection.select });

    // if (this.state.currentSelection === ToolbarSelection.select) {
      console.log("SELECT SUCCESS");
      IModelApp.tools.run(SelectionTool.toolId);
    // }
  }

  /** Fits the view in the viewport */
  public fitView() {
    console.log("FITVIEW");
    // this.setState({ currentSelection: ToolbarSelection.fitView });

    // if (this.state.currentSelection === ToolbarSelection.fitView) {
      console.log("FITVIEW SUCCESS");
      IModelApp.tools.run(FitViewTool.toolId, IModelApp.viewManager.selectedView);
    // }
  }

  /** Enables rotating in the viewport */
  public rotate() {
    console.log("ROTATE");
    // this.setState({ currentSelection: ToolbarSelection.rotate });

    // if (this.state.currentSelection === ToolbarSelection.rotate) {
      console.log("ROTATE SUCCESS");
      IModelApp.tools.run(RotateViewTool.toolId, IModelApp.viewManager.selectedView);
    // }
  }

  /** Enables panning in the viewport */
  public pan() {
    console.log("PAN");
    // this.setState({ currentSelection: ToolbarSelection.pan });

    // if (this.state.currentSelection === ToolbarSelection.pan) {
      console.log("PAN SUCCESS");
      IModelApp.tools.run(PanViewTool.toolId, IModelApp.viewManager.selectedView);
    // }
  }

  /** Enables zooming in the viewport */
  public zoom() {
    console.log("ZOOM");
    // this.setState({ currentSelection: ToolbarSelection.zoom });

    // if (this.state.currentSelection === ToolbarSelection.zoom) {
      console.log("ZOOM SUCCESS");
      IModelApp.tools.run(ZoomViewTool.toolId, IModelApp.viewManager.selectedView);
    // }
  }

  /** Renders the properties button */
  public render() {
    if (this.props.is3D) { // enable rotate if in 3D
      return (
        <div className="toolbar">
          <a href="#" className="tool" title={SelectionTool.flyover} onClick={this.select}><span className="icon icon-cursor"></span></a>
          <a href="#" className="tool" title={FitViewTool.flyover} onClick={this.fitView}><span className="icon icon-fit-to-view"></span></a>
          <a href="#" className="tool" title={RotateViewTool.flyover} onClick={this.rotate}><span className="icon icon-gyroscope"></span></a>
          <a href="#" className="tool" title={PanViewTool.flyover} onClick={this.pan}><span className="icon icon-hand-2"></span></a>
          <a href="#" className="tool" title={ZoomViewTool.flyover} onClick={this.zoom}><span className="icon icon-zoom"></span></a>
        </div>
      );
    } else { // disable rotate if in 2D
      return (
        <div className="toolbar">
          <a href="#" className="tool" title={SelectionTool.flyover} onClick={this.select}><span className="icon icon-cursor"></span></a>
          <a href="#" className="tool" title={FitViewTool.flyover} onClick={this.fitView}><span className="icon icon-fit-to-view"></span></a>
          <a href="#" className="tool" title={PanViewTool.flyover} onClick={this.pan}><span className="icon icon-hand-2"></span></a>
          <a href="#" className="tool" title={ZoomViewTool.flyover} onClick={this.zoom}><span className="icon icon-zoom"></span></a>
        </div>
      );
    }
  }
}

/** The possible selections for the toolbar */
enum ToolbarSelection {
  none,
  select,
  fitView,
  rotate,
  pan,
  zoom,
}

/** Exports a function to automatically fit the view */
export function fitTheView() {
  IModelApp.tools.run(FitViewTool.toolId, IModelApp.viewManager.selectedView);
}
