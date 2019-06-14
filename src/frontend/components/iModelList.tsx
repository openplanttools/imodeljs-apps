/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
// const { remote } = require('electron');
// const mainProcess = remote.require('./main.js')
import { Project, HubIModel } from "@bentley/imodeljs-clients";
import { ipcRenderer } from "electron";
var currentProject: Project;
var iModelsList: HubIModel[];

interface IProps {
  title: string;
}
ipcRenderer.on("currentProject", (theProject: Project) => {
currentProject = theProject;
});

ipcRenderer.on("iModelsList", (iModels: HubIModel[]) => {
iModelsList = iModels;
});

/** Toolbar containing simple navigation tools */
export default class IModelList extends React.Component {
  constructor(props: IProps) {
    super(props);
  }
  public render() {
  const topTitle = "Project: " + currentProject + " , List of available iModel's";
  // let iModelNames = [];
  const listOfIModels = iModelsList;
  const nameList = document.createElement("ul");
  if (iModelsList)
    for (let i = 0; i < listOfIModels.length; i++) {
      let listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(listOfIModels[i].wsgId));
      nameList.appendChild(listItem);
    }
  const generatedList: HTMLElement | null = document.getElementById("List");
  if (generatedList) {
    generatedList.appendChild(nameList);
  }
  const title = document.getElementById("Title");
  if (title) {
  title.nodeValue = topTitle;
  }
  return (
    <div>
      <link rel="stylesheet" type="text/css" />
      <h2 title={topTitle}> </h2>
      <div className="List" id="List">
      </div>
    </div>
  );
}
}
// const select = () => {
//   backend.initializePopup();
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
