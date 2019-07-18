/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { Id64String, OpenMode } from "@bentley/bentleyjs-core";
import { Range3d } from "@bentley/geometry-core";
import { AccessToken, ConnectClient, IModelQuery, Project, Config, HubIModel } from "@bentley/imodeljs-clients";
import { IModelApp, IModelConnection, FrontendRequestContext, AuthorizedFrontendRequestContext, DrawingViewState, ScreenViewport, EmphasizeElements, FeatureOverrideType } from "@bentley/imodeljs-frontend";
import { Presentation, SelectionChangeEventArgs, ISelectionProvider } from "@bentley/presentation-frontend";
import { Button, ButtonSize, ButtonType, Spinner, SpinnerSize } from "@bentley/ui-core";
import { SignIn } from "@bentley/ui-components";
import { SimpleViewerApp } from "../api/SimpleViewerApp";
import PropertiesWidget from "./Properties";
import GridWidget from "./Table";
import TreeWidget from "./Tree";
import { setIModelsList, setProjectsList } from "../../backend/electron/main.js";
import ViewportContentControl from "./Viewport";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import "./App.css";
import "./Group.scss";
import { Drawing } from "@bentley/imodeljs-backend";
import { GroupWidget, iModelContainer, projectContainer } from "./Group";
import chroma = require("chroma-js");
import distinctColors = require("distinct-colors");
import { ColorDef } from "@bentley/imodeljs-common";
import TitleBar from "./Title";
import { ipcRenderer, Event } from "electron";
// tslint:disable: no-console
// cSpell:ignore imodels

// Setting instance variables for multi-class usage
let requestContext: AuthorizedFrontendRequestContext | undefined;
let connectClient: ConnectClient | undefined;
let currentProject: Project;
let projectsList: Project[];
let currentIModel: string;
let resolvedIModelList: HubIModel[];

// Getters and setters
export function getCurrentProject() {
  return currentProject;
}

export function getProjectsList() {
  return projectsList;
}

export function getCurrentIModel() {
  return currentIModel;
}

export function getIModelsList() {
  return resolvedIModelList;
}

