/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { Id64String } from "@bentley/bentleyjs-core";
import { AccessToken, Config, IModelQuery, ConnectClient } from "@bentley/imodeljs-clients";
import { IModelConnection, FrontendRequestContext, AuthorizedFrontendRequestContext, IModelApp } from "@bentley/imodeljs-frontend";
import { Spinner, SpinnerSize } from "@bentley/ui-core";

import { SignIn } from "@bentley/ui-components";
import { SimpleViewerApp } from "../api/SimpleViewerApp";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {ipcRenderer} from "electron";
import Sidebar from "./Sidebar";

// tslint:disable: no-console
// cSpell:ignore imodels

/** React state of the App component */
export interface AppState {
  user: {
    accessToken?: AccessToken;
    isLoading?: boolean;
  };
  offlineIModel: boolean;
  imodelConnection?: IModelConnection;
  viewDefinitionId?: Id64String;
  projectName?: any;
  iModelName?: any;
  displayData:any;
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
      displayData:[]
    };
  }

  private async getIModelInfo(projectName: string, imodelName: string): Promise<{ projectId: string, imodelId: string }> {
    // Requests a context and connection client to access the iModelHub, and retrieves a list of projects
    const requestContext = await AuthorizedFrontendRequestContext.create();
    const connectClient = new ConnectClient();

    // Try catch block gets a project, if the project doesnt exist, throw an alert
    let currentProject: any;
    try {
      currentProject = await connectClient.getProject(requestContext, { $filter: `Name+eq+'${projectName}'` });
    } catch (e) {
      // alert(`Project with name "${projectName}" does not exist.`);
      throw new Error(`Project with name "${projectName}" does not exist.`);
    }

    // Creates a new iModelQuery to connect to the database, and queries with specified context and project
    // Then resolves that promise and sends that information to constiuent components that need the data
    const imodelQuery = new IModelQuery();
    imodelQuery.byName(imodelName);

    // Gets the specific imodel, returns the project and imodel wsdId's to the functions handling initial startup/rendering
    const imodels = await IModelApp.iModelClient.iModels.get(requestContext, currentProject.wsgId, imodelQuery);
    if (imodels.length === 0) {
      // alert(`iModel with name "${imodelName}" does not exist in project "${projectName}".`);
      throw new Error(`iModel with name "${imodelName}" does not exist in project "${projectName}".`);
    }

    //this.setState({projectId: currentProject.wsgId, iModelId:  imodels[0].wsgId});
    // Returns
    return { projectId: currentProject.wsgId, imodelId: imodels[0].wsgId };
  }

  public async componentDidMount() {

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
    let config:any;

      ipcRenderer.send("readConfig", "Config");
      ipcRenderer.on("readConfigResults", (event: Event, configObject: any) => {
        console.log("Recieved ReadConfigResults",event);
        config = configObject;
      });

      ipcRenderer.send("readSettings", "Settings");

      ipcRenderer.on("readSettingResults", async (event: Event, configObject: any) => {
        console.log("Recieved ReadConfigResults",event);
        const cols =  configObject["properties"]["DisplayProperties"].filter((v:any) => {

          if( v.DisplayStatus != "Hide" ) { return true;} return false;
        }).map((value:any) => {
          return value.PropertyName.toLowerCase().replace(/\s/g, '').replace(/_/g, '')
        })
        const info = await this.getIModelInfo(config.project_name, config.imodel_name);
        let imodel: IModelConnection | undefined = await IModelConnection.open(info.projectId, info.imodelId);
        console.log("APP CONN: ", imodel);
        this.setState(() => ({
          imodelConnection:imodel,
          projectName: config.project_name,
          iModelName: config.imodel_name,
          displayData: cols
        }), ()=>{console.log(this.state.displayData);});
      });
  }

  public componentWillUnmount() {
    // unsubscribe from user state changes
    SimpleViewerApp.oidcClient.onUserStateChanged.removeListener(this._onUserStateChanged);
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
    console.log("Renderer Called", ui);
    if (this.state.user.isLoading || window.location.href.includes(this._signInRedirectUri)) {
      // if user is currently being loaded, just tell that
      ui = (<span className="open-imodel"><Spinner size={SpinnerSize.Large} /></span>);
    } else if (!this.state.user.accessToken && !this.state.offlineIModel) {
      // if user doesn't have and access token, show sign in page
      console.log("Inside Sign in");
      ui = (<SignIn onSignIn={this._onStartSignin} onRegister={this._onRegister} onOffline={this._onOffline} />);
    } else if (this.state.user.accessToken && this.state.displayData && this.state.imodelConnection) {
      // if we don't have an imodel / view definition id - render a button that initiates imodel open
        ui = (<Sidebar displayData={this.state.displayData} imodelConnection={this.state.imodelConnection} />);
    }else {
      ui = (<span className="open-imodel"><Spinner size={SpinnerSize.Large} /></span>);
    }
    if (this.state.user.accessToken)
      console.log(this.state.user.accessToken);
    // render the app
    return (
        <>{ui}</>
    );
  }
}
