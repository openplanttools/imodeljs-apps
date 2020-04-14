/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { remote } from "electron";
import { IModelApp, IModelAppOptions, FrontendRequestContext, OidcBrowserClient } from "@bentley/imodeljs-frontend";
import { Config, AccessToken, OidcFrontendClientConfiguration } from "@bentley/imodeljs-clients";
import { UiCore } from "@bentley/ui-core";
import { UiComponents } from "@bentley/ui-components";
import { IModelSelectUi } from "@bentley/imodel-select-ui";
import { UiFramework, FrameworkState, FrameworkReducer, AppNotificationManager, FrontstageManager, ConfigurableUiContent, combineReducers } from "@bentley/ui-framework";
import { Logger, LogLevel } from "@bentley/bentleyjs-core";
import { AppUi } from "./appui/AppUi";
import setupEnvTwo from "../common/configuration";
import initRpc from "./api/rpc";

// React-redux interface stuff
export interface RootState {
  frameworkState?: FrameworkState;
}
export class IModelSelectorApp {
  public static store: Store<RootState>;
  public static rootReducer: any;

  private static async initializeRpc(): Promise<void> {
    initRpc();
  }

  public static startup(opts?: IModelAppOptions): void {
    opts = opts ? opts : {};
    opts.notifications = new AppNotificationManager();
    IModelApp.startup(opts);
    // this is the rootReducer for the application.
    this.rootReducer = combineReducers({
      frameworkState: FrameworkReducer,
    });

    // create the Redux Store.
    this.store = createStore(this.rootReducer,
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }

  public static async initialize() {
    await UiCore.initialize(IModelApp.i18n);
    await UiComponents.initialize(IModelApp.i18n);
    await IModelSelectUi.initialize(IModelApp.i18n);
    IModelSelectorApp.initializeRpc();

    await this.initializeOidc();
  }

  private static async initializeOidc() {
    let oidcConfiguration: OidcFrontendClientConfiguration;
    const scope = Config.App.get("imjs_scope");
    const clientId = Config.App.get("imjs_client_id");
    const redirectUri = Config.App.get("imjs_browser_test_redirect_uri");
    oidcConfiguration = { clientId, redirectUri, scope };

    // Create an OIDC client that helps with the sign-in / sign-out process
    try {
      const requestContext = new FrontendRequestContext();
      const oidcClient = new OidcBrowserClient(oidcConfiguration);
      await oidcClient.initialize(requestContext);
      IModelApp.authorizationClient = oidcClient;
      UiFramework.oidcClient = oidcClient;
      console.log("INSIDE INITIALIZE");
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(`Failed to start iModelSelector.exe with error ${error}`);
    }

    try {
      await UiFramework.initialize(IModelSelectorApp.store, IModelApp.i18n, undefined, "frameworkState");
    } catch(e) {
      console.log("UiFramework initialize error: " + JSON.stringify(e));  // tslint:disable-line
    }
  }

  public static async showIModelSelect() {
    await IModelSelectorApp.showFrontstage("IModelSelect");
  }

  public static async showProjectSelect() {
    await IModelSelectorApp.showFrontstage("ProjectSelect");
  }

  public static async showSignIn() {
    await IModelSelectorApp.showFrontstage("SignIn");
  }

  public static async showApp() {
    await IModelSelectorApp.showFrontstage("App");
  }

  // called to sign in
  public static async onStartSignin() {
    if (UiFramework.oidcClient) {
      try {
        await UiFramework.oidcClient.signIn(new FrontendRequestContext());
      } catch(e) {
        console.log("UiFramework.oidcClient.signIn error: " + JSON.stringify(e));  // tslint:disable-line
      }
    }
  }

  // called after the user has signed in (or access token is still valid)
  public static async onSignedIn() {
    const accessToken = await UiFramework.oidcClient!.getAccessToken();
    if (!accessToken)
      return;

    if (Config.App.has("imjs_only_signin") && Config.App.getString("imjs_only_signin") === "true") {
      const jsonData = {
        token: accessToken
      };
      // log data to stdout and exit with success (0)
      const dataStr: string = JSON.stringify(jsonData);
      const con = remote.getGlobal("console");
      con.log(dataStr);

      window.close();
      process.exit(0);
      return;
    }

    if (Config.App.has("imjs_select_project") && Config.App.getString("imjs_select_project") === "true") {
      // open to the ProjectSelect frontstage
      await IModelSelectorApp.showProjectSelect();
    } else {
      // open to the IModelSelect frontstage
      await IModelSelectorApp.showIModelSelect();
    }
  }

  public static async showFrontstage(frontstageId: string) {
    const frontstageDef = FrontstageManager.findFrontstageDef(frontstageId);
    FrontstageManager.setActiveFrontstageDef(frontstageDef); // tslint:disable-line:no-floating-promises
  }
}

export class IModelSelectorAppViewer extends React.Component<any> {
  constructor(props: any) {
    super(props);

    AppUi.initialize();

    this._initializeSignin(!!UiFramework.oidcClient && UiFramework.oidcClient.isAuthorized); // tslint:disable-line:no-floating-promises
  }

  private _initializeSignin = async (isAuthorized: boolean): Promise<void> => {
    return isAuthorized ? IModelSelectorApp.onSignedIn() : IModelSelectorApp.showSignIn();
  }

  private _onUserStateChanged = (accessToken: AccessToken | undefined) => {
    this._initializeSignin(accessToken !== undefined); // tslint:disable-line:no-floating-promises
  }

  public componentDidMount() {
    if (UiFramework.oidcClient)
      UiFramework.oidcClient.onUserStateChanged.addListener(this._onUserStateChanged);
  }

  public componentWillUnmount() {
    if (UiFramework.oidcClient)
      UiFramework.oidcClient.onUserStateChanged.removeListener(this._onUserStateChanged);
  }

  public render(): JSX.Element {
    return (
      <Provider store={IModelSelectorApp.store} >
        <ConfigurableUiContent />
      </Provider >
    );
  }
}

// main entry point.
async function main() {
  setupEnvTwo();
  // initialize logging
  Logger.initializeToConsole();
  Logger.setLevelDefault(LogLevel.Warning);
  // Logger.setLevel("ui-framework.Toolbar", LogLevel.Info);  // used to show minimal output calculating toolbar overflow
  // Logger.setLevel("ui-framework.Toolbar", LogLevel.Trace);  // used to show detailed output calculating toolbar overflow

  // Start the app.
  IModelSelectorApp.startup({});

  await IModelSelectorApp.initialize();

  ReactDOM.render(<IModelSelectorAppViewer />, document.getElementById("root") as HTMLElement);
}

// Entry point - run the main function
main(); // tslint:disable-line:no-floating-promises