/** React state of the App component */
export interface AppState {
  user: {
    accessToken?: AccessToken;
    isLoading?: boolean;
  };
  offlineIModel: boolean;
  imodel?: IModelConnection;
  iModelName: string;
  project?: Project;
  projectName: string;
  drawing?: Drawing;
  drawingName: string;
  viewDefinitionId?: Id64String;
  menuOpened: boolean;
  menuName: string;
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
      projectName: "",
      iModelName: "",
      drawingName: "",
      offlineIModel: false,
      menuOpened: false,
      menuName: "Expand Menu",
    };
    this._getCorrectiModelName();
    this._getCorrectProjectName();
    addEventListener("click", () => this._reloadState());
  }

  /** Gets the current desired project as saved either from the settings.json file or from the Config.App singleton */
  private _getCorrectProjectName() {

    // Sets up listener for response back from main/server
    ipcRenderer.on("readConfigResults", (event: Event, configObject: any) => {
      if (event) {
        console.log(configObject);
      }

      // assigns correct config value, changes the state of the app accordingly
      let configProject = configObject.project_name;
      if (configObject.project_name.length < 1) {
        ipcRenderer.send("popupWarning", "project");
        try {
          ipcRenderer.send("configDataMissing", "testing from app");
          throw new ReferenceError("No project id has been specified");
        } catch (e) {
          console.log((e as Error).message);
          ipcRenderer.send("closeApplication", "Missing project");
        }
      }
      this.setState(() => ({
        projectName: configProject,
      }));
    });

    // sends signal that main app is ready for config values
    ipcRenderer.send("readConfig", "project");
  }

  /** Gets correct value for desired imodel from either the settings.json or from the Config.App object */
  private _getCorrectiModelName() {
    // Sets up listener for response back from server
    ipcRenderer.on("readConfigResultsIModel", (event: Event, jsonObject: any) => {
      if (event) {
        console.log(jsonObject);
      }

      // Configures the correct value, setting the state of the app, depending on what values currently exist
      // values in the settings.json are prioritized
      let configiModel = jsonObject.imodel_name;
      if (jsonObject.imodel_name.length < 1) {
        ipcRenderer.send("popupWarning", "project");
        try {
          ipcRenderer.send("configDataMissing", "testing from app");
          throw new ReferenceError("No imodel id has been specified");
          } catch (e) {
            console.log((e as Error).message);
            ipcRenderer.send("closeApplication", "Missing imodel");
          }
      }
      this.setState(() => ({
        iModelName: configiModel,
      }));
    });

    // sends event to server that app is ready to receive values
    ipcRenderer.send("readConfig", "imodel");
  }

  /* Function that reloads the iModel based on a new selection pased in an IModelContainer object */
  private async _reloadState() {
    if (projectContainer.projectObject.projectName !== this.state.projectName && projectContainer.projectObject.projectName !== "initial_value") {
      // tslint:disable-next-line: no-floating-promises
      this._reloadProject();
    } else // conditional checks to make sure that the current title is not the initial value or the same value currently being displayed
      if (iModelContainer.iModelObject.iModelName !== this.state.iModelName && iModelContainer.iModelObject.iModelName !== "initial_value") {
        // tslint:disable-next-line: no-floating-promises
        this._reloadIModel();
      }
  }

  private async _reloadIModel() {

    // fix while project box is still showing "Pick a Project"
    if (projectContainer.projectObject.projectName === "initial_value") {
      projectContainer.projectObject.projectName = this.state.projectName;
    }

    // if these conditions are met, begin by setting the state of the iModel and project, and updating the title, causing React to re call render processes
    this.setState(() => ({
      iModelName: iModelContainer.iModelObject.iModelName,
      projectName: projectContainer.projectObject.projectName,
    }));

    // if statement checking that the project name and the current iModel are defined strings/objects
    if (currentProject.name && iModelContainer.currentIModel) {

      // opens a new iModel connection, then asynchronously uses a then call to apply that iModel connection to the state of this class, this change in state
      // propogates to all child class updates their states as well
      IModelConnection.open(currentProject.wsgId, iModelContainer.iModelObject.iModelValue, OpenMode.Readonly) // tslint:disable-line: no-floating-promises
        .then(async (newIModel: IModelConnection | undefined) => {

          // Gets a valid view definition, for our purpose is fine, but it is possible that viewDefinition is invalid for a given iModel on runtime
          let viewDefinition: Id64String;
          if (newIModel)
            viewDefinition = await this.getFirstViewDefinitionId(newIModel);
          else
            viewDefinition = "BisCore:DrawingViewDefinition";

          ipcRenderer.send("imodelSelection", iModelContainer.iModelObject.iModelName);
          // sets a new iModel connection combined with view definition
          this.setState(() => ({
            imodel: newIModel,
            viewDefinitionId: viewDefinition,
          }));
        });
    }
  }

  private async _reloadProject() {
    // conditional checks to make sure that the current title is not the initial value or the same value currently being displayed

    // Updates the current iModel and the list of iModels when a new project is selected
    const projectName = projectContainer.projectObject.projectName;

    // Requests a context and connection client to access the iModelHub, and retrieves a list of projects
    requestContext = await AuthorizedFrontendRequestContext.create();
    connectClient = new ConnectClient();
    projectsList = await connectClient.getProjects(requestContext);
    setProjectsList(projectsList);

    // try catch block gets a project, if the project doesnt exist, throw an alert
    try {
      currentProject = await connectClient.getProject(requestContext, { $filter: `Name+eq+'${projectName}'` });
    } catch (e) {
      alert(`Project with name "${projectName}" does not exist.`);
      throw new Error(`Project with name "${projectName}" does not exist.`);
    }
    // ipcRenderer.send("drawingSelection", iModelContainer.currentIModel);
    // creates a new iModelQuery to connect to the database, and queries with specified context and project
    // Then resolves that promise and sends that information to constiuent components that need the data
    const imodelQuery = new IModelQuery();
    resolvedIModelList = await IModelApp.iModelClient.iModels.get(requestContext, currentProject.wsgId, imodelQuery);
    setIModelsList(resolvedIModelList);
    const imodelName = getIModelsList()[0].name;
    imodelQuery.byName(imodelName as string);

    // gets the specific imodel, returns the project and imodel wsdId's to the functions handling initial startup/rendering
    const imodels = await IModelApp.iModelClient.iModels.get(requestContext, currentProject.wsgId, imodelQuery);
    if (imodels.length === 0) {
      alert(`iModel with name "${imodelName}" does not exist in project "${projectName}".`);
      throw new Error(`iModel with name "${imodelName}" does not exist in project "${projectName}".`);
    }
    currentIModel = imodels[0].wsgId;
    iModelContainer.iModelObject.iModelName = getIModelsList()[0].name as string;

    // if these conditions are met, begin by setting the state of the iModel and project, and updating the title, causing React to re call render processes
    this.setState(() => ({
      iModelName: iModelContainer.iModelObject.iModelName,
      projectName: projectContainer.projectObject.projectName,
    }));

    // if statement checking that the project name and the current iModel are defined strings/objects
    if (currentProject.name && iModelContainer.currentIModel) {

      // opens a new iModel connection, then asynchronously uses a then call to apply that iModel connection to the state of this class, this change in state
      // propogates to all child class updates their states as well
      IModelConnection.open(currentProject.wsgId, iModelContainer.iModelObject.iModelValue, OpenMode.Readonly) // tslint:disable-line: no-floating-promises
        .then(async (newIModel: IModelConnection | undefined) => {

          // Gets a valid view definition, for our purpose is fine, but it is possible that viewDefinition is invalid for a given iModel on runtime
          let viewDefinition: Id64String;
          if (newIModel)
            viewDefinition = await this.getFirstViewDefinitionId(newIModel);
          else
            viewDefinition = "BisCore:DrawingViewDefinition";

          ipcRenderer.send("imodelSelection", iModelContainer.iModelObject.iModelName);
          // Sets a new iModel connection combined with view definition
          this.setState(() => ({
            imodel: newIModel,
            viewDefinitionId: viewDefinition,
          }));
        });
    }
    ipcRenderer.send("projectSelection", this.state.projectName);
    // Fix to ensure that the dropdown for iModels displays the current iModel at the top
    const otherList = (document.getElementById("iModelDropList")) as HTMLSelectElement;
    otherList.options[0].innerHTML = otherList.options[1].innerHTML;
  }

  /** Returns an updated iModelConnection */
  public async updateIModelConnection(updatedIModelId: string, updatedIModelProjectId: string) {
    if (updatedIModelId && updatedIModelProjectId) {
      const iModelConnection = await IModelConnection.open(updatedIModelProjectId, updatedIModelProjectId, OpenMode.Readonly);
      return iModelConnection;
    }
    return "undefined";
  }

  /** React method, after a component mounted sets up non-ui portions */
  public componentDidMount() {
    // Subscribe for unified selection changes
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

  /** React method, activates when the component will be removed  */
  public componentWillUnmount() {
    // Unsubscribe from unified selection changes
    Presentation.selection.selectionChange.removeListener(this._onSelectionChanged);
    // Unsubscribe from user state changes
    SimpleViewerApp.oidcClient.onUserStateChanged.removeListener(this._onUserStateChanged);
  }

  /** Changes the viewport to display a new drawing by drawing ID */
  public async changeView(newDrawingId: string, vp: ScreenViewport, doFit?: boolean) {
    const view = vp.view;
    if (!(view instanceof DrawingViewState)) // This only works if the viewport is showing a DrawingView
      return;

    const newView = view.clone(); // Make a copy of the current ViewState. This keeps the set of categories displayed and DisplayStyle
    (newView.baseModelId as Id64String) = newDrawingId; // Change the base model id (cast is necessary since it's marked as readonly after its been constructed)

    await newView.load(); // Load the model
    view.displayStyle.viewFlags.fill = false;
    vp.changeView(newView); // And point the Viewport at the new drawing

    if (doFit) { // Optionally, change the view to show the whole drawing
      const range = await vp.iModel.models.queryModelRanges([newDrawingId]); // Get the drawing's range
      vp.zoomToVolume(Range3d.fromJSON(range[0]), { animateFrustumChange: false }); // Don't bother to animate since starting point is not relevant
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
    for await (const categoryId of vp.iModel.query("SELECT DISTINCT Category.Id as id FROM bis.GeometricElement2d WHERE Model.Id=:modelId", { modelId })) {
      categoryIds.push(categoryId.id);
    }

    // Determine a palette of visually distinct colors for every category of elements in the model
    const colorPalette: chroma.Color[] = distinctColors({ count: categoryIds.length });

    // Setup the display for each distinct category in the selected model
    emphasize.clearOverriddenElements(vp);
    for (let ii = 0; ii < categoryIds.length; ii++) {
      // Gather up the elements in the model and category
      const elementIds = new Array<Id64String>();
      const categoryId = categoryIds[ii];
      const ecsql = "SELECT ECInstanceId as id FROM bis.GeometricElement2d WHERE Model.Id=:modelId AND Category.Id=:categoryId";
      for await (const elementId of vp.iModel.query(ecsql, { modelId, categoryId })) {
        elementIds.push(elementId.id);
      }

      // Override the display of the elements
      const overrideColor = ColorDef.from(...colorPalette[ii].rgb());
      emphasize.overrideElements(elementIds, vp, overrideColor, FeatureOverrideType.ColorOnly, false);
    }
  }

  /** When the drawing is changed, handle that change in selection, get a new drawing, and update properties and viewings */
  private _onSelectionChanged = (evt: SelectionChangeEventArgs, selectionProvider: ISelectionProvider) => {
    const selection = selectionProvider.getSelection(evt.imodel, evt.level);
    if (!selection.isEmpty) {
      selection.instanceKeys.forEach(async (ids, ecClass) => {
        if (ecClass === "BisCore:Drawing") { // If we clicked on a row that is a drawing, switch the view to it.
          const viewport = IModelApp.viewManager.selectedView!;
          const drawingId = ids.values().next().value;
          await this.changeView(drawingId, viewport, true);
          await this.setupDisplayByCategories(drawingId, viewport);
        }
      });
    }
  }

  /** Function for if there is no internet connection */
  private _onOffline = () => {
    this.setState((prev) => ({ user: { ...prev.user, isLoading: false }, offlineIModel: true }));
  }

 /** Handles beginning of sign-in process */
  private _onStartSignin = async () => {
    this.setState((prev) => ({ user: { ...prev.user, isLoading: true } }));
    await SimpleViewerApp.oidcClient.signIn(new FrontendRequestContext());
  }

  /** Handles when the user state changes, quasi-react method */
  private _onUserStateChanged = (accessToken: AccessToken | undefined) => {
    this.setState((prev) => ({ user: { ...prev.user, accessToken, isLoading: false } }));
  }

  /** Picks the first available spatial view definition in the iModel */
  private async getFirstViewDefinitionId(imodel: IModelConnection): Promise<Id64String> {
    const viewSpecs = await imodel.views.queryProps({});

    // Array of view definitions, eventually, all 3D view definitions could be changed
    const acceptedViewClasses = [
      "BisCore:SheetViewDefinition",
      "BisCore:DrawingViewDefinition",
      "BisCore:SpatialViewDefinition",
      "BisCore:OrthographicViewDefinition",
    ];

    // Filters the possible view definitions of the imodel down to the accepted onces we provide
    const acceptedViewSpecs = viewSpecs.filter((spec) => (-1 !== acceptedViewClasses.indexOf(spec.classFullName)));
    if (0 === acceptedViewSpecs.length) {
      alert("No valid view definitions for selected iModel. Please select another one.");
      throw new Error("No valid view definitions for selected iModel. Please select another one.");
    }

    // Prioritises certain view definitions
    const sheetViews = acceptedViewSpecs.filter((v) => {
      return v.classFullName === "BisCore:DrawingViewDefinition";
    });

    if (sheetViews.length > 0)
      return sheetViews[0].id!;

    return acceptedViewSpecs[0].id!;
  }

  /** Handles iModel open event */
  private _onIModelSelected = async (imodel: IModelConnection | undefined) => {
    if (!imodel) {
      // Reset the state when imodel is closed
      this.setState({ imodel: undefined, viewDefinitionId: undefined });
      return;
    }
    try {
      // Attempt to get a view definition
      // const viewDefinitionId = imodel ? await this.getSheetViews(imodel) : undefined;
      const viewDefinitionId = imodel ? await this.getFirstViewDefinitionId(imodel) : undefined;
      this.setState({ imodel, viewDefinitionId });
    } catch (e) {
      // If failed, close the imodel and reset the state
      if (this.state.offlineIModel) {
        await imodel.closeSnapshot();
      } else {
        await imodel.close();
      }
      this.setState({ imodel: undefined, viewDefinitionId: undefined });
      alert(e.message);
    }
  }

  /** Grabs the configuration redirect URI */
  private get _signInRedirectUri() {
    const split = (Config.App.get("imjs_browser_test_redirect_uri") as string).split("://");
    return split[split.length - 1];
  }

  /** Handles full screen menu button state change */
  private _menuClick = async () => {
    this.setState({
      menuOpened: !this.state.menuOpened,
    });
    if (this.state.menuOpened) {
      this.setState({
        menuName: "Expand Menu",
      });
    } else {
      this.setState({
        menuName: "Collapse Menu",
      });
    }
  }

  /** Renders the app */
  public render() {
    let ui: React.ReactNode;

    if (this.state.user.isLoading || window.location.href.includes(this._signInRedirectUri)) {
      // If user is currently being loaded, just tell that
      ui = `${IModelApp.i18n.translate("SimpleViewer:signing-in")}...`;
    } else if (!this.state.user.accessToken && !this.state.offlineIModel) {
      // If user doesn't have and access token, show sign in page
      ui = (<SignIn onSignIn={this._onStartSignin} onOffline={this._onOffline} />);
    } else if (!this.state.imodel || !this.state.viewDefinitionId) {
      // if we don't have an imodel / view definition id - render a button that initiates imodel open
      ui = (<OpenIModelButton accessToken={this.state.user.accessToken} offlineIModel={this.state.offlineIModel} onIModelSelected={this._onIModelSelected} imodelName={this.state.iModelName} projectName={this.state.projectName} />);
    } else {
      // If we do have an imodel and view definition id - render imodel components
      const titleName: string = "Project: " + this.state.projectName + ", iModel: " + this.state.iModelName; // + ", Drawing: " + Config.App.get("imjs_test_drawing") (not working yet);
      ui = (<IModelComponents imodel={this.state.imodel} viewDefinitionId={this.state.viewDefinitionId} menuOpened={this.state.menuOpened} title={titleName} imodelName={this.state.iModelName}/>);
    }

    // Render the app
    return (
      <div className="app">
        <div className="app-header">
          <div className="text">
            <TitleBar projectName={this.state.projectName} drawingName={this.state.drawingName} iModelName={this.state.iModelName} />
          </div>
          <div className="menu">
            <Button size={ButtonSize.Default} buttonType={ButtonType.Primary} className="expand-menu" onClick={this._menuClick}>
              <span>{this.state.menuName}</span>
            </Button>
          </div>
        </div>
        {ui}
      </div>
    );
  }
}

/** React props for the open iModel button */
interface OpenIModelButtonProps {
  imodelName: string;
  projectName: string;
  accessToken: AccessToken | undefined;
  offlineIModel: boolean;
  onIModelSelected: (imodel: IModelConnection | undefined) => void;
}

/** React state for the open iModel button */
interface OpenIModelButtonState {
  isLoading: boolean;
}

/** Renders a button that opens an iModel identified in configuration */
export class OpenIModelButton extends React.PureComponent<OpenIModelButtonProps, OpenIModelButtonState> {
  public state = { isLoading: false };

  /** Finds project and iModel ID's using their names */
  private async getIModelInfo(): Promise<{ projectId: string, imodelId: string }> {
    const projectName = this.props.projectName;
    const imodelName = this.props.imodelName;

    // Requests a context and connection client to access the iModelHub, and retrieves a list of projects
    requestContext = await AuthorizedFrontendRequestContext.create();
    connectClient = new ConnectClient();
    projectsList = await connectClient.getProjects(requestContext);
    setProjectsList(projectsList);

    // Try catch block gets a project, if the project doesnt exist, throw an alert
    try {
      currentProject = await connectClient.getProject(requestContext, { $filter: `Name+eq+'${projectName}'` });
    } catch (e) {
      alert(`Project with name "${projectName}" does not exist.`);
      throw new Error(`Project with name "${projectName}" does not exist.`);
    }

    // Creates a new iModelQuery to connect to the database, and queries with specified context and project
    // Then resolves that promise and sends that information to constiuent components that need the data
    const imodelQuery = new IModelQuery();
    resolvedIModelList = await IModelApp.iModelClient.iModels.get(requestContext, currentProject.wsgId, imodelQuery);
    imodelQuery.byName(imodelName);
    setIModelsList(resolvedIModelList);

    // Gets the specific imodel, returns the project and imodel wsdId's to the functions handling initial startup/rendering
    const imodels = await IModelApp.iModelClient.iModels.get(requestContext, currentProject.wsgId, imodelQuery);
    if (imodels.length === 0) {
      alert(`iModel with name "${imodelName}" does not exist in project "${projectName}".`);
      throw new Error(`iModel with name "${imodelName}" does not exist in project "${projectName}".`);
    }
    currentIModel = imodels[0].wsgId;

    // Returns
    return { projectId: currentProject.wsgId, imodelId: imodels[0].wsgId };
  }

  /** Handles iModel open event */
  private async onIModelSelected(imodel: IModelConnection | undefined) {
    this.props.onIModelSelected(imodel);
    this.setState({ isLoading: false });
  }

  /** Handles on-click for initial open iModel button */
  private _onClick = async () => {
    this.setState({ isLoading: true });
    let imodel: IModelConnection | undefined;
    try {
      // Attempt to open the imodel
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

  /** Renders the button */
  public render() {
    return (
      <Button size={ButtonSize.Large} buttonType={ButtonType.Primary} className="button-open-imodel" onClick={this._onClick}>
        <span>{IModelApp.i18n.translate("SimpleViewer:components.imodel-picker.open-imodel")}</span>
        {this.state.isLoading ? <span style={{ marginLeft: "8px" }}><Spinner size={SpinnerSize.Small} /></span> : undefined}
      </Button>
    );
  }
}

/** React props for an iModel component */
interface IModelComponentsProps {
  imodelName: string;
  imodel: IModelConnection;
  viewDefinitionId: Id64String;
  menuOpened: boolean;
  title: string;
}

/** The live state for an iModel component */
interface IModelComponentState {
  iModel: IModelConnection;
}

/** Renders a viewport, a tree, a property grid and a table */
class IModelComponents extends React.PureComponent<IModelComponentsProps, IModelComponentState> {

  /** Creates an iModel component instance */
  constructor(props: IModelComponentsProps) {
    super(props);
    this.state = {
      iModel: this.props.imodel,
    };
  }

  /** Renders the iModel component */
  public render() {
    // ID of the presentation ruleset used by all of the controls; the ruleset
    // Can be found at `assets/presentation_rules/Default.PresentationRuleSet.xml`
    const rulesetId = "Default";

    // Open with Menu opened
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
                <GroupWidget imodel={this.props.imodelName}/>
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
    } else { // Open with Menu closed
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
