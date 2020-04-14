/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { remote } from "electron";
import {
  CoreTools, ContentGroup, ContentControl,
  ConfigurableCreateInfo, FrontstageProvider, FrontstageProps,
  Frontstage, ProjectInfo, UiFramework,
} from "@bentley/ui-framework";
import { ProjectSelect } from "@bentley/imodel-select-ui";
import { IModelSelectorApp } from "../index";

class ProjectSelectControl extends ContentControl {
  constructor(info: ConfigurableCreateInfo, options: any) {
    super(info, options);

    this.reactElement = <ProjectSelect onClose={this._onCloseProjectDialog} onProjectSelected={this._onSelectProject} />;
  }

  // called when a project has been selected
  private _onSelectProject = async (projectInfo: ProjectInfo) => {
    const accessToken = UiFramework.getAccessToken();
    const jsonData = {
      token: accessToken,
      project: projectInfo.wsgId
    };
    // log data to stdout and exit with success (0)
    const dataStr: string = JSON.stringify(jsonData);
    const con = remote.getGlobal("console");
    con.log(dataStr);
    await IModelSelectorApp.showIModelSelect();
    /*window.close();
    return process.exit(0);*/
  }

  // called when the project dialog is closed
  private _onCloseProjectDialog = () => {
    window.close();
    return process.exit(0);
  }
}

export class ProjectOnlySelectFrontstage extends FrontstageProvider {

  public get frontstage(): React.ReactElement<FrontstageProps> {
    const contentGroup: ContentGroup = new ContentGroup({
      contents: [
        {
          classId: ProjectSelectControl,
        },
      ],
    });

    return (
      <Frontstage id="ProjectSelect"
        defaultTool={CoreTools.selectElementCommand}
        defaultLayout="SingleContent"
        contentGroup={contentGroup}
        isInFooterMode={false}
      />
    );
  }
}
