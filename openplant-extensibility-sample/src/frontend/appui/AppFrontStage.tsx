/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import {
  CoreTools, ContentGroup, ContentControl, ConfigurableCreateInfo,
  FrontstageProvider, FrontstageProps, Frontstage, UiFramework,
} from "@bentley/ui-framework";
//import { IModelSelectorApp } from "../index";
import  { App }  from "../components/App";
import { remote } from "electron";

class AppControl extends ContentControl {
  constructor(info: ConfigurableCreateInfo, options: any) {
    super(info, options);
    const imodelInfo = remote.getGlobal("imodelInfo");
    console.log("IMODEL INFO: ",imodelInfo);
    const accessToken = UiFramework.getAccessToken();
    if (accessToken && imodelInfo)
      this.reactElement = <App imodelInfo={imodelInfo}  />;
    else
      this.reactElement = null;
  }
}

export class AppFrontstage extends FrontstageProvider {

  public get frontstage(): React.ReactElement<FrontstageProps> {
    const contentGroup: ContentGroup = new ContentGroup({
      contents: [
        {
          classId: AppControl,
        },
      ],
    });

    return (
      <Frontstage id="App"
        defaultTool={CoreTools.selectElementCommand}
        defaultLayout="SingleContent"
        contentGroup={contentGroup}
        isInFooterMode={false}
      />
    );
  }
}
