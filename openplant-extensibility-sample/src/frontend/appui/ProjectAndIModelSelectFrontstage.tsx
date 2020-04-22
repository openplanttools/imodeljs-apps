/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import {
  CoreTools, ContentGroup, ContentControl,
  ConfigurableCreateInfo, FrontstageProvider, FrontstageProps,
  Frontstage, IModelInfo, UiFramework,
} from "@bentley/ui-framework";
import { IModelSelect } from "@bentley/imodel-select-ui";
import { remote, ipcRenderer } from "electron";
import { IModelSelectorApp } from "../index";

class IModelSelectControl extends ContentControl {
  constructor(info: ConfigurableCreateInfo, options: any) {
    super(info, options);

    this.reactElement = <IModelSelect onIModelSelected={this._onSelectIModel} showSignoutButton={true} />;
  }

  // called when an imodel has been selected on the IModelSelect
  private _onSelectIModel = async (iModelInfo: IModelInfo) => {

    const accessToken = UiFramework.getAccessToken();
    const jsonData = {
      token: accessToken,
      project: iModelInfo.projectInfo.wsgId,
      model: iModelInfo.wsgId,
    };
    // log data to stdout and exit with success (0)
    const dataStr: string = JSON.stringify(jsonData);
    const con = remote.getGlobal("console");
    con.log(dataStr);
    ipcRenderer.send("onReadiModelInfo", jsonData);
    await IModelSelectorApp.showApp();
    /*window.close();
    return process.exit(0);*/
    }
}

export class ProjectAndIModelSelectFrontstage extends FrontstageProvider {

  public get frontstage(): React.ReactElement<FrontstageProps> {
    const contentGroup: ContentGroup = new ContentGroup({
      contents: [
        {
          classId: IModelSelectControl,
        },
      ],
    });

    return (
      <Frontstage id="IModelSelect"
        defaultTool={CoreTools.selectElementCommand}
        defaultLayout="SingleContent"
        contentGroup={contentGroup}
        isInFooterMode={false}
      />
    );
  }
}
