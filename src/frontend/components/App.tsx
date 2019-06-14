/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { Id64String, OpenMode } from "@bentley/bentleyjs-core";
import { Range3d } from "@bentley/geometry-core";
import { AccessToken, ConnectClient, IModelQuery, Project, Config } from "@bentley/imodeljs-clients";
import { IModelApp, IModelConnection, FrontendRequestContext, AuthorizedFrontendRequestContext, DrawingViewState, ScreenViewport, EmphasizeElements, FeatureOverrideType } from "@bentley/imodeljs-frontend";
import { Presentation, SelectionChangeEventArgs, ISelectionProvider } from "@bentley/presentation-frontend";
import { Button, ButtonSize, ButtonType, Spinner, SpinnerSize } from "@bentley/ui-core";
import { SignIn } from "@bentley/ui-components";
import { SimpleViewerApp } from "../api/SimpleViewerApp";
import PropertiesWidget from "./Properties";
import GridWidget from "./Table";
import TreeWidget from "./Tree";
import ViewportContentControl from "./Viewport";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import "./App.css";

import GroupWidget from "./Group";
//import { request } from "https";

import chroma = require("chroma-js");
import distinctColors = require("distinct-colors");
import { ColorDef } from "@bentley/imodeljs-common";


// tslint:disable: no-console
// cSpell:ignore imodels
var requestContext: AuthorizedFrontendRequestContext | undefined;
var connectClient: ConnectClient | undefined;
//var projectsList;

/** React state of the App component */
export interface AppState {
  user: {
    accessToken?: AccessToken;
    isLoading?: boolean;
  };
  offlineIModel: boolean;
  imodel?: IModelConnection;
  viewDefinitionId?: Id64String;
  menuOpened: boolean;
}

/** A component the renders the whole application UI */
export default class App extends React.Component<{}, AppState> {
  // static imodel: any;

  /** Creates an App instance */
  constructor(props?: any, context?: any) {
    super(props, context);
    this.state = {
      user: {
        isLoading: false,
        accessToken: undefined,
      },
      offlineIModel: false,
      menuOpened: false,
    };
  }

