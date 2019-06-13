/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
// import {
//   IModelApp, IModelConnection,
//   ZoomViewTool, PanViewTool, RotateViewTool, SelectionTool, FitViewTool,
// } from "@bentley/imodeljs-frontend";
/*
import {
  IModelApp,
  ZoomViewTool, PanViewTool, RotateViewTool, SelectionTool, FitViewTool,
} from "@bentley/imodeljs-frontend";
*/
import "./Group.scss";
import { Button, ButtonType } from "@bentley/ui-core";
//import { IModelJsElectronManager } from "@bentley/electron-manager";
//import { IModelHubClient } from "@bentley/imodeljs-clients";

/** Toolbar containing simple navigation tools */
const groupWidget = () => {
  return (
      <div>
        <link rel='stylesheet' href='Group.scss' type='text/css' />
        <h2>New iModel</h2>
        <div className = "formField">
        <input type='text' id="openinput" name='text1' />
        <form name="form1" action="#" /*METHOD*/>
        </form>
        </div>
          <div className="midLeft">
          <Button id="submitt" buttonType= {ButtonType.Primary} name="submit" value="Submit">Submit</Button>
          {/* <div className="column"><input type='button' id="submitt" value="Submit"></input></div>
          <div className="column"><input type='button' id="newImodel" value="Select new iModel"></input></div> */}
          <Button id = "newImodel" buttonType= {ButtonType.Primary} title="newImodel">View iModels</Button>
          </div>
      </div>
        );
      };
      // const select = () => {
      //   let iModelList = IModelConnection.rootSubjectId
      // };
      /**
       * See the https://imodeljs.github.io/iModelJs-docs-output/learning/frontend/tools/
       * for more details and available tools.
       */
/*
const select = () => {
          IModelApp.tools.run(SelectionTool.toolId);
        };

const fitView = () => {
          IModelApp.tools.run(FitViewTool.toolId, IModelApp.viewManager.selectedView);
        };

const rotate = () => {
          IModelApp.tools.run(RotateViewTool.toolId, IModelApp.viewManager.selectedView);
        };

const pan = () => {
          IModelApp.tools.run(PanViewTool.toolId, IModelApp.viewManager.selectedView);
        };

const zoom = () => {
          IModelApp.tools.run(ZoomViewTool.toolId, IModelApp.viewManager.selectedView);
        };
*/
        export default groupWidget;
