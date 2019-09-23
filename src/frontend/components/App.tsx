/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { Id64String } from "@bentley/bentleyjs-core";
import { AccessToken, Config } from "@bentley/imodeljs-clients";
import { IModelApp, IModelConnection, FrontendRequestContext } from "@bentley/imodeljs-frontend";
import { Presentation, SelectionChangeEventArgs, ISelectionProvider } from "@bentley/presentation-frontend";
import { Spinner, SpinnerSize } from "@bentley/ui-core";

import { SignIn } from "@bentley/ui-components";
import { SimpleViewerApp } from "../api/SimpleViewerApp";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Page } from "./Imodels";
import {ipcRenderer} from "electron";

// tslint:disable: no-console
// cSpell:ignore imodels

/** React state of the App component */
export interface AppState {
  user: {
    accessToken?: AccessToken;
    isLoading?: boolean;
  };
  offlineIModel: boolean;
  imodel?: IModelConnection;
  viewDefinitionId?: Id64String;
  projectName?: any;
  iModelName?: any;
}

/** A component the renders the whole application UI */
export default class App extends React.Component<{}, AppState> {

  /** Creates an App instance */
  constructor(props?: any, context?: any) {
    super(props, context);
    this.state = {
      user: {
        isLoading: false,
        accessToken: undefined,
      },
      offlineIModel: false,
    };
  }

  public async componentWillMount() {
    await new Promise(resolve => {
      ipcRenderer.send("readConfig", "project");
      ipcRenderer.on("readConfigResults", (event: Event, configObject: any) => {
        console.log("Recieved ReadConfigResults",event);
        this.setState(() => ({
          projectName: configObject.project_name,
          iModelName: configObject.imodel_name,
        }));
        resolve(configObject);
      });
    });
  }

  public componentDidMount() {
    // subscribe for unified selection changes
    Presentation.selection.selectionChange.addListener(this._onSelectionChanged);

    // Initialize authorization state, and add listener to changes
    SimpleViewerApp.oidcClient.onUserStateChanged.addListener(this._onUserStateChanged);
    if (SimpleViewerApp.oidcClient.isAuthorized) {
      SimpleViewerApp.oidcClient.getAccessToken(new FrontendRequestContext()) // tslint:disable-line: no-floating-promises
        .then((accessToken: AccessToken | undefined) => {
          console.log("Got the token");
          console.log(accessToken!.toTokenString());
          this.setState((prev) => ({ user: { ...prev.user, accessToken, isLoading: false } }));
        });
    }
  }

  public componentWillUnmount() {
    // unsubscribe from unified selection changes
    Presentation.selection.selectionChange.removeListener(this._onSelectionChanged);
    // unsubscribe from user state changes
    SimpleViewerApp.oidcClient.onUserStateChanged.removeListener(this._onUserStateChanged);
  }

  private _onSelectionChanged = (evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
    const selection = selectionProvider.getSelection(evt.imodel, evt.level);
    if (selection.isEmpty) {
      console.log("========== Selection cleared ==========");
    } else {
      console.log("========== Selection change ===========");
      if (selection.instanceKeys.size !== 0) {
        // log all selected ECInstance ids grouped by ECClass name
        console.log("ECInstances:");
        selection.instanceKeys.forEach((ids, ecclass) => {
          console.log(`${ecclass}: [${[...ids].join(",")}]`);
        });
      }
      if (selection.nodeKeys.size !== 0) {
        // log all selected node keys
        console.log("Nodes:");
        selection.nodeKeys.forEach((key) => console.log(JSON.stringify(key)));
      }
      console.log("=======================================");
    }
  }

  private _onRegister = () => {
    window.open("https://imodeljs.github.io/iModelJs-docs-output/getting-started/#developer-registration", "_blank");
  }

  private _onOffline = () => {
    this.setState((prev) => ({ user: { ...prev.user, isLoading: false }, offlineIModel: true }));
  }

  private _onStartSignin = async () => {
    console.log("Starting Signing in");
    this.setState((prev) => ({ user: { ...prev.user, isLoading: true } }));
    await SimpleViewerApp.oidcClient.signIn(new FrontendRequestContext());
  }

  private _onUserStateChanged = (accessToken: AccessToken | undefined) => {
    console.log(accessToken);
    this.setState((prev) => ({ user: { ...prev.user, accessToken, isLoading: false } }));
  }

  private get _signInRedirectUri() {
    const split = (Config.App.get("imjs_browser_test_redirect_uri") as string).split("://");
    return split[split.length - 1];
  }

  /** The component's render method */
  public render() {
    let ui;
    console.log("Renderer Called");
    if (this.state.user.isLoading || window.location.href.includes(this._signInRedirectUri)) {
      // if user is currently being loaded, just tell that
      ui = `${IModelApp.i18n.translate("SimpleViewer:signing-in")}...`;
      ui = (<span className="open-imodel"><Spinner size={SpinnerSize.Large} /></span>);
    } else if (!this.state.user.accessToken && !this.state.offlineIModel) {
      // if user doesn't have and access token, show sign in page
      console.log("Inside Sign in");
      ui = (<SignIn onSignIn={this._onStartSignin} onRegister={this._onRegister} onOffline={this._onOffline} />);
    }

    if (this.state.user.accessToken && this.state.projectName && this.state.iModelName) {
      // if we don't have an imodel / view definition id - render a button that initiates imodel open
      ui = (<Page token={this.state.user.accessToken} projectName={this.state.projectName} imodelName={this.state.iModelName} />);
    }
    if (this.state.user.accessToken)
      console.log(this.state.user.accessToken);
    // render the app
    return (
      <div className="app .bg-secondary">
        <div className="app-header">
          <h2>{IModelApp.i18n.translate("SimpleViewer:welcome-message")}</h2>
        </div>
        {ui}
      </div>
    );
  }
}
