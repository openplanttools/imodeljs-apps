"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = require("react");
const bentleyjs_core_1 = require("@bentley/bentleyjs-core");
const geometry_core_1 = require("@bentley/geometry-core");
const imodeljs_clients_1 = require("@bentley/imodeljs-clients");
const imodeljs_frontend_1 = require("@bentley/imodeljs-frontend");
const presentation_frontend_1 = require("@bentley/presentation-frontend");
const ui_core_1 = require("@bentley/ui-core");
const ui_components_1 = require("@bentley/ui-components");
const SimpleViewerApp_1 = require("../api/SimpleViewerApp");
const Properties_1 = require("./Properties");
const Table_1 = require("./Table");
const Tree_1 = require("./Tree");
const Viewport_1 = require("./Viewport");
require("@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css");
require("./App.css");
const Group_1 = require("./Group");
const distinctColors = require("distinct-colors");
const imodeljs_common_1 = require("@bentley/imodeljs-common");
// tslint:disable: no-console
// cSpell:ignore imodels
var requestContext;
var connectClient;
/** A component the renders the whole application UI */
class App extends React.Component {
    // static imodel: any;
    /** Creates an App instance */
    constructor(props, context) {
        super(props, context);
        this._onSelectionChanged = (evt, selectionProvider) => {
            const selection = selectionProvider.getSelection(evt.imodel, evt.level);
            if (!selection.isEmpty) {
                selection.instanceKeys.forEach(async (ids, ecClass) => {
                    if (ecClass === "BisCore:Drawing") { // if we clicked on a row that is a drawing, switch the view to it.
                        const viewport = imodeljs_frontend_1.IModelApp.viewManager.selectedView;
                        const drawingId = ids.values().next().value;
                        await this.changeView(drawingId, viewport, true);
                        await this.setupDisplayByCategories(drawingId, viewport);
                    }
                });
            }
        };
        this._onOffline = () => {
            this.setState((prev) => ({ user: Object.assign({}, prev.user, { isLoading: false }), offlineIModel: true }));
        };
        this._onStartSignin = async () => {
            this.setState((prev) => ({ user: Object.assign({}, prev.user, { isLoading: true }) }));
            await SimpleViewerApp_1.SimpleViewerApp.oidcClient.signIn(new imodeljs_frontend_1.FrontendRequestContext());
        };
        this._onUserStateChanged = (accessToken) => {
            this.setState((prev) => ({ user: Object.assign({}, prev.user, { accessToken, isLoading: false }) }));
        };
        /** Handle iModel open event */
        this._onIModelSelected = async (imodel) => {
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
            }
            catch (e) {
                // if failed, close the imodel and reset the state
                if (this.state.offlineIModel) {
                    await imodel.closeSnapshot();
                }
                else {
                    await imodel.close();
                }
                this.setState({ imodel: undefined, viewDefinitionId: undefined });
                alert(e.message);
            }
        };
        this._menuClick = async () => {
            $(".app-header").css("background-color", "white");
        };
        this.state = {
            user: {
                isLoading: false,
                accessToken: undefined,
            },
            offlineIModel: false,
        };
    }
    componentDidMount() {
        // subscribe for unified selection changes
        presentation_frontend_1.Presentation.selection.selectionChange.addListener(this._onSelectionChanged);
        // Initialize authorization state, and add listener to changes
        SimpleViewerApp_1.SimpleViewerApp.oidcClient.onUserStateChanged.addListener(this._onUserStateChanged);
        if (SimpleViewerApp_1.SimpleViewerApp.oidcClient.isAuthorized) {
            SimpleViewerApp_1.SimpleViewerApp.oidcClient.getAccessToken(new imodeljs_frontend_1.FrontendRequestContext()) // tslint:disable-line: no-floating-promises
                .then((accessToken) => {
                this.setState((prev) => ({ user: Object.assign({}, prev.user, { accessToken, isLoading: false }) }));
            });
        }
    }
    componentWillUnmount() {
        // unsubscribe from unified selection changes
        presentation_frontend_1.Presentation.selection.selectionChange.removeListener(this._onSelectionChanged);
        // unsubscribe from user state changes
        SimpleViewerApp_1.SimpleViewerApp.oidcClient.onUserStateChanged.removeListener(this._onUserStateChanged);
    }
    // change the viewport to display a new drawing, by drawing id
    async changeView(newDrawingId, vp, doFit) {
        const view = vp.view;
        if (!(view instanceof imodeljs_frontend_1.DrawingViewState)) // this only works if the viewport is showing a DrawingView
            return;
        const newView = view.clone(); // make a copy of the current ViewState. This keeps the set of categories displayed and DisplayStyle
        newView.baseModelId = newDrawingId; // change the base model id (cast is necessary since it's marked as readonly after its been constructed)
        await newView.load(); // load the model
        view.displayStyle.viewFlags.fill = false;
        vp.changeView(newView); // and point the Viewport at the new drawing
        if (doFit) { // optionally, change the view to show the whole drawing
            const range = await vp.iModel.models.queryModelRanges([newDrawingId]); // get the drawing's range
            vp.zoomToVolume(geometry_core_1.Range3d.fromJSON(range[0]), { animateFrustumChange: false }); // don't bother to animate since starting point is not relevant
        }
    }
    /**
     * Sets up the display of the drawing model with elements colored by their category
     * @param modelId Drawing model id
     * @param vp Viewport the model is displayed in
     */
    async setupDisplayByCategories(modelId, vp) {
        var e_1, _a, e_2, _b;
        // Setup default appearance for "background" elements
        const emphasize = imodeljs_frontend_1.EmphasizeElements.getOrCreate(vp);
        emphasize.createDefaultAppearance();
        // Note: Starting with 0.192.0 (expected to be available June 3, 2019), you can customize defaultAppearance with this call
        // e.g., emphasize.defaultAppearance = FeatureSymbology.Appearance.fromRgb(new ColorDef(ColorByName.lightGray));
        // Determine all distinct categories in the model
        const categoryIds = new Array();
        try {
            for (var _c = __asyncValues(vp.iModel.query("SELECT DISTINCT Category.Id as id FROM bis.GeometricElement2d WHERE Model.Id=:modelId", { modelId })), _d; _d = await _c.next(), !_d.done;) {
                const categoryId = _d.value;
                categoryIds.push(categoryId.id);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) await _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Determine a palette of visually distinct colors for every category of elements in the model
        const colorPalette = distinctColors({ count: categoryIds.length });
        // Setup the display for each distinct category in the selected model
        emphasize.clearOverriddenElements(vp);
        for (let ii = 0; ii < categoryIds.length; ii++) {
            // Gather up the elements in the model and category
            const elementIds = new Array();
            const categoryId = categoryIds[ii];
            const ecsql = "SELECT ECInstanceId as id FROM bis.GeometricElement2d WHERE Model.Id=:modelId AND Category.Id=:categoryId";
            try {
                for (var _e = __asyncValues(vp.iModel.query(ecsql, { modelId, categoryId })), _f; _f = await _e.next(), !_f.done;) {
                    const elementId = _f.value;
                    elementIds.push(elementId.id);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) await _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Override the display of the elements
            const overrideColor = imodeljs_common_1.ColorDef.from(...colorPalette[ii].rgb());
            emphasize.overrideElements(elementIds, vp, overrideColor, imodeljs_frontend_1.FeatureOverrideType.ColorOnly, false);
        }
    }
    /** Pick the first available spatial view definition in the imodel */
    async getFirstViewDefinitionId(imodel) {
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
            return sheetViews[1].id;
        return acceptedViewSpecs[0].id;
    }
    get _signInRedirectUri() {
        const split = imodeljs_clients_1.Config.App.get("imjs_browser_test_redirect_uri").split("://");
        return split[split.length - 1];
    }
    /** The component's render method */
    render() {
        let ui;
        if (this.state.user.isLoading || window.location.href.includes(this._signInRedirectUri)) {
            // if user is currently being loaded, just tell that
            ui = `${imodeljs_frontend_1.IModelApp.i18n.translate("SimpleViewer:signing-in")}...`;
        }
        else if (!this.state.user.accessToken && !this.state.offlineIModel) {
            // if user doesn't have and access token, show sign in page
            ui = (React.createElement(ui_components_1.SignIn, { onSignIn: this._onStartSignin, onOffline: this._onOffline }));
        }
        else if (!this.state.imodel || !this.state.viewDefinitionId) {
            // if we don't have an imodel / view definition id - render a button that initiates imodel open
            ui = (React.createElement(OpenIModelButton, { accessToken: this.state.user.accessToken, offlineIModel: this.state.offlineIModel, onIModelSelected: this._onIModelSelected }));
        }
        else {
            // if we do have an imodel and view definition id - render imodel components
            ui = (React.createElement(IModelComponents, { imodel: this.state.imodel, viewDefinitionId: this.state.viewDefinitionId }));
        }
        // render the app
        return (React.createElement("div", { className: "app" },
            React.createElement("div", { className: "app-header" },
                React.createElement("div", { className: "text" },
                    React.createElement("h2", null, "Plant Viewer")),
                React.createElement("div", { className: "menu" },
                    React.createElement(ui_core_1.Button, { size: ui_core_1.ButtonSize.Default, buttonType: ui_core_1.ButtonType.Primary, className: "expand-menu", onClick: this._menuClick },
                        React.createElement("span", null, "Menu")))),
            ui));
    }
}
exports.default = App;
/** Renders a button that opens an iModel identified in configuration */
class OpenIModelButton extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = { isLoading: false };
        this._onClick = async () => {
            this.setState({ isLoading: true });
            let imodel;
            try {
                // attempt to open the imodel
                if (this.props.offlineIModel) {
                    const offlineIModel = imodeljs_clients_1.Config.App.getString("imjs_offline_imodel");
                    imodel = await imodeljs_frontend_1.IModelConnection.openSnapshot(offlineIModel);
                }
                else {
                    const info = await this.getIModelInfo();
                    imodel = await imodeljs_frontend_1.IModelConnection.open(info.projectId, info.imodelId, bentleyjs_core_1.OpenMode.Readonly);
                }
            }
            catch (e) {
                alert(e.message);
            }
            await this.onIModelSelected(imodel);
        };
    }
    /** Finds project and imodel ids using their names */
    async getIModelInfo() {
        const projectName = imodeljs_clients_1.Config.App.get("imjs_test_project");
        const imodelName = imodeljs_clients_1.Config.App.get("imjs_test_imodel");
        requestContext = await imodeljs_frontend_1.AuthorizedFrontendRequestContext.create();
        connectClient = new imodeljs_clients_1.ConnectClient();
        //projectsList = connectClient.getProjects(requestContext);
        let project;
        try {
            project = await connectClient.getProject(requestContext, { $filter: `Name+eq+'${projectName}'` });
        }
        catch (e) {
            throw new Error(`Project with name "${projectName}" does not exist`);
        }
        imodeljs_frontend_1.IModelApp.iModelClient.iModels.get(requestContext, project.wsgId);
        const imodelQuery = new imodeljs_clients_1.IModelQuery();
        imodelQuery.byName(imodelName);
        const imodels = await imodeljs_frontend_1.IModelApp.iModelClient.iModels.get(requestContext, project.wsgId, imodelQuery);
        if (imodels.length === 0)
            throw new Error(`iModel with name "${imodelName}" does not exist in project "${projectName}"`);
        return { projectId: project.wsgId, imodelId: imodels[0].wsgId };
    }
    /** Handle iModel open event */
    async onIModelSelected(imodel) {
        this.props.onIModelSelected(imodel);
        this.setState({ isLoading: false });
    }
    render() {
        return (React.createElement(ui_core_1.Button, { size: ui_core_1.ButtonSize.Large, buttonType: ui_core_1.ButtonType.Primary, className: "button-open-imodel", onClick: this._onClick },
            React.createElement("span", null, imodeljs_frontend_1.IModelApp.i18n.translate("SimpleViewer:components.imodel-picker.open-imodel")),
            this.state.isLoading ? React.createElement("span", { style: { marginLeft: "8px" } },
                React.createElement(ui_core_1.Spinner, { size: ui_core_1.SpinnerSize.Small })) : undefined));
    }
}
/** Renders a viewport, a tree, a property grid and a table */
class IModelComponents extends React.PureComponent {
    render() {
        /*
         <Button id="New iModel" title="Select new iModel" onClick = "">Select new iModel</Button>
        */
        // ID of the presentation ruleset used by all of the controls; the ruleset
        // can be found at `assets/presentation_rules/Default.PresentationRuleSet.xml`
        const rulesetId = "Default";
        return (React.createElement("div", { className: "app-content" },
            React.createElement("div", { className: "top-left", id: "viewport1" },
                React.createElement(Viewport_1.default, { imodel: this.props.imodel, rulesetId: rulesetId, viewDefinitionId: this.props.viewDefinitionId })),
            React.createElement("div", { className: "right" },
                React.createElement("div", { className: "top" },
                    React.createElement(Tree_1.default, { imodel: this.props.imodel, rulesetId: rulesetId })),
                React.createElement("div", { className: "bottom" },
                    React.createElement("div", { className: "bottom-middle" },
                        React.createElement(Group_1.default, null)),
                    React.createElement("div", { className: "sub" },
                        React.createElement(Properties_1.default, { imodel: this.props.imodel, rulesetId: rulesetId })))),
            React.createElement("div", { className: "bottom" },
                React.createElement(Table_1.default, { imodel: this.props.imodel, rulesetId: rulesetId }))));
    }
}
//# sourceMappingURL=App.js.map