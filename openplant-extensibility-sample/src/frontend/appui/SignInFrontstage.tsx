/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import {
  CoreTools, ContentGroup, ContentControl, ConfigurableCreateInfo,
  FrontstageProvider, FrontstageProps, Frontstage,
} from "@bentley/ui-framework";
import { SignIn } from "@bentley/ui-components";
import { IModelSelectorApp } from "../index";

class SignInControl extends ContentControl {
  constructor(info: ConfigurableCreateInfo, options: any) {
    super(info, options);

    this.reactElement = <SignIn onSignIn={IModelSelectorApp.onStartSignin} onRegister={this._onRegister} />;
  }

  private _onRegister = () => {
    window.open("https://imodeljs.github.io/iModelJs-docs-output/getting-started/#developer-registration", "_blank");
  }
}

export class SignInFrontstage extends FrontstageProvider {

  public get frontstage(): React.ReactElement<FrontstageProps> {
    const contentGroup: ContentGroup = new ContentGroup({
      contents: [
        {
          classId: SignInControl,
        },
      ],
    });

    return (
      <Frontstage id="SignIn"
        defaultTool={CoreTools.selectElementCommand}
        defaultLayout="SingleContent"
        contentGroup={contentGroup}
        isInFooterMode={false}
      />
    );
  }
}