  public componentDidMount() {
    // subscribe for unified selection changes
    Presentation.selection.selectionChange.addListener(this._onSelectionChanged);

    // Initialize authorization state, and add listener to changes
    SimpleViewerApp.oidcClient.onUserStateChanged.addListener(this._onUserStateChanged);
    if (SimpleViewerApp.oidcClient.isAuthorized) {
      SimpleViewerApp.oidcClient.getAccessToken(new FrontendRequestContext()) // tslint:disable-line: no-floating-promises
        .then((accessToken: AccessToken | undefined) => {
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

  // change the viewport to display a new drawing, by drawing id
  public async changeView(newDrawingId: string, vp: ScreenViewport, doFit?: boolean ) {
    const view = vp.view;
    if (!(view instanceof DrawingViewState)) // this only works if the viewport is showing a DrawingView
      return;

    const newView = view.clone(); // make a copy of the current ViewState. This keeps the set of categories displayed and DisplayStyle
    (newView.baseModelId as Id64String) = newDrawingId; // change the base model id (cast is necessary since it's marked as readonly after its been constructed)

    await newView.load(); // load the model
    view.displayStyle.viewFlags.fill = false;
    vp.changeView(newView); // and point the Viewport at the new drawing

    if (doFit) { // optionally, change the view to show the whole drawing
      const range = await vp.iModel.models.queryModelRanges([newDrawingId]); // get the drawing's range
      vp.zoomToVolume(Range3d.fromJSON(range[0]), {animateFrustumChange: false}); // don't bother to animate since starting point is not relevant
    }
  }

  /**
   * Sets up the display of the drawing model with elements colored by their category
   * @param modelId Drawing model id
   * @param vp Viewport the model is displayed in
   */
  public async setupDisplayByCategories(modelId: Id64String, vp: ScreenViewport) {
    // Setup default appearance for "background" elements
    const emphasize = EmphasizeElements.getOrCreate(vp);
    emphasize.createDefaultAppearance();
    // Note: Starting with 0.192.0 (expected to be available June 3, 2019), you can customize defaultAppearance with this call
    // e.g., emphasize.defaultAppearance = FeatureSymbology.Appearance.fromRgb(new ColorDef(ColorByName.lightGray));

    // Determine all distinct categories in the model
    const categoryIds = new Array<Id64String>();
    for await (const categoryId of vp.iModel.query("SELECT DISTINCT Category.Id as id FROM bis.GeometricElement2d WHERE Model.Id=:modelId", {modelId})) {
      categoryIds.push(categoryId.id);
    }

    // Determine a palette of visually distinct colors for every category of elements in the model
    const colorPalette: chroma.Color[] = distinctColors({count: categoryIds.length});

    // Setup the display for each distinct category in the selected model
    emphasize.clearOverriddenElements(vp);
    for (let ii = 0; ii < categoryIds.length; ii++) {
      // Gather up the elements in the model and category
      const elementIds = new Array<Id64String>();
      const categoryId = categoryIds[ii];
      const ecsql = "SELECT ECInstanceId as id FROM bis.GeometricElement2d WHERE Model.Id=:modelId AND Category.Id=:categoryId";
      for await (const elementId of vp.iModel.query(ecsql, {modelId, categoryId})) {
        elementIds.push(elementId.id);
      }

      // Override the display of the elements
      const overrideColor = ColorDef.from(...colorPalette[ii].rgb());
      emphasize.overrideElements(elementIds, vp, overrideColor, FeatureOverrideType.ColorOnly, false);
    }
  }

  private _onSelectionChanged = (evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
    const selection = selectionProvider.getSelection(evt.imodel, evt.level);
    if (!selection.isEmpty) {
      selection.instanceKeys.forEach(async (ids, ecClass) => {
        if (ecClass === "BisCore:Drawing") { // if we clicked on a row that is a drawing, switch the view to it.
          const viewport = IModelApp.viewManager.selectedView!;
          const drawingId = ids.values().next().value;
          await this.changeView(drawingId, viewport, true);
          await this.setupDisplayByCategories(drawingId, viewport);
        }
      });
    }
  }

  private _onOffline = () => {
    this.setState((prev) => ({ user: { ...prev.user, isLoading: false }, offlineIModel: true }));
  }

  private _onStartSignin = async () => {
    this.setState((prev) => ({ user: { ...prev.user, isLoading: true } }));
    await SimpleViewerApp.oidcClient.signIn(new FrontendRequestContext());
  }

  private _onUserStateChanged = (accessToken: AccessToken | undefined) => {
    this.setState((prev) => ({ user: { ...prev.user, accessToken, isLoading: false } }));
  }

  /** Pick the first available spatial view definition in the imodel */
  private async getFirstViewDefinitionId(imodel: IModelConnection): Promise<Id64String> {
    const viewSpecs = await imodel.views.queryProps({});
    const acceptedViewClasses = [
      "BisCore:SheetViewDefinition",
      "BisCore:DrawingViewDefinition",
      "BisCore:SpatialViewDefinition",
      "BisCore:OrthographicViewDefinition",
    ];
    const acceptedViewSpecs = viewSpecs.filter((spec) => (-1 !== acceptedViewClasses.indexOf(spec.classFullName)));
    if (0 === acceptedViewSpecs.length)
      throw new Error("No valid view definitions in imodel");

    const sheetViews = acceptedViewSpecs.filter((v) => {
      return v.classFullName === "BisCore:DrawingViewDefinition";
    });

    if (sheetViews.length > 0)
      return sheetViews[1].id!;

    return acceptedViewSpecs[0].id!;
  }

  /** Handle iModel open event */
  private _onIModelSelected = async (imodel: IModelConnection | undefined) => {
    if (!imodel) {
      // reset the state when imodel is closed
      this.setState({ imodel: undefined, viewDefinitionId: undefined });
      return;
    }
    try {
      // attempt to get a view definition
      // const viewDefinitionId = imodel ? await this.getSheetViews(imodel) : undefined;
      const viewDefinitionId = imodel ? await this.getFirstViewDefinitionId(imodel) : undefined;
      this.setState({ imodel, viewDefinitionId });
    } catch (e) {
      // if failed, close the imodel and reset the state
      if (this.state.offlineIModel) {
        await imodel.closeSnapshot();
      } else {
        await imodel.close();
      }
      this.setState({ imodel: undefined, viewDefinitionId: undefined });
      alert(e.message);
    }
  }

  private get _signInRedirectUri() {
    const split = (Config.App.get("imjs_browser_test_redirect_uri") as string).split("://");
    return split[split.length - 1];
  }

  private _menuClick = async () => {
    this.setState({ menuOpened: !this.state.menuOpened });
  }

  /** The component's render method */
  public render() {

    let ui: React.ReactNode;

    if (this.state.user.isLoading || window.location.href.includes(this._signInRedirectUri)) {
      // if user is currently being loaded, just tell that
      ui = `${IModelApp.i18n.translate("SimpleViewer:signing-in")}...`;
    } else if (!this.state.user.accessToken && !this.state.offlineIModel) {
      // if user doesn't have and access token, show sign in page
      ui = (<SignIn onSignIn={this._onStartSignin} onOffline={this._onOffline} />);
    } else if (!this.state.imodel || !this.state.viewDefinitionId) {
      // if we don't have an imodel / view definition id - render a button that initiates imodel open
      ui = (<OpenIModelButton accessToken={this.state.user.accessToken} offlineIModel={this.state.offlineIModel} onIModelSelected={this._onIModelSelected} />);
    } else {
      // if we do have an imodel and view definition id - render imodel components
      ui = (<IModelComponents imodel={this.state.imodel} viewDefinitionId={this.state.viewDefinitionId} menuOpened={this.state.menuOpened} />);
    }

    // render the app
    return (
      <div className="app">
        <div className="app-header">
          <div className="text">
            <h2>Plant Viewer</h2>
          </div>
          <div className="menu">
            <Button size={ButtonSize.Default} buttonType={ButtonType.Primary} className="expand-menu" onClick={this._menuClick}>
              <span>Menu</span>
            </Button>
          </div>
        </div>
        {ui}
      </div>
    );
  }
}

/** React props for [[OpenIModelButton]] component */
interface OpenIModelButtonProps {
  accessToken: AccessToken | undefined;
  offlineIModel: boolean;
  onIModelSelected: (imodel: IModelConnection | undefined) => void;
}
/** React state for [[OpenIModelButton]] component */
interface OpenIModelButtonState {
  isLoading: boolean;
}
/** Renders a button that opens an iModel identified in configuration */
class OpenIModelButton extends React.PureComponent<OpenIModelButtonProps, OpenIModelButtonState> {
  public state = { isLoading: false };

  /** Finds project and imodel ids using their names */
  private async getIModelInfo(): Promise<{ projectId: string, imodelId: string }> {
    const projectName = Config.App.get("imjs_test_project");
    const imodelName = Config.App.get("imjs_test_imodel");

    requestContext = await AuthorizedFrontendRequestContext.create();
    connectClient = new ConnectClient();
    //projectsList = connectClient.getProjects(requestContext);
    let project: Project;
    try {
      project = await connectClient.getProject(requestContext, { $filter: `Name+eq+'${projectName}'` });
    } catch (e) {
      throw new Error(`Project with name "${projectName}" does not exist`);
    }
    IModelApp.iModelClient.iModels.get(requestContext, project.wsgId);

    const imodelQuery = new IModelQuery();
    imodelQuery.byName(imodelName);
    const imodels = await IModelApp.iModelClient.iModels.get(requestContext, project.wsgId, imodelQuery);
    if (imodels.length === 0)
      throw new Error(`iModel with name "${imodelName}" does not exist in project "${projectName}"`);
    return { projectId: project.wsgId, imodelId: imodels[0].wsgId };
  }

  /** Handle iModel open event */
  private async onIModelSelected(imodel: IModelConnection | undefined) {
    this.props.onIModelSelected(imodel);
    this.setState({ isLoading: false });
  }

  private _onClick = async () => {
    this.setState({ isLoading: true });
    let imodel: IModelConnection | undefined;
    try {
      // attempt to open the imodel
      if (this.props.offlineIModel) {
        const offlineIModel = Config.App.getString("imjs_offline_imodel");
        imodel = await IModelConnection.openSnapshot(offlineIModel);
      } else {
        const info = await this.getIModelInfo();
        imodel = await IModelConnection.open(info.projectId, info.imodelId, OpenMode.Readonly);
      }
    } catch (e) {
      alert(e.message);
    }
    await this.onIModelSelected(imodel);
  }

  public render() {
    return (
      <Button size={ButtonSize.Large} buttonType={ButtonType.Primary} className="button-open-imodel" onClick={this._onClick}>
        <span>{IModelApp.i18n.translate("SimpleViewer:components.imodel-picker.open-imodel")}</span>
        {this.state.isLoading ? <span style={{ marginLeft: "8px" }}><Spinner size={SpinnerSize.Small} /></span> : undefined}
      </Button>
    );
  }
}

/** React props for [[IModelComponents]] component */
interface IModelComponentsProps {
  imodel: IModelConnection;
  viewDefinitionId: Id64String;
  menuOpened: boolean;
}
/** Renders a viewport, a tree, a property grid and a table */
class IModelComponents extends React.PureComponent<IModelComponentsProps> {

  public render() {
    /*
     <Button id="New iModel" title="Select new iModel" onClick = "">Select new iModel</Button>
    */
    // ID of the presentation ruleset used by all of the controls; the ruleset
    // can be found at `assets/presentation_rules/Default.PresentationRuleSet.xml`
    const rulesetId = "Default";

    // open with Menu closed
    if (this.props.menuOpened) {
      return (
        <div className="app-content">
          <div className="top-left" id="viewport1">
            <ViewportContentControl imodel={this.props.imodel} rulesetId={rulesetId} viewDefinitionId={this.props.viewDefinitionId} />
          </div>
          <div className="right">
            <div className="top">
              <TreeWidget imodel={this.props.imodel} rulesetId={rulesetId} />
            </div>
            <div className="bottom">
              <div className="bottom-middle">
                <GroupWidget />
              </div>
              <div className="sub">
                <PropertiesWidget imodel={this.props.imodel} rulesetId={rulesetId} />
              </div>
            </div>
          </div>
          <div className="bottom">
            <GridWidget imodel={this.props.imodel} rulesetId={rulesetId} />
          </div>
        </div>
      );
    }

    // open with Menu opened
    else {
      return (
        <div className="app-content">
          <div className="top-left-expanded" id="viewport1">
            <ViewportContentControl imodel={this.props.imodel} rulesetId={rulesetId} viewDefinitionId={this.props.viewDefinitionId} />
          </div>
        </div>
      );
    }
  }
}
