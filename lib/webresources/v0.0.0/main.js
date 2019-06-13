(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bentleyjs_core"), require("geometry_core"), require("imodeljs_clients"), require("imodeljs_common"), require("imodeljs_frontend"), require("presentation_common"), require("presentation_components"), require("presentation_frontend"), require("ui_components"), require("ui_core"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("main", ["bentleyjs_core", "geometry_core", "imodeljs_clients", "imodeljs_common", "imodeljs_frontend", "presentation_common", "presentation_components", "presentation_frontend", "ui_components", "ui_core", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory(require("bentleyjs_core"), require("geometry_core"), require("imodeljs_clients"), require("imodeljs_common"), require("imodeljs_frontend"), require("presentation_common"), require("presentation_components"), require("presentation_frontend"), require("ui_components"), require("ui_core"), require("react"), require("react-dom"));
	else
		root["main"] = factory(root["bentleyjs_core"], root["geometry_core"], root["imodeljs_clients"], root["imodeljs_common"], root["imodeljs_frontend"], root["presentation_common"], root["presentation_components"], root["presentation_frontend"], root["ui_components"], root["ui_core"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__, __WEBPACK_EXTERNAL_MODULE__bentley_geometry_core__, __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_clients__, __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_common__, __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_frontend__, __WEBPACK_EXTERNAL_MODULE__bentley_presentation_common__, __WEBPACK_EXTERNAL_MODULE__bentley_presentation_components__, __WEBPACK_EXTERNAL_MODULE__bentley_presentation_frontend__, __WEBPACK_EXTERNAL_MODULE__bentley_ui_components__, __WEBPACK_EXTERNAL_MODULE__bentley_ui_core__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return (this["webpackJsonp"] = this["webpackJsonp"] || []).push([["main"],{

/***/ "./lib/common/configuration.js":
/*!*************************************!*\
  !*** ./lib/common/configuration.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const imodeljs_clients_1 = __webpack_require__(/*! @bentley/imodeljs-clients */ "@bentley/imodeljs-clients");
/**
 * Setup configuration for the application
 *
 * **Note:** this part of configuration is shared between both the application itself and
 * the tests. Each of them also have unique configuration stored in:
 * - App: `src/common/config.json`
 * - Tests: `test/end-to-end/config.json`
 */
function setupEnv() {
    imodeljs_clients_1.Config.App.merge({
        // -----------------------------------------------------------------------------------------------------------
        // Client registration (RECOMMENDED but OPTIONAL)
        // Must set these variables before deployment, but the supplied defaults can be used for testing on localhost.
        // Create a client registration using the procedure here - https://git.io/fx8YP (Developer registration). For the purpose
        // of running this sample on localhost, ensure your registration includes http://localhost:3000/signin-callback as a
        // valid redirect URI.
        // -----------------------------------------------------------------------------------------------------------
        //imjs_browser_test_client_id: "spa-QtBqEiXs0Pj9lLoiTWhMnkvjz",
        /* Nick's stuff */
        // imjs_browser_test_client_id: "spa-MBQFbO5ABzMeXkahkOslOJhs7",
        // imjs_test_project: "testing27", // Set this to the name of the sample project
        // imjs_test_imodel: "testing27",
        // imjs_buddi_resolve_url_using_region: "102",
        // Set this to the registered clientId
        // Note: "imodeljs-spa-test-2686" is setup to work with the (default) localhost redirect URI below
        // (1) UN-COMMENT ONE OF THE FOLLOWING FOUR BLOCKS
        // use to view in BROWSER (PRODUCTION only)
        // imjs_browser_test_redirect_uri: "http://localhost:3000/signin-callback",
        // imjs_browser_test_client_id: "imodeljs-spa-test-2686",
        // use to view in BROWSER (QA only)
        // imjs_browser_test_redirect_uri: "http://localhost:3000/signin-callback",
        // imjs_browser_test_client_id: "imodeljs-spa-test-2686",
        // imjs_buddi_resolve_url_using_region: "102",
        // use to view in ELECTRON (PRODUCTION only)
        // imjs_browser_test_redirect_uri: "electron://frontend/signin-callback",
        // imjs_browser_test_client_id: "spa-TndE76P2OLOLZMumh7nx5yHjR",
        // use to view in ELECTRON (QA only)
        imjs_browser_test_redirect_uri: "electron://frontend/signin-callback",
        imjs_browser_test_client_id: "spa-r2eFZFCkkth19yr8R2Ei4oTk1",
        imjs_buddi_resolve_url_using_region: "102",
        // (2) SET THE PROJECT AND IMODEL NAMES
        imjs_test_project: "opbimdev01",
        imjs_test_imodel: "Nick-May2019",
        /*Nick's permissions */
        // imjs_browser_test_scope: "openid email profile organization imodelhub context-registry-service reality-data:read",
        // Set this to be the scopes of services the application needs to access
        // Note: The default value set above ensures the minimal working of the application
        // default permissions that allow the application to function
        imjs_browser_test_scope: "openid email profile organization imodelhub context-registry-service reality-data:read imodeljs-router",
    });
}
exports.default = setupEnv;


/***/ }),

/***/ "./lib/common/rpcs.js":
/*!****************************!*\
  !*** ./lib/common/rpcs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const imodeljs_common_1 = __webpack_require__(/*! @bentley/imodeljs-common */ "@bentley/imodeljs-common");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
/**
 * Returns a list of RPCs supported by this application
 */
function getSupportedRpcs() {
    return [
        imodeljs_common_1.IModelReadRpcInterface,
        imodeljs_common_1.IModelTileRpcInterface,
        presentation_common_1.PresentationRpcInterface,
        imodeljs_common_1.SnapshotIModelRpcInterface,
    ];
}
exports.default = getSupportedRpcs;


/***/ }),

/***/ "./lib/frontend/api/SimpleViewerApp.js":
/*!*********************************************!*\
  !*** ./lib/frontend/api/SimpleViewerApp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const imodeljs_clients_1 = __webpack_require__(/*! @bentley/imodeljs-clients */ "@bentley/imodeljs-clients");
const imodeljs_frontend_1 = __webpack_require__(/*! @bentley/imodeljs-frontend */ "@bentley/imodeljs-frontend");
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
const ui_core_1 = __webpack_require__(/*! @bentley/ui-core */ "@bentley/ui-core");
const ui_components_1 = __webpack_require__(/*! @bentley/ui-components */ "@bentley/ui-components");
const logging_1 = __webpack_require__(/*! ./logging */ "./lib/frontend/api/logging.js");
const rpc_1 = __webpack_require__(/*! ./rpc */ "./lib/frontend/api/rpc.js");
// initialize logging
logging_1.default();
// subclass of IModelApp needed to use imodeljs-frontend
class SimpleViewerApp {
    static get oidcClient() { return this._oidcClient; }
    static get ready() { return this._isReady; }
    static startup() {
        imodeljs_frontend_1.IModelApp.startup();
        // contains various initialization promises which need
        // to be fulfilled before the app is ready
        const initPromises = new Array();
        // initialize localization for the app
        initPromises.push(imodeljs_frontend_1.IModelApp.i18n.registerNamespace("SimpleViewer").readFinished);
        // initialize UiCore
        initPromises.push(ui_core_1.UiCore.initialize(imodeljs_frontend_1.IModelApp.i18n));
        // initialize UiComponents
        initPromises.push(ui_components_1.UiComponents.initialize(imodeljs_frontend_1.IModelApp.i18n));
        // initialize Presentation
        presentation_frontend_1.Presentation.initialize({
            activeLocale: imodeljs_frontend_1.IModelApp.i18n.languageList()[0],
        });
        // initialize RPC communication
        initPromises.push(SimpleViewerApp.initializeRpc());
        // initialize OIDC
        initPromises.push(SimpleViewerApp.initializeOidc());
        // the app is ready when all initialization promises are fulfilled
        this._isReady = Promise.all(initPromises).then(() => { });
    }
    static async initializeRpc() {
        const rpcParams = await this.getConnectionInfo();
        rpc_1.default(rpcParams);
    }
    static async initializeOidc() {
        const clientId = imodeljs_clients_1.Config.App.get("imjs_browser_test_client_id");
        const redirectUri = imodeljs_clients_1.Config.App.getString("imjs_browser_test_redirect_uri"); // must be set in config
        const scope = imodeljs_clients_1.Config.App.getString("imjs_browser_test_scope");
        const oidcConfig = { clientId, redirectUri, scope };
        this._oidcClient = new imodeljs_frontend_1.OidcBrowserClient(oidcConfig);
        const requestContext = new imodeljs_frontend_1.FrontendRequestContext();
        await this._oidcClient.initialize(requestContext);
        imodeljs_frontend_1.IModelApp.authorizationClient = this._oidcClient;
    }
    static shutdown() {
        this._oidcClient.dispose();
        imodeljs_frontend_1.IModelApp.shutdown();
    }
    static async getConnectionInfo() {
        const usedBackend = imodeljs_clients_1.Config.App.getNumber("imjs_backend", 0 /* Local */);
        if (usedBackend === 1 /* Navigator */) {
            const urlClient = new imodeljs_clients_1.UrlDiscoveryClient();
            const requestContext = new imodeljs_frontend_1.FrontendRequestContext();
            const orchestratorUrl = await urlClient.discoverUrl(requestContext, "iModelJsOrchestrator.SF", undefined);
            return { info: { title: "navigator-backend", version: "v1.0" }, uriPrefix: orchestratorUrl };
        }
        if (usedBackend === 0 /* Local */)
            return undefined;
        throw new Error(`Invalid backend "${usedBackend}" specified in configuration`);
    }
}
exports.SimpleViewerApp = SimpleViewerApp;


/***/ }),

/***/ "./lib/frontend/api/logging.js":
/*!*************************************!*\
  !*** ./lib/frontend/api/logging.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
// tslint:disable:no-console
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
function init() {
    // map between iModelJs LogFunction signature and console logger
    const errorLogger = (_category, message, getMetaData) => console.log("Error: " + message + (getMetaData ? " " + JSON.stringify(getMetaData()) : ""));
    const warningLogger = (_category, message, getMetaData) => console.log("Warning: " + message + (getMetaData ? " " + JSON.stringify(getMetaData()) : ""));
    const infoLogger = (_category, message, getMetaData) => console.log("Info: " + message + (getMetaData ? " " + JSON.stringify(getMetaData()) : ""));
    bentleyjs_core_1.Logger.initialize(errorLogger, warningLogger, infoLogger);
}
exports.default = init;


/***/ }),

/***/ "./lib/frontend/api/rpc.js":
/*!*********************************!*\
  !*** ./lib/frontend/api/rpc.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const imodeljs_common_1 = __webpack_require__(/*! @bentley/imodeljs-common */ "@bentley/imodeljs-common");
const rpcs_1 = __webpack_require__(/*! ../../common/rpcs */ "./lib/common/rpcs.js");
/**
 * Initializes RPC communication based on the platform
 */
function initRpc(rpcParams) {
    let config;
    const rpcInterfaces = rpcs_1.default();
    if (imodeljs_common_1.ElectronRpcConfiguration.isElectron) {
        // initializes RPC for Electron
        config = imodeljs_common_1.ElectronRpcManager.initializeClient({}, rpcInterfaces);
    }
    else {
        // initialize RPC for web apps
        if (!rpcParams)
            rpcParams = { info: { title: "PlantView", version: "v1.0" }, uriPrefix: "http://localhost:3001" };
        config = imodeljs_common_1.BentleyCloudRpcManager.initializeClient(rpcParams, rpcInterfaces);
    }
    return config;
}
exports.default = initRpc;


/***/ }),

/***/ "./lib/frontend/components/App.css":
/*!*****************************************!*\
  !*** ./lib/frontend/components/App.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../node_modules/postcss-loader/lib??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./lib/frontend/components/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/frontend/components/App.js":
/*!****************************************!*\
  !*** ./lib/frontend/components/App.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const React = __webpack_require__(/*! react */ "react");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
const imodeljs_clients_1 = __webpack_require__(/*! @bentley/imodeljs-clients */ "@bentley/imodeljs-clients");
const imodeljs_frontend_1 = __webpack_require__(/*! @bentley/imodeljs-frontend */ "@bentley/imodeljs-frontend");
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
const ui_core_1 = __webpack_require__(/*! @bentley/ui-core */ "@bentley/ui-core");
const ui_components_1 = __webpack_require__(/*! @bentley/ui-components */ "@bentley/ui-components");
const SimpleViewerApp_1 = __webpack_require__(/*! ../api/SimpleViewerApp */ "./lib/frontend/api/SimpleViewerApp.js");
const Properties_1 = __webpack_require__(/*! ./Properties */ "./lib/frontend/components/Properties.js");
const Table_1 = __webpack_require__(/*! ./Table */ "./lib/frontend/components/Table.js");
const Tree_1 = __webpack_require__(/*! ./Tree */ "./lib/frontend/components/Tree.js");
const Viewport_1 = __webpack_require__(/*! ./Viewport */ "./lib/frontend/components/Viewport.js");
__webpack_require__(/*! @bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css */ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css");
__webpack_require__(/*! ./App.css */ "./lib/frontend/components/App.css");
const Group_1 = __webpack_require__(/*! ./Group */ "./lib/frontend/components/Group.js");
const distinctColors = __webpack_require__(/*! distinct-colors */ "./node_modules/distinct-colors/dist/distinct-colors.js");
const imodeljs_common_1 = __webpack_require__(/*! @bentley/imodeljs-common */ "@bentley/imodeljs-common");
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


/***/ }),

/***/ "./lib/frontend/components/Components.scss":
/*!*************************************************!*\
  !*** ./lib/frontend/components/Components.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../node_modules/postcss-loader/lib??postcss!../../../node_modules/fast-sass-loader/lib??ref--5!./Components.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/fast-sass-loader/lib/index.js?!./lib/frontend/components/Components.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/frontend/components/Group.js":
/*!******************************************!*\
  !*** ./lib/frontend/components/Group.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// import {
//   IModelApp, IModelConnection,
//   ZoomViewTool, PanViewTool, RotateViewTool, SelectionTool, FitViewTool,
// } from "@bentley/imodeljs-frontend";
/*
import {
  IModelApp,
  ZoomViewTool, PanViewTool, RotateViewTool, SelectionTool, FitViewTool,
} from "@bentley/imodeljs-frontend";
*/
__webpack_require__(/*! ./Group.scss */ "./lib/frontend/components/Group.scss");
const ui_core_1 = __webpack_require__(/*! @bentley/ui-core */ "@bentley/ui-core");
//import { IModelJsElectronManager } from "@bentley/electron-manager";
//import { IModelHubClient } from "@bentley/imodeljs-clients";
/** Toolbar containing simple navigation tools */
const groupWidget = () => {
    return (React.createElement("div", null,
        React.createElement("link", { rel: 'stylesheet', href: 'Group.scss', type: 'text/css' }),
        React.createElement("h2", null, "New iModel"),
        React.createElement("div", { className: "formField" },
            React.createElement("input", { type: 'text', id: "openinput", name: 'text1' }),
            React.createElement("form", { name: "form1", action: "#" /*METHOD*/ })),
        React.createElement("div", { className: "midLeft" },
            React.createElement(ui_core_1.Button, { id: "submitt", buttonType: ui_core_1.ButtonType.Primary, name: "submit", value: "Submit" }, "Submit"),
            React.createElement(ui_core_1.Button, { id: "newImodel", buttonType: ui_core_1.ButtonType.Primary, title: "newImodel" }, "View iModels"))));
};
// const select = () => {
//   let iModelList = IModelConnection.rootSubjectId
// };
/**
 * See the https://imodeljs.github.io/iModelJs-docs-output/learning/frontend/tools/
 * for more details and available tools.
 */
/*
const select = () => {
          IModelApp.tools.run(SelectionTool.toolId);
        };

const fitView = () => {
          IModelApp.tools.run(FitViewTool.toolId, IModelApp.viewManager.selectedView);
        };

const rotate = () => {
          IModelApp.tools.run(RotateViewTool.toolId, IModelApp.viewManager.selectedView);
        };

const pan = () => {
          IModelApp.tools.run(PanViewTool.toolId, IModelApp.viewManager.selectedView);
        };

const zoom = () => {
          IModelApp.tools.run(ZoomViewTool.toolId, IModelApp.viewManager.selectedView);
        };
*/
exports.default = groupWidget;


/***/ }),

/***/ "./lib/frontend/components/Group.scss":
/*!********************************************!*\
  !*** ./lib/frontend/components/Group.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../node_modules/postcss-loader/lib??postcss!../../../node_modules/fast-sass-loader/lib??ref--5!./Group.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/fast-sass-loader/lib/index.js?!./lib/frontend/components/Group.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/frontend/components/Properties.js":
/*!***********************************************!*\
  !*** ./lib/frontend/components/Properties.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = __webpack_require__(/*! react */ "react");
const imodeljs_frontend_1 = __webpack_require__(/*! @bentley/imodeljs-frontend */ "@bentley/imodeljs-frontend");
const ui_core_1 = __webpack_require__(/*! @bentley/ui-core */ "@bentley/ui-core");
const ui_components_1 = __webpack_require__(/*! @bentley/ui-components */ "@bentley/ui-components");
const presentation_components_1 = __webpack_require__(/*! @bentley/presentation-components */ "@bentley/presentation-components");
// create a HOC property grid component that supports unified selection
// tslint:disable-next-line:variable-name
const SimplePropertyGrid = presentation_components_1.propertyGridWithUnifiedSelection(ui_components_1.PropertyGrid);
/** Property grid component for the viewer app */
class SimplePropertiesComponent extends React.PureComponent {
    getDataProvider(props) {
        if (props.dataProvider) {
            const providerProps = props;
            return providerProps.dataProvider;
        }
        else {
            const imodelProps = props;
            return new presentation_components_1.PresentationPropertyDataProvider(imodelProps.imodel, imodelProps.rulesetId);
        }
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("h3", { "data-testid": "property-pane-component-header" }, imodeljs_frontend_1.IModelApp.i18n.translate("SimpleViewer:components.properties")),
            React.createElement("div", { style: { flex: "1", height: "calc(100% - 50px)" } },
                React.createElement(SimplePropertyGrid, { orientation: ui_core_1.Orientation.Horizontal, dataProvider: this.getDataProvider(this.props) }))));
    }
}
exports.default = SimplePropertiesComponent;


/***/ }),

/***/ "./lib/frontend/components/Table.js":
/*!******************************************!*\
  !*** ./lib/frontend/components/Table.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = __webpack_require__(/*! react */ "react");
const ui_components_1 = __webpack_require__(/*! @bentley/ui-components */ "@bentley/ui-components");
const presentation_components_1 = __webpack_require__(/*! @bentley/presentation-components */ "@bentley/presentation-components");
// create a HOC table component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleTable = presentation_components_1.tableWithUnifiedSelection(ui_components_1.Table);
/** Table component for the viewer app */
class SimpleTableComponent extends React.PureComponent {
    getDataProvider(props) {
        if (props.dataProvider) {
            const providerProps = props;
            return providerProps.dataProvider;
        }
        else {
            const imodelProps = props;
            return new presentation_components_1.PresentationTableDataProvider({ imodel: imodelProps.imodel, ruleset: imodelProps.rulesetId });
        }
    }
    render() {
        return (React.createElement("div", { style: { height: "100%" } },
            React.createElement(SimpleTable, { dataProvider: this.getDataProvider(this.props) })));
    }
}
exports.default = SimpleTableComponent;


/***/ }),

/***/ "./lib/frontend/components/Toolbar.js":
/*!********************************************!*\
  !*** ./lib/frontend/components/Toolbar.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const imodeljs_frontend_1 = __webpack_require__(/*! @bentley/imodeljs-frontend */ "@bentley/imodeljs-frontend");
__webpack_require__(/*! ./Components.scss */ "./lib/frontend/components/Components.scss");
/** Toolbar containing simple navigation tools */
const toolbar = () => {
    return (React.createElement("div", { className: "toolbar" },
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.SelectionTool.flyover, onClick: select },
            React.createElement("span", { className: "icon icon-cursor" })),
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.FitViewTool.flyover, onClick: fitView },
            React.createElement("span", { className: "icon icon-fit-to-view" })),
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.RotateViewTool.flyover, onClick: rotate },
            React.createElement("span", { className: "icon icon-gyroscope" })),
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.PanViewTool.flyover, onClick: pan },
            React.createElement("span", { className: "icon icon-hand-2" })),
        React.createElement("a", { href: "#", title: imodeljs_frontend_1.ZoomViewTool.flyover, onClick: zoom },
            React.createElement("span", { className: "icon icon-zoom" }))));
};
/**
 * See the https://imodeljs.github.io/iModelJs-docs-output/learning/frontend/tools/
 * for more details and available tools.
 */
const select = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.SelectionTool.toolId);
};
const fitView = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.FitViewTool.toolId, imodeljs_frontend_1.IModelApp.viewManager.selectedView);
};
const rotate = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.RotateViewTool.toolId, imodeljs_frontend_1.IModelApp.viewManager.selectedView);
};
const pan = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.PanViewTool.toolId, imodeljs_frontend_1.IModelApp.viewManager.selectedView);
};
const zoom = () => {
    imodeljs_frontend_1.IModelApp.tools.run(imodeljs_frontend_1.ZoomViewTool.toolId, imodeljs_frontend_1.IModelApp.viewManager.selectedView);
};
exports.default = toolbar;


/***/ }),

/***/ "./lib/frontend/components/Tree.js":
/*!*****************************************!*\
  !*** ./lib/frontend/components/Tree.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = __webpack_require__(/*! react */ "react");
const imodeljs_frontend_1 = __webpack_require__(/*! @bentley/imodeljs-frontend */ "@bentley/imodeljs-frontend");
const ui_components_1 = __webpack_require__(/*! @bentley/ui-components */ "@bentley/ui-components");
const presentation_components_1 = __webpack_require__(/*! @bentley/presentation-components */ "@bentley/presentation-components");
// create a HOC tree component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleTree = presentation_components_1.treeWithUnifiedSelection(ui_components_1.Tree);
/** Tree component for the viewer app */
class SimpleTreeComponent extends React.PureComponent {
    getDataProvider(props) {
        if (props.dataProvider) {
            const providerProps = props;
            return providerProps.dataProvider;
        }
        else {
            const imodelProps = props;
            return new presentation_components_1.PresentationTreeDataProvider(imodelProps.imodel, imodelProps.rulesetId);
        }
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("h3", { "data-testid": "tree-component-header" }, imodeljs_frontend_1.IModelApp.i18n.translate("SimpleViewer:components.tree")),
            React.createElement("div", { style: { flex: "1" } },
                React.createElement(SimpleTree, { dataProvider: this.getDataProvider(this.props), onNodesSelected: this.props.onNodesSelected }))));
    }
}
exports.default = SimpleTreeComponent;


/***/ }),

/***/ "./lib/frontend/components/Viewport.js":
/*!*********************************************!*\
  !*** ./lib/frontend/components/Viewport.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = __webpack_require__(/*! react */ "react");
const ui_components_1 = __webpack_require__(/*! @bentley/ui-components */ "@bentley/ui-components");
const presentation_components_1 = __webpack_require__(/*! @bentley/presentation-components */ "@bentley/presentation-components");
const Toolbar_1 = __webpack_require__(/*! ./Toolbar */ "./lib/frontend/components/Toolbar.js");
// create a HOC viewport component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleViewport = presentation_components_1.viewWithUnifiedSelection(ui_components_1.ViewportComponent);
/** Viewport component for the viewer app */
class SimpleViewportComponent extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(SimpleViewport, { imodel: this.props.imodel, ruleset: this.props.rulesetId, viewDefinitionId: this.props.viewDefinitionId }),
            React.createElement(Toolbar_1.default, null)));
    }
}
exports.default = SimpleViewportComponent;


/***/ }),

/***/ "./lib/frontend/index.css":
/*!********************************!*\
  !*** ./lib/frontend/index.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../node_modules/postcss-loader/lib??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./lib/frontend/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/frontend/index.js":
/*!*******************************!*\
  !*** ./lib/frontend/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const SimpleViewerApp_1 = __webpack_require__(/*! ./api/SimpleViewerApp */ "./lib/frontend/api/SimpleViewerApp.js");
const App_1 = __webpack_require__(/*! ./components/App */ "./lib/frontend/components/App.js");
__webpack_require__(/*! ./index.css */ "./lib/frontend/index.css");
const configuration_1 = __webpack_require__(/*! ../common/configuration */ "./lib/common/configuration.js");
// setup environment
configuration_1.default();
// initialize the application
SimpleViewerApp_1.SimpleViewerApp.startup();
// tslint:disable-next-line:no-floating-promises
SimpleViewerApp_1.SimpleViewerApp.ready.then(() => {
    // when initialization is complete, render
    ReactDOM.render(React.createElement(App_1.default, null), document.getElementById("root"));
});


/***/ }),

/***/ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../postcss-loader/lib??postcss!./bentley-icons-generic-webfont.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.eot?c49938940b607f3eb90b7b076bf80c46":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.eot?c49938940b607f3eb90b7b076bf80c46 ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.578c30fe.eot";

/***/ }),

/***/ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.svg?c49938940b607f3eb90b7b076bf80c46":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.svg?c49938940b607f3eb90b7b076bf80c46 ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.f803a0b2.svg";

/***/ }),

/***/ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.ttf?c49938940b607f3eb90b7b076bf80c46":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.ttf?c49938940b607f3eb90b7b076bf80c46 ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.c083aa79.ttf";

/***/ }),

/***/ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff2?c49938940b607f3eb90b7b076bf80c46":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff2?c49938940b607f3eb90b7b076bf80c46 ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.63dfb243.woff2";

/***/ }),

/***/ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff?c49938940b607f3eb90b7b076bf80c46":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff?c49938940b607f3eb90b7b076bf80c46 ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.ef60cf18.woff";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./lib/frontend/components/App.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/lib??postcss!./lib/frontend/components/App.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\r\n\r\n.app {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-flow: column;\r\n      flex-flow: column;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.app-header {\r\n  position: relative;\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: #222;\r\n  color: white;\r\n}\r\n\r\n.app-header .text {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 20px;\r\n}\r\n\r\n.app-header .menu {\r\n  position: absolute;\r\n  width: 75px;\r\n  right: 0px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.app .button-open-imodel {\r\n  width: 200px;\r\n  margin: 30vh auto auto auto;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n.app-content {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n/*\r\n.app-content .top-left {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.app-content .bottom {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 0%;\r\n  width: 0%;\r\n}\r\n\r\n.app-content .right {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  height: 0%;\r\n  width: 0%;\r\n}\r\n\r\n.app-content .right .top {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 0%;\r\n  width: 0%;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.app-content .right .bottom {\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 0%;\r\n  width: 0%;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n*/\r\n\r\n.app-content .top-left {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 70%;\r\n  width: 70%;\r\n}\r\n\r\n.app-content .bottom {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 40%;\r\n  width: 70%;\r\n}\r\n\r\n.app-content .right .bottom .bottom-middle {\r\n  -ms-flex-item-align: center;\r\n      align-self: center;\r\n}\r\n\r\n.app-content .right {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 30%;\r\n}\r\n\r\n.app-content .right .top {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 50%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n\r\n.app-content .right .top h3{\r\n  -ms-flex-item-align: center;\r\n      align-self: center;\r\n}\r\n\r\n.app-content .right .bottom {\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 50%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./lib/frontend/index.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/lib??postcss!./lib/frontend/index.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\nh3 {\r\n  margin-bottom: 0.3em;\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/lib??postcss!./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.eot?c49938940b607f3eb90b7b076bf80c46 */ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.eot?c49938940b607f3eb90b7b076bf80c46") + "?#iefix");
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.woff2?c49938940b607f3eb90b7b076bf80c46 */ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff2?c49938940b607f3eb90b7b076bf80c46"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.woff?c49938940b607f3eb90b7b076bf80c46 */ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff?c49938940b607f3eb90b7b076bf80c46"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.ttf?c49938940b607f3eb90b7b076bf80c46 */ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.ttf?c49938940b607f3eb90b7b076bf80c46"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.svg?c49938940b607f3eb90b7b076bf80c46 */ "./node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.svg?c49938940b607f3eb90b7b076bf80c46") + "#bentley-icons-generic-webfont");

// Module
exports.push([module.i, "@font-face {\n\tfont-family: \"bentley-icons-generic-webfont\";\n\tsrc: url(" + ___CSS_LOADER_URL___0___ + ") format(\"embedded-opentype\"),\nurl(" + ___CSS_LOADER_URL___1___ + ") format(\"woff2\"),\nurl(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"),\nurl(" + ___CSS_LOADER_URL___3___ + ") format(\"truetype\"),\nurl(" + ___CSS_LOADER_URL___4___ + ") format(\"svg\");\n}\n\n.icon {\n\tfont-family: bentley-icons-generic-webfont !important;\n\tspeak: none;\n\tfont-style: normal;\n\tfont-weight: normal !important;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.icon-2d:before { content: \"\\f101\"; }\n.icon-3d-photo:before { content: \"\\f102\"; }\n.icon-3d-render:before { content: \"\\f103\"; }\n.icon-3d:before { content: \"\\f104\"; }\n.icon-accusnaps:before { content: \"\\f105\"; }\n.icon-activity:before { content: \"\\f106\"; }\n.icon-add-circular:before { content: \"\\f107\"; }\n.icon-add:before { content: \"\\f108\"; }\n.icon-airplane:before { content: \"\\f109\"; }\n.icon-align-align-bottom:before { content: \"\\f10a\"; }\n.icon-align-align-center-horizontal:before { content: \"\\f10b\"; }\n.icon-align-align-center-vertical:before { content: \"\\f10c\"; }\n.icon-align-align-left:before { content: \"\\f10d\"; }\n.icon-align-align-right:before { content: \"\\f10e\"; }\n.icon-align-align-top:before { content: \"\\f10f\"; }\n.icon-app-1:before { content: \"\\f110\"; }\n.icon-app-2:before { content: \"\\f111\"; }\n.icon-app-launcher:before { content: \"\\f112\"; }\n.icon-apps-assetwise-2:before { content: \"\\f113\"; }\n.icon-apps-assetwise:before { content: \"\\f114\"; }\n.icon-apps-connect:before { content: \"\\f115\"; }\n.icon-apps-projectwise:before { content: \"\\f116\"; }\n.icon-apps-sharepoint-2:before { content: \"\\f117\"; }\n.icon-apps-sharepoint:before { content: \"\\f118\"; }\n.icon-archived:before { content: \"\\f119\"; }\n.icon-arrow-down:before { content: \"\\f11a\"; }\n.icon-arrow-left:before { content: \"\\f11b\"; }\n.icon-arrow-right:before { content: \"\\f11c\"; }\n.icon-arrow-up:before { content: \"\\f11d\"; }\n.icon-attach:before { content: \"\\f11e\"; }\n.icon-automatic:before { content: \"\\f11f\"; }\n.icon-automation:before { content: \"\\f120\"; }\n.icon-basket:before { content: \"\\f121\"; }\n.icon-bentley-systems:before { content: \"\\f122\"; }\n.icon-blank:before { content: \"\\f123\"; }\n.icon-browse-2:before { content: \"\\f124\"; }\n.icon-browse:before { content: \"\\f125\"; }\n.icon-calendar:before { content: \"\\f126\"; }\n.icon-camera-animation:before { content: \"\\f127\"; }\n.icon-camera:before { content: \"\\f128\"; }\n.icon-caret-down:before { content: \"\\f129\"; }\n.icon-caret-left:before { content: \"\\f12a\"; }\n.icon-caret-right:before { content: \"\\f12b\"; }\n.icon-caret-up:before { content: \"\\f12c\"; }\n.icon-charts:before { content: \"\\f12d\"; }\n.icon-chat-new:before { content: \"\\f12e\"; }\n.icon-chat:before { content: \"\\f12f\"; }\n.icon-check-in-document:before { content: \"\\f130\"; }\n.icon-check-in:before { content: \"\\f131\"; }\n.icon-check-out-document:before { content: \"\\f132\"; }\n.icon-check-out:before { content: \"\\f133\"; }\n.icon-checkbox-deselect:before { content: \"\\f134\"; }\n.icon-checkbox-select:before { content: \"\\f135\"; }\n.icon-checkmark:before { content: \"\\f136\"; }\n.icon-chevron-down:before { content: \"\\f137\"; }\n.icon-chevron-left:before { content: \"\\f138\"; }\n.icon-chevron-right:before { content: \"\\f139\"; }\n.icon-chevron-up:before { content: \"\\f13a\"; }\n.icon-clipboard:before { content: \"\\f13b\"; }\n.icon-clipboard-copy-2:before { content: \"\\f13c\"; }\n.icon-clipboard-copy-3:before { content: \"\\f13d\"; }\n.icon-clipboard-copy:before { content: \"\\f13e\"; }\n.icon-clipboard-cut:before { content: \"\\f13f\"; }\n.icon-clipboard-paste-2:before { content: \"\\f140\"; }\n.icon-clipboard-paste:before { content: \"\\f141\"; }\n.icon-clock:before { content: \"\\f142\"; }\n.icon-close-circular:before { content: \"\\f143\"; }\n.icon-close:before { content: \"\\f144\"; }\n.icon-cloud:before { content: \"\\f145\"; }\n.icon-comments:before { content: \"\\f146\"; }\n.icon-compare:before { content: \"\\f147\"; }\n.icon-computer:before { content: \"\\f148\"; }\n.icon-convert:before { content: \"\\f149\"; }\n.icon-crop:before { content: \"\\f14a\"; }\n.icon-cube-faces-bottom:before { content: \"\\f14b\"; }\n.icon-cube-faces-front:before { content: \"\\f14c\"; }\n.icon-cube-faces-iso-left:before { content: \"\\f14d\"; }\n.icon-cube-faces-iso-right:before { content: \"\\f14e\"; }\n.icon-cube-faces-left:before { content: \"\\f14f\"; }\n.icon-cube-faces-none:before { content: \"\\f150\"; }\n.icon-cube-faces-rear:before { content: \"\\f151\"; }\n.icon-cube-faces-right:before { content: \"\\f152\"; }\n.icon-cube-faces-top:before { content: \"\\f153\"; }\n.icon-cursor-click:before { content: \"\\f154\"; }\n.icon-cursor:before { content: \"\\f155\"; }\n.icon-dashboard-2:before { content: \"\\f156\"; }\n.icon-database:before { content: \"\\f157\"; }\n.icon-delete:before { content: \"\\f158\"; }\n.icon-deliverable:before { content: \"\\f159\"; }\n.icon-details:before { content: \"\\f15a\"; }\n.icon-developer:before { content: \"\\f15b\"; }\n.icon-disconnect:before { content: \"\\f15c\"; }\n.icon-distribute-distribute-bottom:before { content: \"\\f15d\"; }\n.icon-distribute-distribute-center-horizontal:before { content: \"\\f15e\"; }\n.icon-distribute-distribute-center-vertical:before { content: \"\\f15f\"; }\n.icon-distribute-distribute-left:before { content: \"\\f160\"; }\n.icon-distribute-distribute-right:before { content: \"\\f161\"; }\n.icon-distribute-distribute-top:before { content: \"\\f162\"; }\n.icon-document-lock:before { content: \"\\f163\"; }\n.icon-document-reference:before { content: \"\\f164\"; }\n.icon-document:before { content: \"\\f165\"; }\n.icon-documentation:before { content: \"\\f166\"; }\n.icon-download:before { content: \"\\f167\"; }\n.icon-drag:before { content: \"\\f168\"; }\n.icon-duplicate:before { content: \"\\f169\"; }\n.icon-edit-object:before { content: \"\\f16a\"; }\n.icon-edit:before { content: \"\\f16b\"; }\n.icon-email:before { content: \"\\f16c\"; }\n.icon-exit:before { content: \"\\f16d\"; }\n.icon-export:before { content: \"\\f16e\"; }\n.icon-external-apps:before { content: \"\\f16f\"; }\n.icon-feedback:before { content: \"\\f170\"; }\n.icon-file-types-amim:before { content: \"\\f171\"; }\n.icon-file-types-audio:before { content: \"\\f172\"; }\n.icon-file-types-creative-cloud:before { content: \"\\f173\"; }\n.icon-file-types-dgn-db-2:before { content: \"\\f174\"; }\n.icon-file-types-dgn-db:before { content: \"\\f175\"; }\n.icon-file-types-document:before { content: \"\\f176\"; }\n.icon-file-types-documentarchive:before { content: \"\\f177\"; }\n.icon-file-types-documentautocad:before { content: \"\\f178\"; }\n.icon-file-types-dwg:before { content: \"\\f179\"; }\n.icon-file-types-forms-shared-help:before { content: \"\\f17a\"; }\n.icon-file-types-forms-shared-success:before { content: \"\\f17b\"; }\n.icon-file-types-forms-shared:before { content: \"\\f17c\"; }\n.icon-file-types-forms-unshared-help:before { content: \"\\f17d\"; }\n.icon-file-types-forms-unshared-success:before { content: \"\\f17e\"; }\n.icon-file-types-image:before { content: \"\\f17f\"; }\n.icon-file-types-microstation:before { content: \"\\f180\"; }\n.icon-file-types-mism:before { content: \"\\f181\"; }\n.icon-file-types-msg:before { content: \"\\f182\"; }\n.icon-file-types-pdf:before { content: \"\\f183\"; }\n.icon-file-types-ppt:before { content: \"\\f184\"; }\n.icon-file-types-raster:before { content: \"\\f185\"; }\n.icon-file-types-revit:before { content: \"\\f186\"; }\n.icon-file-types-sketchup:before { content: \"\\f187\"; }\n.icon-file-types-system:before { content: \"\\f188\"; }\n.icon-file-types-txt-2:before { content: \"\\f189\"; }\n.icon-file-types-txt:before { content: \"\\f18a\"; }\n.icon-file-types-unknown:before { content: \"\\f18b\"; }\n.icon-file-types-vector:before { content: \"\\f18c\"; }\n.icon-file-types-video:before { content: \"\\f18d\"; }\n.icon-file-types-visio:before { content: \"\\f18e\"; }\n.icon-file-types-word:before { content: \"\\f18f\"; }\n.icon-file-types-xls:before { content: \"\\f190\"; }\n.icon-filter-outlined:before { content: \"\\f191\"; }\n.icon-filter:before { content: \"\\f192\"; }\n.icon-find:before { content: \"\\f193\"; }\n.icon-fit-to-view:before { content: \"\\f194\"; }\n.icon-folder-add:before { content: \"\\f195\"; }\n.icon-folder-chevron-down:before { content: \"\\f196\"; }\n.icon-folder-chevron-up:before { content: \"\\f197\"; }\n.icon-folder-export:before { content: \"\\f198\"; }\n.icon-folder-import:before { content: \"\\f199\"; }\n.icon-folder-lock:before { content: \"\\f19a\"; }\n.icon-folder-opened:before { content: \"\\f19b\"; }\n.icon-folder-remove-2:before { content: \"\\f19c\"; }\n.icon-folder-remove:before { content: \"\\f19d\"; }\n.icon-folder-shortcut:before { content: \"\\f19e\"; }\n.icon-folder:before { content: \"\\f19f\"; }\n.icon-font-bold:before { content: \"\\f1a0\"; }\n.icon-font-color:before { content: \"\\f1a1\"; }\n.icon-font-italic:before { content: \"\\f1a2\"; }\n.icon-font-size:before { content: \"\\f1a3\"; }\n.icon-function:before { content: \"\\f1a4\"; }\n.icon-globe:before { content: \"\\f1a5\"; }\n.icon-graph-bar:before { content: \"\\f1a6\"; }\n.icon-graph-pie-chart:before { content: \"\\f1a7\"; }\n.icon-graph-scatter-chart:before { content: \"\\f1a8\"; }\n.icon-graph:before { content: \"\\f1a9\"; }\n.icon-group-ungroup:before { content: \"\\f1aa\"; }\n.icon-group:before { content: \"\\f1ab\"; }\n.icon-gyroscope:before { content: \"\\f1ac\"; }\n.icon-hand-2:before { content: \"\\f1ad\"; }\n.icon-help-hollow:before { content: \"\\f1ae\"; }\n.icon-help:before { content: \"\\f1af\"; }\n.icon-history:before { content: \"\\f1b0\"; }\n.icon-home:before { content: \"\\f1b1\"; }\n.icon-hourglass:before { content: \"\\f1b2\"; }\n.icon-hub:before { content: \"\\f1b3\"; }\n.icon-image:before { content: \"\\f1b4\"; }\n.icon-imodel-2:before { content: \"\\f1b5\"; }\n.icon-imodel-hollow-2:before { content: \"\\f1b6\"; }\n.icon-imodel-hollow:before { content: \"\\f1b7\"; }\n.icon-imodel-schema:before { content: \"\\f1b8\"; }\n.icon-imodel:before { content: \"\\f1b9\"; }\n.icon-imodeljs:before { content: \"\\f1ba\"; }\n.icon-import:before { content: \"\\f1bb\"; }\n.icon-info-2:before { content: \"\\f1bc\"; }\n.icon-info-hollow:before { content: \"\\f1bd\"; }\n.icon-info:before { content: \"\\f1be\"; }\n.icon-install:before { content: \"\\f1bf\"; }\n.icon-isolate:before { content: \"\\f1c0\"; }\n.icon-layers:before { content: \"\\f1c1\"; }\n.icon-link:before { content: \"\\f1c2\"; }\n.icon-list:before { content: \"\\f1c3\"; }\n.icon-location:before { content: \"\\f1c4\"; }\n.icon-lock-unlocked:before { content: \"\\f1c5\"; }\n.icon-lock:before { content: \"\\f1c6\"; }\n.icon-manager:before { content: \"\\f1c7\"; }\n.icon-map:before { content: \"\\f1c8\"; }\n.icon-measure-distance:before { content: \"\\f1c9\"; }\n.icon-measure:before { content: \"\\f1ca\"; }\n.icon-media-controls-circular-pause:before { content: \"\\f1cb\"; }\n.icon-media-controls-circular-play:before { content: \"\\f1cc\"; }\n.icon-media-controls-circular-stop:before { content: \"\\f1cd\"; }\n.icon-menu:before { content: \"\\f1ce\"; }\n.icon-merge:before { content: \"\\f1cf\"; }\n.icon-more-2:before { content: \"\\f1d0\"; }\n.icon-more-circular:before { content: \"\\f1d1\"; }\n.icon-more-vertical-2:before { content: \"\\f1d2\"; }\n.icon-more-vertical-circular:before { content: \"\\f1d3\"; }\n.icon-more-vertical:before { content: \"\\f1d4\"; }\n.icon-more:before { content: \"\\f1d5\"; }\n.icon-move:before { content: \"\\f1d6\"; }\n.icon-network:before { content: \"\\f1d7\"; }\n.icon-notification:before { content: \"\\f1d8\"; }\n.icon-pin:before { content: \"\\f1d9\"; }\n.icon-placeholder:before { content: \"\\f1da\"; }\n.icon-print:before { content: \"\\f1db\"; }\n.icon-process:before { content: \"\\f1dc\"; }\n.icon-progress-backward-2:before { content: \"\\f1dd\"; }\n.icon-progress-backward-3:before { content: \"\\f1de\"; }\n.icon-progress-backward:before { content: \"\\f1df\"; }\n.icon-progress-forward-2:before { content: \"\\f1e0\"; }\n.icon-progress-forward-3:before { content: \"\\f1e1\"; }\n.icon-progress-forward:before { content: \"\\f1e2\"; }\n.icon-properties-list:before { content: \"\\f1e3\"; }\n.icon-properties:before { content: \"\\f1e4\"; }\n.icon-read-only:before { content: \"\\f1e5\"; }\n.icon-records:before { content: \"\\f1e6\"; }\n.icon-redo:before { content: \"\\f1e7\"; }\n.icon-refresh:before { content: \"\\f1e8\"; }\n.icon-remove-2:before { content: \"\\f1e9\"; }\n.icon-remove:before { content: \"\\f1ea\"; }\n.icon-rename:before { content: \"\\f1eb\"; }\n.icon-repair:before { content: \"\\f1ec\"; }\n.icon-reports:before { content: \"\\f1ed\"; }\n.icon-rotate-left:before { content: \"\\f1ee\"; }\n.icon-rotate-right:before { content: \"\\f1ef\"; }\n.icon-rules:before { content: \"\\f1f0\"; }\n.icon-save-as:before { content: \"\\f1f1\"; }\n.icon-save-settings:before { content: \"\\f1f2\"; }\n.icon-save-update:before { content: \"\\f1f3\"; }\n.icon-save:before { content: \"\\f1f4\"; }\n.icon-saved-searches:before { content: \"\\f1f5\"; }\n.icon-saved-view:before { content: \"\\f1f6\"; }\n.icon-scale:before { content: \"\\f1f7\"; }\n.icon-screenshare-stop:before { content: \"\\f1f8\"; }\n.icon-screenshare:before { content: \"\\f1f9\"; }\n.icon-search:before { content: \"\\f1fa\"; }\n.icon-select-box:before { content: \"\\f1fb\"; }\n.icon-select-line:before { content: \"\\f1fc\"; }\n.icon-select-minus:before { content: \"\\f1fd\"; }\n.icon-select-plus:before { content: \"\\f1fe\"; }\n.icon-select-single:before { content: \"\\f1ff\"; }\n.icon-settings:before { content: \"\\f200\"; }\n.icon-share:before { content: \"\\f201\"; }\n.icon-shortcut-add:before { content: \"\\f202\"; }\n.icon-sitemap:before { content: \"\\f203\"; }\n.icon-smartphone:before { content: \"\\f204\"; }\n.icon-smiley-happy:before { content: \"\\f205\"; }\n.icon-smiley-sad:before { content: \"\\f206\"; }\n.icon-snaps-bisector:before { content: \"\\f207\"; }\n.icon-snaps-center:before { content: \"\\f208\"; }\n.icon-snaps-intersection:before { content: \"\\f209\"; }\n.icon-snaps-midpoint:before { content: \"\\f20a\"; }\n.icon-snaps-multione:before { content: \"\\f20b\"; }\n.icon-snaps-multithree:before { content: \"\\f20c\"; }\n.icon-snaps-multitwo:before { content: \"\\f20d\"; }\n.icon-snaps-nearest:before { content: \"\\f20e\"; }\n.icon-snaps-origin:before { content: \"\\f20f\"; }\n.icon-snaps:before { content: \"\\f210\"; }\n.icon-sort-down:before { content: \"\\f211\"; }\n.icon-sort-menu:before { content: \"\\f212\"; }\n.icon-sort-up:before { content: \"\\f213\"; }\n.icon-spaces:before { content: \"\\f214\"; }\n.icon-spin:before { content: \"\\f215\"; }\n.icon-star-hollow:before { content: \"\\f216\"; }\n.icon-star:before { content: \"\\f217\"; }\n.icon-status-error-hollow:before { content: \"\\f218\"; }\n.icon-status-error:before { content: \"\\f219\"; }\n.icon-status-pending:before { content: \"\\f21a\"; }\n.icon-status-rejected:before { content: \"\\f21b\"; }\n.icon-status-success-hollow:before { content: \"\\f21c\"; }\n.icon-status-success:before { content: \"\\f21d\"; }\n.icon-status-update:before { content: \"\\f21e\"; }\n.icon-status-warning:before { content: \"\\f21f\"; }\n.icon-sync:before { content: \"\\f220\"; }\n.icon-table-2:before { content: \"\\f221\"; }\n.icon-table:before { content: \"\\f222\"; }\n.icon-tag-2:before { content: \"\\f223\"; }\n.icon-text-align-text-align-center:before { content: \"\\f224\"; }\n.icon-text-align-text-align-justify:before { content: \"\\f225\"; }\n.icon-text-align-text-align-left:before { content: \"\\f226\"; }\n.icon-text-align-text-align-right:before { content: \"\\f227\"; }\n.icon-text-medium:before { content: \"\\f228\"; }\n.icon-text-small:before { content: \"\\f229\"; }\n.icon-text:before { content: \"\\f22a\"; }\n.icon-thumbnails:before { content: \"\\f22b\"; }\n.icon-timer:before { content: \"\\f22c\"; }\n.icon-tools:before { content: \"\\f22d\"; }\n.icon-tree:before { content: \"\\f22e\"; }\n.icon-underline:before { content: \"\\f22f\"; }\n.icon-undo:before { content: \"\\f230\"; }\n.icon-unlink:before { content: \"\\f231\"; }\n.icon-upgrade:before { content: \"\\f232\"; }\n.icon-upload-to-cloud:before { content: \"\\f233\"; }\n.icon-upload:before { content: \"\\f234\"; }\n.icon-user:before { content: \"\\f235\"; }\n.icon-users:before { content: \"\\f236\"; }\n.icon-validate:before { content: \"\\f237\"; }\n.icon-versions:before { content: \"\\f238\"; }\n.icon-vertex:before { content: \"\\f239\"; }\n.icon-view-layouts:before { content: \"\\f23a\"; }\n.icon-view-navigation:before { content: \"\\f23b\"; }\n.icon-visibility-hide-2:before { content: \"\\f23c\"; }\n.icon-visibility-hide:before { content: \"\\f23d\"; }\n.icon-visibility-invert:before { content: \"\\f23e\"; }\n.icon-visibility:before { content: \"\\f23f\"; }\n.icon-walk:before { content: \"\\f240\"; }\n.icon-wifi-disabled:before { content: \"\\f241\"; }\n.icon-wifi:before { content: \"\\f242\"; }\n.icon-window-add:before { content: \"\\f243\"; }\n.icon-window-area:before { content: \"\\f244\"; }\n.icon-window-backward:before { content: \"\\f245\"; }\n.icon-window-collapse-2:before { content: \"\\f246\"; }\n.icon-window-collapse:before { content: \"\\f247\"; }\n.icon-window-expand:before { content: \"\\f248\"; }\n.icon-window-forward:before { content: \"\\f249\"; }\n.icon-window-full-screen:before { content: \"\\f24a\"; }\n.icon-window-maximize:before { content: \"\\f24b\"; }\n.icon-window-minimize:before { content: \"\\f24c\"; }\n.icon-window-new:before { content: \"\\f24d\"; }\n.icon-window-split-horizontal:before { content: \"\\f24e\"; }\n.icon-window-split-vertical:before { content: \"\\f24f\"; }\n.icon-window:before { content: \"\\f250\"; }\n.icon-windows:before { content: \"\\f251\"; }\n.icon-zoom-in-2:before { content: \"\\f252\"; }\n.icon-zoom-in:before { content: \"\\f253\"; }\n.icon-zoom-out-2:before { content: \"\\f254\"; }\n.icon-zoom-out:before { content: \"\\f255\"; }\n.icon-zoom:before { content: \"\\f256\"; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/fast-sass-loader/lib/index.js?!./lib/frontend/components/Components.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/lib??postcss!./node_modules/fast-sass-loader/lib??ref--5!./lib/frontend/components/Components.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.toolbar {\n  float: right;\n  background-origin: border-box;\n  top: 3%;\n  right: 1%;\n  position: absolute;\n  -webkit-transition: all 500ms ease;\n  -o-transition: all 500ms ease;\n  transition: all 500ms ease;\n  cursor: pointer; }\n\n.toolbar a {\n  padding: 12px;\n  color: black;\n  text-decoration: none;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.22)));\n  background-color: #f9f9f9;\n  border: 1px #4d575f solid; }\n\n.toolbar a:hover {\n  color: #0072b8; }\n\n.icon {\n  background: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/fast-sass-loader/lib/index.js?!./lib/frontend/components/Group.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/postcss-loader/lib??postcss!./node_modules/fast-sass-loader/lib??ref--5!./lib/frontend/components/Group.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "form {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-inline: 15px;\n  padding-top: 10px; }\n\nh2 {\n  font-size: 15pt;\n  -ms-flex-item-align: center;\n      align-self: center;\n  padding-bottom: 0; }\n\n.formField {\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  padding-bottom: 0;\n  padding-top: 0; }\n\n#openinput {\n  font-size: 12pt; }\n\n#submitt, #newImodel {\n  height: 30px;\n  display: inline-block;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  background-color: rgba(192, 192, 192, 0.747);\n  color: black;\n  border: 1px solid black; }\n\n#submitt {\n  width: 80px; }\n\n#newImodel {\n  width: 160px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/distinct-colors/dist/distinct-colors.js":
/*!**************************************************************!*\
  !*** ./node_modules/distinct-colors/dist/distinct-colors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _moutLangDeepClone = __webpack_require__(2);

	var _moutLangDeepClone2 = _interopRequireDefault(_moutLangDeepClone);

	var _moutLangDeepEquals = __webpack_require__(10);

	var _moutLangDeepEquals2 = _interopRequireDefault(_moutLangDeepEquals);

	var _moutArrayUnique = __webpack_require__(23);

	var _moutArrayUnique2 = _interopRequireDefault(_moutArrayUnique);

	var _chromaJs = __webpack_require__(25);

	var _chromaJs2 = _interopRequireDefault(_chromaJs);

	var defaults = {
	  count: 5,
	  hueMin: 0,
	  hueMax: 360,
	  chromaMin: 0,
	  chromaMax: 100,
	  lightMin: 0,
	  lightMax: 100,
	  quality: 50,
	  samples: 800
	};

	var checkColor = function checkColor(lab, options) {
	  var color = _chromaJs2['default'].lab(lab);
	  var hcl = color.hcl();
	  var rgb = color.rgb();
	  var compLab = _chromaJs2['default'].rgb(rgb).lab();
	  var labTolerance = 2;

	  return hcl[0] >= options.hueMin && hcl[0] <= options.hueMax && hcl[1] >= options.chromaMin && hcl[1] <= options.chromaMax && hcl[2] >= options.lightMin && hcl[2] <= options.lightMax && compLab[0] >= lab[0] - labTolerance && compLab[0] <= lab[0] + labTolerance && compLab[1] >= lab[1] - labTolerance && compLab[1] <= lab[1] + labTolerance && compLab[2] >= lab[2] - labTolerance && compLab[2] <= lab[2] + labTolerance;
	};

	var sortByContrast = function sortByContrast(colorList) {
	  var unsortedColors = colorList.slice(0);
	  var sortedColors = [unsortedColors.shift()];
	  while (unsortedColors.length > 0) {
	    var lastColor = sortedColors[sortedColors.length - 1];
	    var nearest = 0;
	    var maxDist = Number.MIN_SAFE_INTEGER;
	    for (var i = 0; i < unsortedColors.length; i++) {
	      var dist = Math.sqrt(Math.pow(Math.abs(lastColor[0] - unsortedColors[i][0]), 2) + Math.pow(Math.abs(lastColor[1] - unsortedColors[i][1]), 2) + Math.pow(Math.abs(lastColor[2] - unsortedColors[i][2]), 2));
	      if (dist > maxDist) {
	        maxDist = dist;
	        nearest = i;
	      }
	    }
	    sortedColors.push(unsortedColors.splice(nearest, 1)[0]);
	  }
	  return sortedColors;
	};

	var distinctColors = function distinctColors() {
	  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var options = _utils2['default'].mergeObj(defaults, opts);

	  if (options.count <= 0) {
	    return [];
	  }

	  if (options.samples < options.count * 5) {
	    options.samples = options.count * 5;
	  }

	  var colors = [];
	  var zonesProto = [];
	  var samples = [];

	  var rangeDivider = Math.cbrt(options.samples);
	  rangeDivider *= 1.001;

	  var hStep = (options.hueMax - options.hueMin) / rangeDivider;
	  var cStep = (options.chromaMax - options.chromaMin) / rangeDivider;
	  var lStep = (options.lightMax - options.lightMin) / rangeDivider;
	  for (var h = options.hueMin; h <= options.hueMax; h += hStep) {
	    for (var c = options.chromaMin; c <= options.chromaMax; c += cStep) {
	      for (var l = options.lightMin; l <= options.lightMax; l += lStep) {
	        var color = _chromaJs2['default'].hcl(h, c, l).lab();
	        if (checkColor(color, options)) {
	          samples.push(color);
	        }
	      }
	    }
	  }

	  samples = (0, _moutArrayUnique2['default'])(samples, function (a, b) {
	    return a.toString() === b.toString();
	  });

	  if (samples.length < options.count) {
	    throw new Error('Not enough samples to generate palette, increase sample count.');
	  }

	  var sliceSize = Math.floor(samples.length / options.count);

	  for (var i = 0; i < samples.length; i += sliceSize) {
	    colors.push(samples[i]);
	    zonesProto.push([]);
	    if (colors.length >= options.count) {
	      break;
	    }
	  }

	  for (var step = 1; step <= options.quality; step++) {
	    var zones = (0, _moutLangDeepClone2['default'])(zonesProto);

	    // Find closest color for each sample
	    for (var i = 0; i < samples.length; i++) {
	      var minDist = Number.MAX_SAFE_INTEGER;
	      var nearest = 0;
	      for (var j = 0; j < colors.length; j++) {
	        var dist = Math.sqrt(Math.pow(Math.abs(samples[i][0] - colors[j][0]), 2) + Math.pow(Math.abs(samples[i][1] - colors[j][1]), 2) + Math.pow(Math.abs(samples[i][2] - colors[j][2]), 2));
	        if (dist < minDist) {
	          minDist = dist;
	          nearest = j;
	        }
	      }
	      zones[nearest].push(samples[i]);
	    }

	    var lastColors = (0, _moutLangDeepClone2['default'])(colors);

	    for (var i = 0; i < zones.length; i++) {
	      var zone = zones[i];
	      var size = zone.length;
	      var Ls = [];
	      var As = [];
	      var Bs = [];

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = zone[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var sample = _step.value;

	          Ls.push(sample[0]);
	          As.push(sample[1]);
	          Bs.push(sample[2]);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      var lAvg = _utils2['default'].sum(Ls) / size;
	      var aAvg = _utils2['default'].sum(As) / size;
	      var bAvg = _utils2['default'].sum(Bs) / size;

	      colors[i] = [lAvg, aAvg, bAvg];
	    }

	    if ((0, _moutLangDeepEquals2['default'])(lastColors, colors)) {
	      break;
	    }
	  }

	  colors = sortByContrast(colors);

	  return colors.map(function (lab) {
	    return _chromaJs2['default'].lab(lab);
	  });
	};

	exports['default'] = distinctColors;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var utils = {

	  mergeObj: function mergeObj(o1, o2) {
	    if (o1 == null || o2 == null) {
	      return o1;
	    }

	    for (var key in o2) {
	      if (o2.hasOwnProperty(key)) {
	        o1[key] = o2[key];
	      }
	    }

	    return o1;
	  },

	  sum: function sum(array) {
	    return array.reduce(function (a, b) {
	      return a + b;
	    });
	  }

	};

	exports["default"] = utils;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var clone = __webpack_require__(3);
	var forOwn = __webpack_require__(7);
	var kindOf = __webpack_require__(4);
	var isPlainObject = __webpack_require__(5);

	    /**
	     * Recursively clone native types.
	     */
	    function deepClone(val, instanceClone) {
	        switch ( kindOf(val) ) {
	            case 'Object':
	                return cloneObject(val, instanceClone);
	            case 'Array':
	                return cloneArray(val, instanceClone);
	            default:
	                return clone(val);
	        }
	    }

	    function cloneObject(source, instanceClone) {
	        if (isPlainObject(source)) {
	            var out = {};
	            forOwn(source, function(val, key) {
	                this[key] = deepClone(val, instanceClone);
	            }, out);
	            return out;
	        } else if (instanceClone) {
	            return instanceClone(source);
	        } else {
	            return source;
	        }
	    }

	    function cloneArray(arr, instanceClone) {
	        var out = [],
	            i = -1,
	            n = arr.length,
	            val;
	        while (++i < n) {
	            out[i] = deepClone(arr[i], instanceClone);
	        }
	        return out;
	    }

	    module.exports = deepClone;





/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var kindOf = __webpack_require__(4);
	var isPlainObject = __webpack_require__(5);
	var mixIn = __webpack_require__(6);

	    /**
	     * Clone native types.
	     */
	    function clone(val){
	        switch (kindOf(val)) {
	            case 'Object':
	                return cloneObject(val);
	            case 'Array':
	                return cloneArray(val);
	            case 'RegExp':
	                return cloneRegExp(val);
	            case 'Date':
	                return cloneDate(val);
	            default:
	                return val;
	        }
	    }

	    function cloneObject(source) {
	        if (isPlainObject(source)) {
	            return mixIn({}, source);
	        } else {
	            return source;
	        }
	    }

	    function cloneRegExp(r) {
	        var flags = '';
	        flags += r.multiline ? 'm' : '';
	        flags += r.global ? 'g' : '';
	        flags += r.ignoreCase ? 'i' : '';
	        return new RegExp(r.source, flags);
	    }

	    function cloneDate(date) {
	        return new Date(+date);
	    }

	    function cloneArray(arr) {
	        return arr.slice();
	    }

	    module.exports = clone;




/***/ },
/* 4 */
/***/ function(module, exports) {

	

	    var _rKind = /^\[object (.*)\]$/,
	        _toString = Object.prototype.toString,
	        UNDEF;

	    /**
	     * Gets the "kind" of value. (e.g. "String", "Number", etc)
	     */
	    function kindOf(val) {
	        if (val === null) {
	            return 'Null';
	        } else if (val === UNDEF) {
	            return 'Undefined';
	        } else {
	            return _rKind.exec( _toString.call(val) )[1];
	        }
	    }
	    module.exports = kindOf;



/***/ },
/* 5 */
/***/ function(module, exports) {

	

	    /**
	     * Checks if the value is created by the `Object` constructor.
	     */
	    function isPlainObject(value) {
	        return (!!value && typeof value === 'object' &&
	            value.constructor === Object);
	    }

	    module.exports = isPlainObject;




/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var forOwn = __webpack_require__(7);

	    /**
	    * Combine properties from all the objects into first one.
	    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
	    * @param {object} target    Target Object
	    * @param {...object} objects    Objects to be combined (0...n objects).
	    * @return {object} Target Object.
	    */
	    function mixIn(target, objects){
	        var i = 0,
	            n = arguments.length,
	            obj;
	        while(++i < n){
	            obj = arguments[i];
	            if (obj != null) {
	                forOwn(obj, copyProp, target);
	            }
	        }
	        return target;
	    }

	    function copyProp(val, key){
	        this[key] = val;
	    }

	    module.exports = mixIn;



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var hasOwn = __webpack_require__(8);
	var forIn = __webpack_require__(9);

	    /**
	     * Similar to Array/forEach but works over object properties and fixes Don't
	     * Enum bug on IE.
	     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
	     */
	    function forOwn(obj, fn, thisObj){
	        forIn(obj, function(val, key){
	            if (hasOwn(obj, key)) {
	                return fn.call(thisObj, obj[key], key, obj);
	            }
	        });
	    }

	    module.exports = forOwn;




/***/ },
/* 8 */
/***/ function(module, exports) {

	

	    /**
	     * Safer Object.hasOwnProperty
	     */
	     function hasOwn(obj, prop){
	         return Object.prototype.hasOwnProperty.call(obj, prop);
	     }

	     module.exports = hasOwn;




/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var hasOwn = __webpack_require__(8);

	    var _hasDontEnumBug,
	        _dontEnums;

	    function checkDontEnum(){
	        _dontEnums = [
	                'toString',
	                'toLocaleString',
	                'valueOf',
	                'hasOwnProperty',
	                'isPrototypeOf',
	                'propertyIsEnumerable',
	                'constructor'
	            ];

	        _hasDontEnumBug = true;

	        for (var key in {'toString': null}) {
	            _hasDontEnumBug = false;
	        }
	    }

	    /**
	     * Similar to Array/forEach but works over object properties and fixes Don't
	     * Enum bug on IE.
	     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
	     */
	    function forIn(obj, fn, thisObj){
	        var key, i = 0;
	        // no need to check if argument is a real object that way we can use
	        // it for arrays, functions, date, etc.

	        //post-pone check till needed
	        if (_hasDontEnumBug == null) checkDontEnum();

	        for (key in obj) {
	            if (exec(fn, obj, key, thisObj) === false) {
	                break;
	            }
	        }


	        if (_hasDontEnumBug) {
	            var ctor = obj.constructor,
	                isProto = !!ctor && obj === ctor.prototype;

	            while (key = _dontEnums[i++]) {
	                // For constructor, if it is a prototype object the constructor
	                // is always non-enumerable unless defined otherwise (and
	                // enumerated above).  For non-prototype objects, it will have
	                // to be defined on this object, since it cannot be defined on
	                // any prototype objects.
	                //
	                // For other [[DontEnum]] properties, check if the value is
	                // different than Object prototype value.
	                if (
	                    (key !== 'constructor' ||
	                        (!isProto && hasOwn(obj, key))) &&
	                    obj[key] !== Object.prototype[key]
	                ) {
	                    if (exec(fn, obj, key, thisObj) === false) {
	                        break;
	                    }
	                }
	            }
	        }
	    }

	    function exec(fn, obj, key, thisObj){
	        return fn.call(thisObj, obj[key], key, obj);
	    }

	    module.exports = forIn;




/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(11);
	var isObject = __webpack_require__(12);
	var isArray = __webpack_require__(14);
	var objEquals = __webpack_require__(15);
	var arrEquals = __webpack_require__(21);

	    /**
	     * Recursively checks for same properties and values.
	     */
	    function deepEquals(a, b, callback){
	        callback = callback || is;

	        var bothObjects = isObject(a) && isObject(b);
	        var bothArrays = !bothObjects && isArray(a) && isArray(b);

	        if (!bothObjects && !bothArrays) {
	            return callback(a, b);
	        }

	        function compare(a, b){
	            return deepEquals(a, b, callback);
	        }

	        var method = bothObjects ? objEquals : arrEquals;
	        return method(a, b, compare);
	    }

	    module.exports = deepEquals;




/***/ },
/* 11 */
/***/ function(module, exports) {

	

	    /**
	     * Check if both arguments are egal.
	     */
	    function is(x, y){
	        // implementation borrowed from harmony:egal spec
	        if (x === y) {
	          // 0 === -0, but they are not identical
	          return x !== 0 || 1 / x === 1 / y;
	        }

	        // NaN !== NaN, but they are identical.
	        // NaNs are the only non-reflexive value, i.e., if x !== x,
	        // then x is a NaN.
	        // isNaN is broken: it converts its argument to number, so
	        // isNaN("foo") => true
	        return x !== x && y !== y;
	    }

	    module.exports = is;




/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isKind = __webpack_require__(13);
	    /**
	     */
	    function isObject(val) {
	        return isKind(val, 'Object');
	    }
	    module.exports = isObject;



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var kindOf = __webpack_require__(4);
	    /**
	     * Check if value is from a specific "kind".
	     */
	    function isKind(val, kind){
	        return kindOf(val) === kind;
	    }
	    module.exports = isKind;



/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isKind = __webpack_require__(13);
	    /**
	     */
	    var isArray = Array.isArray || function (val) {
	        return isKind(val, 'Array');
	    };
	    module.exports = isArray;



/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var hasOwn = __webpack_require__(8);
	var every = __webpack_require__(16);
	var isObject = __webpack_require__(12);
	var is = __webpack_require__(11);

	    // Makes a function to compare the object values from the specified compare
	    // operation callback.
	    function makeCompare(callback) {
	        return function(value, key) {
	            return hasOwn(this, key) && callback(value, this[key]);
	        };
	    }

	    function checkProperties(value, key) {
	        return hasOwn(this, key);
	    }

	    /**
	     * Checks if two objects have the same keys and values.
	     */
	    function equals(a, b, callback) {
	        callback = callback || is;

	        if (!isObject(a) || !isObject(b)) {
	            return callback(a, b);
	        }

	        return (every(a, makeCompare(callback), b) &&
	                every(b, checkProperties, a));
	    }

	    module.exports = equals;



/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var forOwn = __webpack_require__(7);
	var makeIterator = __webpack_require__(17);

	    /**
	     * Object every
	     */
	    function every(obj, callback, thisObj) {
	        callback = makeIterator(callback, thisObj);
	        var result = true;
	        forOwn(obj, function(val, key) {
	            // we consider any falsy values as "false" on purpose so shorthand
	            // syntax can be used to check property existence
	            if (!callback(val, key, obj)) {
	                result = false;
	                return false; // break
	            }
	        });
	        return result;
	    }

	    module.exports = every;




/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(18);
	var prop = __webpack_require__(19);
	var deepMatches = __webpack_require__(20);

	    /**
	     * Converts argument into a valid iterator.
	     * Used internally on most array/object/collection methods that receives a
	     * callback/iterator providing a shortcut syntax.
	     */
	    function makeIterator(src, thisObj){
	        if (src == null) {
	            return identity;
	        }
	        switch(typeof src) {
	            case 'function':
	                // function is the first to improve perf (most common case)
	                // also avoid using `Function#call` if not needed, which boosts
	                // perf a lot in some cases
	                return (typeof thisObj !== 'undefined')? function(val, i, arr){
	                    return src.call(thisObj, val, i, arr);
	                } : src;
	            case 'object':
	                return function(val){
	                    return deepMatches(val, src);
	                };
	            case 'string':
	            case 'number':
	                return prop(src);
	        }
	    }

	    module.exports = makeIterator;




/***/ },
/* 18 */
/***/ function(module, exports) {

	

	    /**
	     * Returns the first argument provided to it.
	     */
	    function identity(val){
	        return val;
	    }

	    module.exports = identity;




/***/ },
/* 19 */
/***/ function(module, exports) {

	

	    /**
	     * Returns a function that gets a property of the passed object
	     */
	    function prop(name){
	        return function(obj){
	            return obj[name];
	        };
	    }

	    module.exports = prop;




/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var forOwn = __webpack_require__(7);
	var isArray = __webpack_require__(14);

	    function containsMatch(array, pattern) {
	        var i = -1, length = array.length;
	        while (++i < length) {
	            if (deepMatches(array[i], pattern)) {
	                return true;
	            }
	        }

	        return false;
	    }

	    function matchArray(target, pattern) {
	        var i = -1, patternLength = pattern.length;
	        while (++i < patternLength) {
	            if (!containsMatch(target, pattern[i])) {
	                return false;
	            }
	        }

	        return true;
	    }

	    function matchObject(target, pattern) {
	        var result = true;
	        forOwn(pattern, function(val, key) {
	            if (!deepMatches(target[key], val)) {
	                // Return false to break out of forOwn early
	                return (result = false);
	            }
	        });

	        return result;
	    }

	    /**
	     * Recursively check if the objects match.
	     */
	    function deepMatches(target, pattern){
	        if (target && typeof target === 'object') {
	            if (isArray(target) && isArray(pattern)) {
	                return matchArray(target, pattern);
	            } else {
	                return matchObject(target, pattern);
	            }
	        } else {
	            return target === pattern;
	        }
	    }

	    module.exports = deepMatches;




/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(11);
	var isArray = __webpack_require__(14);
	var every = __webpack_require__(22);

	    /**
	     * Compares if both arrays have the same elements
	     */
	    function equals(a, b, callback){
	        callback = callback || is;

	        if (!isArray(a) || !isArray(b)) {
	            return callback(a, b);
	        }

	        if (a.length !== b.length) {
	            return false;
	        }

	        return every(a, makeCompare(callback), b);
	    }

	    function makeCompare(callback) {
	        return function(value, i) {
	            return i in this && callback(value, this[i]);
	        };
	    }

	    module.exports = equals;




/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var makeIterator = __webpack_require__(17);

	    /**
	     * Array every
	     */
	    function every(arr, callback, thisObj) {
	        callback = makeIterator(callback, thisObj);
	        var result = true;
	        if (arr == null) {
	            return result;
	        }

	        var i = -1, len = arr.length;
	        while (++i < len) {
	            // we iterate over sparse items since there is no way to make it
	            // work properly on IE 7-8. see #64
	            if (!callback(arr[i], i, arr) ) {
	                result = false;
	                break;
	            }
	        }

	        return result;
	    }

	    module.exports = every;



/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var filter = __webpack_require__(24);

	    /**
	     * @return {array} Array of unique items
	     */
	    function unique(arr, compare){
	        compare = compare || isEqual;
	        return filter(arr, function(item, i, arr){
	            var n = arr.length;
	            while (++i < n) {
	                if ( compare(item, arr[i]) ) {
	                    return false;
	                }
	            }
	            return true;
	        });
	    }

	    function isEqual(a, b){
	        return a === b;
	    }

	    module.exports = unique;




/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var makeIterator = __webpack_require__(17);

	    /**
	     * Array filter
	     */
	    function filter(arr, callback, thisObj) {
	        callback = makeIterator(callback, thisObj);
	        var results = [];
	        if (arr == null) {
	            return results;
	        }

	        var i = -1, len = arr.length, value;
	        while (++i < len) {
	            value = arr[i];
	            if (callback(value, i, arr)) {
	                results.push(value);
	            }
	        }

	        return results;
	    }

	    module.exports = filter;




/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {
	/**
	 * @license
	 *
	 * chroma.js - JavaScript library for color conversions
	 * 
	 * Copyright (c) 2011-2015, Gregor Aisch
	 * All rights reserved.
	 * 
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 * 
	 * 1. Redistributions of source code must retain the above copyright notice, this
	 *    list of conditions and the following disclaimer.
	 * 
	 * 2. Redistributions in binary form must reproduce the above copyright notice,
	 *    this list of conditions and the following disclaimer in the documentation
	 *    and/or other materials provided with the distribution.
	 * 
	 * 3. The name Gregor Aisch may not be used to endorse or promote products
	 *    derived from this software without specific prior written permission.
	 * 
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 *
	 */

	(function() {
	  var Color, DEG2RAD, LAB_CONSTANTS, PI, PITHIRD, RAD2DEG, TWOPI, _guess_formats, _guess_formats_sorted, _input, _interpolators, abs, atan2, bezier, blend, blend_f, brewer, burn, chroma, clip_rgb, cmyk2rgb, colors, cos, css2rgb, darken, dodge, each, floor, hex2rgb, hsi2rgb, hsl2css, hsl2rgb, hsv2rgb, interpolate, interpolate_hsx, interpolate_lab, interpolate_num, interpolate_rgb, lab2lch, lab2rgb, lab_xyz, lch2lab, lch2rgb, lighten, limit, log, luminance_x, m, max, multiply, normal, num2rgb, overlay, pow, rgb2cmyk, rgb2css, rgb2hex, rgb2hsi, rgb2hsl, rgb2hsv, rgb2lab, rgb2lch, rgb2luminance, rgb2num, rgb2temperature, rgb2xyz, rgb_xyz, rnd, root, round, screen, sin, sqrt, temperature2rgb, type, unpack, w3cx11, xyz_lab, xyz_rgb,
	    slice = [].slice;

	  type = (function() {

	    /*
	    for browser-safe type checking+
	    ported from jQuery's $.type
	     */
	    var classToType, len, name, o, ref;
	    classToType = {};
	    ref = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
	    for (o = 0, len = ref.length; o < len; o++) {
	      name = ref[o];
	      classToType["[object " + name + "]"] = name.toLowerCase();
	    }
	    return function(obj) {
	      var strType;
	      strType = Object.prototype.toString.call(obj);
	      return classToType[strType] || "object";
	    };
	  })();

	  limit = function(x, min, max) {
	    if (min == null) {
	      min = 0;
	    }
	    if (max == null) {
	      max = 1;
	    }
	    if (x < min) {
	      x = min;
	    }
	    if (x > max) {
	      x = max;
	    }
	    return x;
	  };

	  unpack = function(args) {
	    if (args.length >= 3) {
	      return [].slice.call(args);
	    } else {
	      return args[0];
	    }
	  };

	  clip_rgb = function(rgb) {
	    var i;
	    for (i in rgb) {
	      if (i < 3) {
	        if (rgb[i] < 0) {
	          rgb[i] = 0;
	        }
	        if (rgb[i] > 255) {
	          rgb[i] = 255;
	        }
	      } else if (i === 3) {
	        if (rgb[i] < 0) {
	          rgb[i] = 0;
	        }
	        if (rgb[i] > 1) {
	          rgb[i] = 1;
	        }
	      }
	    }
	    return rgb;
	  };

	  PI = Math.PI, round = Math.round, cos = Math.cos, floor = Math.floor, pow = Math.pow, log = Math.log, sin = Math.sin, sqrt = Math.sqrt, atan2 = Math.atan2, max = Math.max, abs = Math.abs;

	  TWOPI = PI * 2;

	  PITHIRD = PI / 3;

	  DEG2RAD = PI / 180;

	  RAD2DEG = 180 / PI;

	  chroma = function() {
	    if (arguments[0] instanceof Color) {
	      return arguments[0];
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, arguments, function(){});
	  };

	  _interpolators = [];

	  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
	    module.exports = chroma;
	  }

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return chroma;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {}

	  chroma.version = '1.1.1';


	  /**
	      chroma.js
	  
	      Copyright (c) 2011-2013, Gregor Aisch
	      All rights reserved.
	  
	      Redistribution and use in source and binary forms, with or without
	      modification, are permitted provided that the following conditions are met:
	  
	      * Redistributions of source code must retain the above copyright notice, this
	        list of conditions and the following disclaimer.
	  
	      * Redistributions in binary form must reproduce the above copyright notice,
	        this list of conditions and the following disclaimer in the documentation
	        and/or other materials provided with the distribution.
	  
	      * The name Gregor Aisch may not be used to endorse or promote products
	        derived from this software without specific prior written permission.
	  
	      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	  
	      @source: https://github.com/gka/chroma.js
	   */

	  _input = {};

	  _guess_formats = [];

	  _guess_formats_sorted = false;

	  Color = (function() {
	    function Color() {
	      var arg, args, chk, len, len1, me, mode, o, w;
	      me = this;
	      args = [];
	      for (o = 0, len = arguments.length; o < len; o++) {
	        arg = arguments[o];
	        if (arg != null) {
	          args.push(arg);
	        }
	      }
	      mode = args[args.length - 1];
	      if (_input[mode] != null) {
	        me._rgb = clip_rgb(_input[mode](unpack(args.slice(0, -1))));
	      } else {
	        if (!_guess_formats_sorted) {
	          _guess_formats = _guess_formats.sort(function(a, b) {
	            return b.p - a.p;
	          });
	          _guess_formats_sorted = true;
	        }
	        for (w = 0, len1 = _guess_formats.length; w < len1; w++) {
	          chk = _guess_formats[w];
	          mode = chk.test.apply(chk, args);
	          if (mode) {
	            break;
	          }
	        }
	        if (mode) {
	          me._rgb = clip_rgb(_input[mode].apply(_input, args));
	        }
	      }
	      if (me._rgb == null) {
	        console.warn('unknown format: ' + args);
	      }
	      if (me._rgb == null) {
	        me._rgb = [0, 0, 0];
	      }
	      if (me._rgb.length === 3) {
	        me._rgb.push(1);
	      }
	    }

	    Color.prototype.alpha = function(alpha) {
	      if (arguments.length) {
	        this._rgb[3] = alpha;
	        return this;
	      }
	      return this._rgb[3];
	    };

	    Color.prototype.toString = function() {
	      return this.name();
	    };

	    return Color;

	  })();

	  chroma._input = _input;


	  /**
	  	ColorBrewer colors for chroma.js
	  
	  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
	  	Pennsylvania State University.
	  
	  	Licensed under the Apache License, Version 2.0 (the "License"); 
	  	you may not use this file except in compliance with the License.
	  	You may obtain a copy of the License at	
	  	http://www.apache.org/licenses/LICENSE-2.0
	  
	  	Unless required by applicable law or agreed to in writing, software distributed
	  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
	  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
	  	specific language governing permissions and limitations under the License.
	  
	      @preserve
	   */

	  chroma.brewer = brewer = {
	    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
	    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
	    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
	    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
	    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
	    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
	    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
	    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
	    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
	    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
	    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
	    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
	    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
	    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
	    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
	    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
	    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
	    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
	    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
	    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
	    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
	    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
	    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
	    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
	    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
	    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
	    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
	    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
	    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
	    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
	    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
	    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
	    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
	    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
	    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
	  };


	  /**
	  	X11 color names
	  
	  	http://www.w3.org/TR/css3-color/#svg-color
	   */

	  w3cx11 = {
	    indigo: "#4b0082",
	    gold: "#ffd700",
	    hotpink: "#ff69b4",
	    firebrick: "#b22222",
	    indianred: "#cd5c5c",
	    yellow: "#ffff00",
	    mistyrose: "#ffe4e1",
	    darkolivegreen: "#556b2f",
	    olive: "#808000",
	    darkseagreen: "#8fbc8f",
	    pink: "#ffc0cb",
	    tomato: "#ff6347",
	    lightcoral: "#f08080",
	    orangered: "#ff4500",
	    navajowhite: "#ffdead",
	    lime: "#00ff00",
	    palegreen: "#98fb98",
	    darkslategrey: "#2f4f4f",
	    greenyellow: "#adff2f",
	    burlywood: "#deb887",
	    seashell: "#fff5ee",
	    mediumspringgreen: "#00fa9a",
	    fuchsia: "#ff00ff",
	    papayawhip: "#ffefd5",
	    blanchedalmond: "#ffebcd",
	    chartreuse: "#7fff00",
	    dimgray: "#696969",
	    black: "#000000",
	    peachpuff: "#ffdab9",
	    springgreen: "#00ff7f",
	    aquamarine: "#7fffd4",
	    white: "#ffffff",
	    orange: "#ffa500",
	    lightsalmon: "#ffa07a",
	    darkslategray: "#2f4f4f",
	    brown: "#a52a2a",
	    ivory: "#fffff0",
	    dodgerblue: "#1e90ff",
	    peru: "#cd853f",
	    lawngreen: "#7cfc00",
	    chocolate: "#d2691e",
	    crimson: "#dc143c",
	    forestgreen: "#228b22",
	    darkgrey: "#a9a9a9",
	    lightseagreen: "#20b2aa",
	    cyan: "#00ffff",
	    mintcream: "#f5fffa",
	    silver: "#c0c0c0",
	    antiquewhite: "#faebd7",
	    mediumorchid: "#ba55d3",
	    skyblue: "#87ceeb",
	    gray: "#808080",
	    darkturquoise: "#00ced1",
	    goldenrod: "#daa520",
	    darkgreen: "#006400",
	    floralwhite: "#fffaf0",
	    darkviolet: "#9400d3",
	    darkgray: "#a9a9a9",
	    moccasin: "#ffe4b5",
	    saddlebrown: "#8b4513",
	    grey: "#808080",
	    darkslateblue: "#483d8b",
	    lightskyblue: "#87cefa",
	    lightpink: "#ffb6c1",
	    mediumvioletred: "#c71585",
	    slategrey: "#708090",
	    red: "#ff0000",
	    deeppink: "#ff1493",
	    limegreen: "#32cd32",
	    darkmagenta: "#8b008b",
	    palegoldenrod: "#eee8aa",
	    plum: "#dda0dd",
	    turquoise: "#40e0d0",
	    lightgrey: "#d3d3d3",
	    lightgoldenrodyellow: "#fafad2",
	    darkgoldenrod: "#b8860b",
	    lavender: "#e6e6fa",
	    maroon: "#800000",
	    yellowgreen: "#9acd32",
	    sandybrown: "#f4a460",
	    thistle: "#d8bfd8",
	    violet: "#ee82ee",
	    navy: "#000080",
	    magenta: "#ff00ff",
	    dimgrey: "#696969",
	    tan: "#d2b48c",
	    rosybrown: "#bc8f8f",
	    olivedrab: "#6b8e23",
	    blue: "#0000ff",
	    lightblue: "#add8e6",
	    ghostwhite: "#f8f8ff",
	    honeydew: "#f0fff0",
	    cornflowerblue: "#6495ed",
	    slateblue: "#6a5acd",
	    linen: "#faf0e6",
	    darkblue: "#00008b",
	    powderblue: "#b0e0e6",
	    seagreen: "#2e8b57",
	    darkkhaki: "#bdb76b",
	    snow: "#fffafa",
	    sienna: "#a0522d",
	    mediumblue: "#0000cd",
	    royalblue: "#4169e1",
	    lightcyan: "#e0ffff",
	    green: "#008000",
	    mediumpurple: "#9370db",
	    midnightblue: "#191970",
	    cornsilk: "#fff8dc",
	    paleturquoise: "#afeeee",
	    bisque: "#ffe4c4",
	    slategray: "#708090",
	    darkcyan: "#008b8b",
	    khaki: "#f0e68c",
	    wheat: "#f5deb3",
	    teal: "#008080",
	    darkorchid: "#9932cc",
	    deepskyblue: "#00bfff",
	    salmon: "#fa8072",
	    darkred: "#8b0000",
	    steelblue: "#4682b4",
	    palevioletred: "#db7093",
	    lightslategray: "#778899",
	    aliceblue: "#f0f8ff",
	    lightslategrey: "#778899",
	    lightgreen: "#90ee90",
	    orchid: "#da70d6",
	    gainsboro: "#dcdcdc",
	    mediumseagreen: "#3cb371",
	    lightgray: "#d3d3d3",
	    mediumturquoise: "#48d1cc",
	    lemonchiffon: "#fffacd",
	    cadetblue: "#5f9ea0",
	    lightyellow: "#ffffe0",
	    lavenderblush: "#fff0f5",
	    coral: "#ff7f50",
	    purple: "#800080",
	    aqua: "#00ffff",
	    whitesmoke: "#f5f5f5",
	    mediumslateblue: "#7b68ee",
	    darkorange: "#ff8c00",
	    mediumaquamarine: "#66cdaa",
	    darksalmon: "#e9967a",
	    beige: "#f5f5dc",
	    blueviolet: "#8a2be2",
	    azure: "#f0ffff",
	    lightsteelblue: "#b0c4de",
	    oldlace: "#fdf5e6",
	    rebeccapurple: "#663399"
	  };

	  chroma.colors = colors = w3cx11;

	  lab2rgb = function() {
	    var a, args, b, g, l, r, x, y, z;
	    args = unpack(arguments);
	    l = args[0], a = args[1], b = args[2];
	    y = (l + 16) / 116;
	    x = isNaN(a) ? y : y + a / 500;
	    z = isNaN(b) ? y : y - b / 200;
	    y = LAB_CONSTANTS.Yn * lab_xyz(y);
	    x = LAB_CONSTANTS.Xn * lab_xyz(x);
	    z = LAB_CONSTANTS.Zn * lab_xyz(z);
	    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
	    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
	    b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
	    r = limit(r, 0, 255);
	    g = limit(g, 0, 255);
	    b = limit(b, 0, 255);
	    return [r, g, b, args.length > 3 ? args[3] : 1];
	  };

	  xyz_rgb = function(r) {
	    return round(255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055));
	  };

	  lab_xyz = function(t) {
	    if (t > LAB_CONSTANTS.t1) {
	      return t * t * t;
	    } else {
	      return LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0);
	    }
	  };

	  LAB_CONSTANTS = {
	    Kn: 18,
	    Xn: 0.950470,
	    Yn: 1,
	    Zn: 1.088830,
	    t0: 0.137931034,
	    t1: 0.206896552,
	    t2: 0.12841855,
	    t3: 0.008856452
	  };

	  rgb2lab = function() {
	    var b, g, r, ref, ref1, x, y, z;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    ref1 = rgb2xyz(r, g, b), x = ref1[0], y = ref1[1], z = ref1[2];
	    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
	  };

	  rgb_xyz = function(r) {
	    if ((r /= 255) <= 0.04045) {
	      return r / 12.92;
	    } else {
	      return pow((r + 0.055) / 1.055, 2.4);
	    }
	  };

	  xyz_lab = function(t) {
	    if (t > LAB_CONSTANTS.t3) {
	      return pow(t, 1 / 3);
	    } else {
	      return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
	    }
	  };

	  rgb2xyz = function() {
	    var b, g, r, ref, x, y, z;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    r = rgb_xyz(r);
	    g = rgb_xyz(g);
	    b = rgb_xyz(b);
	    x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
	    y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS.Yn);
	    z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
	    return [x, y, z];
	  };

	  chroma.lab = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['lab']), function(){});
	  };

	  _input.lab = lab2rgb;

	  Color.prototype.lab = function() {
	    return rgb2lab(this._rgb);
	  };

	  bezier = function(colors) {
	    var I, I0, I1, c, lab0, lab1, lab2, lab3, ref, ref1, ref2;
	    colors = (function() {
	      var len, o, results;
	      results = [];
	      for (o = 0, len = colors.length; o < len; o++) {
	        c = colors[o];
	        results.push(chroma(c));
	      }
	      return results;
	    })();
	    if (colors.length === 2) {
	      ref = (function() {
	        var len, o, results;
	        results = [];
	        for (o = 0, len = colors.length; o < len; o++) {
	          c = colors[o];
	          results.push(c.lab());
	        }
	        return results;
	      })(), lab0 = ref[0], lab1 = ref[1];
	      I = function(t) {
	        var i, lab;
	        lab = (function() {
	          var o, results;
	          results = [];
	          for (i = o = 0; o <= 2; i = ++o) {
	            results.push(lab0[i] + t * (lab1[i] - lab0[i]));
	          }
	          return results;
	        })();
	        return chroma.lab.apply(chroma, lab);
	      };
	    } else if (colors.length === 3) {
	      ref1 = (function() {
	        var len, o, results;
	        results = [];
	        for (o = 0, len = colors.length; o < len; o++) {
	          c = colors[o];
	          results.push(c.lab());
	        }
	        return results;
	      })(), lab0 = ref1[0], lab1 = ref1[1], lab2 = ref1[2];
	      I = function(t) {
	        var i, lab;
	        lab = (function() {
	          var o, results;
	          results = [];
	          for (i = o = 0; o <= 2; i = ++o) {
	            results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
	          }
	          return results;
	        })();
	        return chroma.lab.apply(chroma, lab);
	      };
	    } else if (colors.length === 4) {
	      ref2 = (function() {
	        var len, o, results;
	        results = [];
	        for (o = 0, len = colors.length; o < len; o++) {
	          c = colors[o];
	          results.push(c.lab());
	        }
	        return results;
	      })(), lab0 = ref2[0], lab1 = ref2[1], lab2 = ref2[2], lab3 = ref2[3];
	      I = function(t) {
	        var i, lab;
	        lab = (function() {
	          var o, results;
	          results = [];
	          for (i = o = 0; o <= 2; i = ++o) {
	            results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
	          }
	          return results;
	        })();
	        return chroma.lab.apply(chroma, lab);
	      };
	    } else if (colors.length === 5) {
	      I0 = bezier(colors.slice(0, 3));
	      I1 = bezier(colors.slice(2, 5));
	      I = function(t) {
	        if (t < 0.5) {
	          return I0(t * 2);
	        } else {
	          return I1((t - 0.5) * 2);
	        }
	      };
	    }
	    return I;
	  };

	  chroma.bezier = function(colors) {
	    var f;
	    f = bezier(colors);
	    f.scale = function() {
	      return chroma.scale(f);
	    };
	    return f;
	  };


	  /*
	      chroma.js
	  
	      Copyright (c) 2011-2013, Gregor Aisch
	      All rights reserved.
	  
	      Redistribution and use in source and binary forms, with or without
	      modification, are permitted provided that the following conditions are met:
	  
	      * Redistributions of source code must retain the above copyright notice, this
	        list of conditions and the following disclaimer.
	  
	      * Redistributions in binary form must reproduce the above copyright notice,
	        this list of conditions and the following disclaimer in the documentation
	        and/or other materials provided with the distribution.
	  
	      * The name Gregor Aisch may not be used to endorse or promote products
	        derived from this software without specific prior written permission.
	  
	      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	  
	      @source: https://github.com/gka/chroma.js
	   */

	  chroma.cubehelix = function(start, rotations, hue, gamma, lightness) {
	    var dh, dl, f;
	    if (start == null) {
	      start = 300;
	    }
	    if (rotations == null) {
	      rotations = -1.5;
	    }
	    if (hue == null) {
	      hue = 1;
	    }
	    if (gamma == null) {
	      gamma = 1;
	    }
	    if (lightness == null) {
	      lightness = [0, 1];
	    }
	    dl = lightness[1] - lightness[0];
	    dh = 0;
	    f = function(fract) {
	      var a, amp, b, cos_a, g, h, l, r, sin_a;
	      a = TWOPI * ((start + 120) / 360 + rotations * fract);
	      l = pow(lightness[0] + dl * fract, gamma);
	      h = dh !== 0 ? hue[0] + fract * dh : hue;
	      amp = h * l * (1 - l) / 2;
	      cos_a = cos(a);
	      sin_a = sin(a);
	      r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
	      g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
	      b = l + amp * (+1.97294 * cos_a);
	      return chroma(clip_rgb([r * 255, g * 255, b * 255]));
	    };
	    f.start = function(s) {
	      if (s == null) {
	        return start;
	      }
	      start = s;
	      return f;
	    };
	    f.rotations = function(r) {
	      if (r == null) {
	        return rotations;
	      }
	      rotations = r;
	      return f;
	    };
	    f.gamma = function(g) {
	      if (g == null) {
	        return gamma;
	      }
	      gamma = g;
	      return f;
	    };
	    f.hue = function(h) {
	      if (h == null) {
	        return hue;
	      }
	      hue = h;
	      if (type(hue) === 'array') {
	        dh = hue[1] - hue[0];
	        if (dh === 0) {
	          hue = hue[1];
	        }
	      } else {
	        dh = 0;
	      }
	      return f;
	    };
	    f.lightness = function(h) {
	      if (h == null) {
	        return lightness;
	      }
	      lightness = h;
	      if (type(lightness) === 'array') {
	        dl = lightness[1] - lightness[0];
	        if (dl === 0) {
	          lightness = lightness[1];
	        }
	      } else {
	        dl = 0;
	      }
	      return f;
	    };
	    f.scale = function() {
	      return chroma.scale(f);
	    };
	    f.hue(hue);
	    return f;
	  };

	  chroma.random = function() {
	    var code, digits, i, o;
	    digits = '0123456789abcdef';
	    code = '#';
	    for (i = o = 0; o < 6; i = ++o) {
	      code += digits.charAt(floor(Math.random() * 16));
	    }
	    return new Color(code);
	  };

	  _input.rgb = function() {
	    var k, ref, results, v;
	    ref = unpack(arguments);
	    results = [];
	    for (k in ref) {
	      v = ref[k];
	      results.push(v);
	    }
	    return results;
	  };

	  chroma.rgb = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['rgb']), function(){});
	  };

	  Color.prototype.rgb = function() {
	    return this._rgb.slice(0, 3);
	  };

	  Color.prototype.rgba = function() {
	    return this._rgb;
	  };

	  _guess_formats.push({
	    p: 15,
	    test: function(n) {
	      var a;
	      a = unpack(arguments);
	      if (type(a) === 'array' && a.length === 3) {
	        return 'rgb';
	      }
	      if (a.length === 4 && type(a[3]) === "number" && a[3] >= 0 && a[3] <= 1) {
	        return 'rgb';
	      }
	    }
	  });

	  hex2rgb = function(hex) {
	    var a, b, g, r, rgb, u;
	    if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
	      if (hex.length === 4 || hex.length === 7) {
	        hex = hex.substr(1);
	      }
	      if (hex.length === 3) {
	        hex = hex.split("");
	        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	      }
	      u = parseInt(hex, 16);
	      r = u >> 16;
	      g = u >> 8 & 0xFF;
	      b = u & 0xFF;
	      return [r, g, b, 1];
	    }
	    if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
	      if (hex.length === 9) {
	        hex = hex.substr(1);
	      }
	      u = parseInt(hex, 16);
	      r = u >> 24 & 0xFF;
	      g = u >> 16 & 0xFF;
	      b = u >> 8 & 0xFF;
	      a = round((u & 0xFF) / 0xFF * 100) / 100;
	      return [r, g, b, a];
	    }
	    if ((_input.css != null) && (rgb = _input.css(hex))) {
	      return rgb;
	    }
	    throw "unknown color: " + hex;
	  };

	  rgb2hex = function(channels, mode) {
	    var a, b, g, hxa, r, str, u;
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    r = channels[0], g = channels[1], b = channels[2], a = channels[3];
	    u = r << 16 | g << 8 | b;
	    str = "000000" + u.toString(16);
	    str = str.substr(str.length - 6);
	    hxa = '0' + round(a * 255).toString(16);
	    hxa = hxa.substr(hxa.length - 2);
	    return "#" + (function() {
	      switch (mode.toLowerCase()) {
	        case 'rgba':
	          return str + hxa;
	        case 'argb':
	          return hxa + str;
	        default:
	          return str;
	      }
	    })();
	  };

	  _input.hex = function(h) {
	    return hex2rgb(h);
	  };

	  chroma.hex = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['hex']), function(){});
	  };

	  Color.prototype.hex = function(mode) {
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    return rgb2hex(this._rgb, mode);
	  };

	  _guess_formats.push({
	    p: 10,
	    test: function(n) {
	      if (arguments.length === 1 && type(n) === "string") {
	        return 'hex';
	      }
	    }
	  });

	  hsl2rgb = function() {
	    var args, b, c, g, h, i, l, o, r, ref, s, t1, t2, t3;
	    args = unpack(arguments);
	    h = args[0], s = args[1], l = args[2];
	    if (s === 0) {
	      r = g = b = l * 255;
	    } else {
	      t3 = [0, 0, 0];
	      c = [0, 0, 0];
	      t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
	      t1 = 2 * l - t2;
	      h /= 360;
	      t3[0] = h + 1 / 3;
	      t3[1] = h;
	      t3[2] = h - 1 / 3;
	      for (i = o = 0; o <= 2; i = ++o) {
	        if (t3[i] < 0) {
	          t3[i] += 1;
	        }
	        if (t3[i] > 1) {
	          t3[i] -= 1;
	        }
	        if (6 * t3[i] < 1) {
	          c[i] = t1 + (t2 - t1) * 6 * t3[i];
	        } else if (2 * t3[i] < 1) {
	          c[i] = t2;
	        } else if (3 * t3[i] < 2) {
	          c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
	        } else {
	          c[i] = t1;
	        }
	      }
	      ref = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)], r = ref[0], g = ref[1], b = ref[2];
	    }
	    if (args.length > 3) {
	      return [r, g, b, args[3]];
	    } else {
	      return [r, g, b];
	    }
	  };

	  rgb2hsl = function(r, g, b) {
	    var h, l, min, ref, s;
	    if (r !== void 0 && r.length >= 3) {
	      ref = r, r = ref[0], g = ref[1], b = ref[2];
	    }
	    r /= 255;
	    g /= 255;
	    b /= 255;
	    min = Math.min(r, g, b);
	    max = Math.max(r, g, b);
	    l = (max + min) / 2;
	    if (max === min) {
	      s = 0;
	      h = Number.NaN;
	    } else {
	      s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
	    }
	    if (r === max) {
	      h = (g - b) / (max - min);
	    } else if (g === max) {
	      h = 2 + (b - r) / (max - min);
	    } else if (b === max) {
	      h = 4 + (r - g) / (max - min);
	    }
	    h *= 60;
	    if (h < 0) {
	      h += 360;
	    }
	    return [h, s, l];
	  };

	  chroma.hsl = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['hsl']), function(){});
	  };

	  _input.hsl = hsl2rgb;

	  Color.prototype.hsl = function() {
	    return rgb2hsl(this._rgb);
	  };

	  hsv2rgb = function() {
	    var args, b, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, s, t, v;
	    args = unpack(arguments);
	    h = args[0], s = args[1], v = args[2];
	    v *= 255;
	    if (s === 0) {
	      r = g = b = v;
	    } else {
	      if (h === 360) {
	        h = 0;
	      }
	      if (h > 360) {
	        h -= 360;
	      }
	      if (h < 0) {
	        h += 360;
	      }
	      h /= 60;
	      i = floor(h);
	      f = h - i;
	      p = v * (1 - s);
	      q = v * (1 - s * f);
	      t = v * (1 - s * (1 - f));
	      switch (i) {
	        case 0:
	          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
	          break;
	        case 1:
	          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
	          break;
	        case 2:
	          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
	          break;
	        case 3:
	          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
	          break;
	        case 4:
	          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
	          break;
	        case 5:
	          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
	      }
	    }
	    r = round(r);
	    g = round(g);
	    b = round(b);
	    return [r, g, b, args.length > 3 ? args[3] : 1];
	  };

	  rgb2hsv = function() {
	    var b, delta, g, h, min, r, ref, s, v;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    min = Math.min(r, g, b);
	    max = Math.max(r, g, b);
	    delta = max - min;
	    v = max / 255.0;
	    if (max === 0) {
	      h = Number.NaN;
	      s = 0;
	    } else {
	      s = delta / max;
	      if (r === max) {
	        h = (g - b) / delta;
	      }
	      if (g === max) {
	        h = 2 + (b - r) / delta;
	      }
	      if (b === max) {
	        h = 4 + (r - g) / delta;
	      }
	      h *= 60;
	      if (h < 0) {
	        h += 360;
	      }
	    }
	    return [h, s, v];
	  };

	  chroma.hsv = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['hsv']), function(){});
	  };

	  _input.hsv = hsv2rgb;

	  Color.prototype.hsv = function() {
	    return rgb2hsv(this._rgb);
	  };

	  num2rgb = function(num) {
	    var b, g, r;
	    if (type(num) === "number" && num >= 0 && num <= 0xFFFFFF) {
	      r = num >> 16;
	      g = (num >> 8) & 0xFF;
	      b = num & 0xFF;
	      return [r, g, b, 1];
	    }
	    console.warn("unknown num color: " + num);
	    return [0, 0, 0, 1];
	  };

	  rgb2num = function() {
	    var b, g, r, ref;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    return (r << 16) + (g << 8) + b;
	  };

	  chroma.num = function(num) {
	    return new Color(num, 'num');
	  };

	  Color.prototype.num = function(mode) {
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    return rgb2num(this._rgb, mode);
	  };

	  _input.num = num2rgb;

	  _guess_formats.push({
	    p: 10,
	    test: function(n) {
	      if (arguments.length === 1 && type(n) === "number" && n >= 0 && n <= 0xFFFFFF) {
	        return 'num';
	      }
	    }
	  });

	  css2rgb = function(css) {
	    var aa, ab, hsl, i, m, o, rgb, w;
	    css = css.toLowerCase();
	    if ((chroma.colors != null) && chroma.colors[css]) {
	      return hex2rgb(chroma.colors[css]);
	    }
	    if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
	      rgb = m.slice(1, 4);
	      for (i = o = 0; o <= 2; i = ++o) {
	        rgb[i] = +rgb[i];
	      }
	      rgb[3] = 1;
	    } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
	      rgb = m.slice(1, 5);
	      for (i = w = 0; w <= 3; i = ++w) {
	        rgb[i] = +rgb[i];
	      }
	    } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
	      rgb = m.slice(1, 4);
	      for (i = aa = 0; aa <= 2; i = ++aa) {
	        rgb[i] = round(rgb[i] * 2.55);
	      }
	      rgb[3] = 1;
	    } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
	      rgb = m.slice(1, 5);
	      for (i = ab = 0; ab <= 2; i = ++ab) {
	        rgb[i] = round(rgb[i] * 2.55);
	      }
	      rgb[3] = +rgb[3];
	    } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
	      hsl = m.slice(1, 4);
	      hsl[1] *= 0.01;
	      hsl[2] *= 0.01;
	      rgb = hsl2rgb(hsl);
	      rgb[3] = 1;
	    } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
	      hsl = m.slice(1, 4);
	      hsl[1] *= 0.01;
	      hsl[2] *= 0.01;
	      rgb = hsl2rgb(hsl);
	      rgb[3] = +m[4];
	    }
	    return rgb;
	  };

	  rgb2css = function(rgba) {
	    var mode;
	    mode = rgba[3] < 1 ? 'rgba' : 'rgb';
	    if (mode === 'rgb') {
	      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ')';
	    } else if (mode === 'rgba') {
	      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ',' + rgba[3] + ')';
	    } else {

	    }
	  };

	  rnd = function(a) {
	    return round(a * 100) / 100;
	  };

	  hsl2css = function(hsl, alpha) {
	    var mode;
	    mode = alpha < 1 ? 'hsla' : 'hsl';
	    hsl[0] = rnd(hsl[0] || 0);
	    hsl[1] = rnd(hsl[1] * 100) + '%';
	    hsl[2] = rnd(hsl[2] * 100) + '%';
	    if (mode === 'hsla') {
	      hsl[3] = alpha;
	    }
	    return mode + '(' + hsl.join(',') + ')';
	  };

	  _input.css = function(h) {
	    return css2rgb(h);
	  };

	  chroma.css = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['css']), function(){});
	  };

	  Color.prototype.css = function(mode) {
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    if (mode.slice(0, 3) === 'rgb') {
	      return rgb2css(this._rgb);
	    } else if (mode.slice(0, 3) === 'hsl') {
	      return hsl2css(this.hsl(), this.alpha());
	    }
	  };

	  _input.named = function(name) {
	    return hex2rgb(w3cx11[name]);
	  };

	  _guess_formats.push({
	    p: 20,
	    test: function(n) {
	      if (arguments.length === 1 && (w3cx11[n] != null)) {
	        return 'named';
	      }
	    }
	  });

	  Color.prototype.name = function(n) {
	    var h, k;
	    if (arguments.length) {
	      if (w3cx11[n]) {
	        this._rgb = hex2rgb(w3cx11[n]);
	      }
	      this._rgb[3] = 1;
	      this;
	    }
	    h = this.hex();
	    for (k in w3cx11) {
	      if (h === w3cx11[k]) {
	        return k;
	      }
	    }
	    return h;
	  };

	  lch2lab = function() {

	    /*
	    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
	    These formulas were invented by David Dalrymple to obtain maximum contrast without going
	    out of gamut if the parameters are in the range 0-1.
	    
	    A saturation multiplier was added by Gregor Aisch
	     */
	    var c, h, l, ref;
	    ref = unpack(arguments), l = ref[0], c = ref[1], h = ref[2];
	    h = h * DEG2RAD;
	    return [l, cos(h) * c, sin(h) * c];
	  };

	  lch2rgb = function() {
	    var L, a, args, b, c, g, h, l, r, ref, ref1;
	    args = unpack(arguments);
	    l = args[0], c = args[1], h = args[2];
	    ref = lch2lab(l, c, h), L = ref[0], a = ref[1], b = ref[2];
	    ref1 = lab2rgb(L, a, b), r = ref1[0], g = ref1[1], b = ref1[2];
	    return [limit(r, 0, 255), limit(g, 0, 255), limit(b, 0, 255), args.length > 3 ? args[3] : 1];
	  };

	  lab2lch = function() {
	    var a, b, c, h, l, ref;
	    ref = unpack(arguments), l = ref[0], a = ref[1], b = ref[2];
	    c = sqrt(a * a + b * b);
	    h = (atan2(b, a) * RAD2DEG + 360) % 360;
	    if (round(c * 10000) === 0) {
	      h = Number.NaN;
	    }
	    return [l, c, h];
	  };

	  rgb2lch = function() {
	    var a, b, g, l, r, ref, ref1;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    ref1 = rgb2lab(r, g, b), l = ref1[0], a = ref1[1], b = ref1[2];
	    return lab2lch(l, a, b);
	  };

	  chroma.lch = function() {
	    var args;
	    args = unpack(arguments);
	    return new Color(args, 'lch');
	  };

	  chroma.hcl = function() {
	    var args;
	    args = unpack(arguments);
	    return new Color(args, 'hcl');
	  };

	  _input.lch = lch2rgb;

	  _input.hcl = function() {
	    var c, h, l, ref;
	    ref = unpack(arguments), h = ref[0], c = ref[1], l = ref[2];
	    return lch2rgb([l, c, h]);
	  };

	  Color.prototype.lch = function() {
	    return rgb2lch(this._rgb);
	  };

	  Color.prototype.hcl = function() {
	    return rgb2lch(this._rgb).reverse();
	  };

	  rgb2cmyk = function(mode) {
	    var b, c, f, g, k, m, r, ref, y;
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    r = r / 255;
	    g = g / 255;
	    b = b / 255;
	    k = 1 - Math.max(r, Math.max(g, b));
	    f = k < 1 ? 1 / (1 - k) : 0;
	    c = (1 - r - k) * f;
	    m = (1 - g - k) * f;
	    y = (1 - b - k) * f;
	    return [c, m, y, k];
	  };

	  cmyk2rgb = function() {
	    var alpha, args, b, c, g, k, m, r, y;
	    args = unpack(arguments);
	    c = args[0], m = args[1], y = args[2], k = args[3];
	    alpha = args.length > 4 ? args[4] : 1;
	    if (k === 1) {
	      return [0, 0, 0, alpha];
	    }
	    r = c >= 1 ? 0 : round(255 * (1 - c) * (1 - k));
	    g = m >= 1 ? 0 : round(255 * (1 - m) * (1 - k));
	    b = y >= 1 ? 0 : round(255 * (1 - y) * (1 - k));
	    return [r, g, b, alpha];
	  };

	  _input.cmyk = function() {
	    return cmyk2rgb(unpack(arguments));
	  };

	  chroma.cmyk = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['cmyk']), function(){});
	  };

	  Color.prototype.cmyk = function() {
	    return rgb2cmyk(this._rgb);
	  };

	  _input.gl = function() {
	    var i, k, o, rgb, v;
	    rgb = (function() {
	      var ref, results;
	      ref = unpack(arguments);
	      results = [];
	      for (k in ref) {
	        v = ref[k];
	        results.push(v);
	      }
	      return results;
	    }).apply(this, arguments);
	    for (i = o = 0; o <= 2; i = ++o) {
	      rgb[i] *= 255;
	    }
	    return rgb;
	  };

	  chroma.gl = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['gl']), function(){});
	  };

	  Color.prototype.gl = function() {
	    var rgb;
	    rgb = this._rgb;
	    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
	  };

	  rgb2luminance = function(r, g, b) {
	    var ref;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    r = luminance_x(r);
	    g = luminance_x(g);
	    b = luminance_x(b);
	    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
	  };

	  luminance_x = function(x) {
	    x /= 255;
	    if (x <= 0.03928) {
	      return x / 12.92;
	    } else {
	      return pow((x + 0.055) / 1.055, 2.4);
	    }
	  };

	  _interpolators = [];

	  interpolate = function(col1, col2, f, m) {
	    var interpol, len, o, res;
	    if (f == null) {
	      f = 0.5;
	    }
	    if (m == null) {
	      m = 'rgb';
	    }

	    /*
	    interpolates between colors
	    f = 0 --> me
	    f = 1 --> col
	     */
	    if (type(col1) !== 'object') {
	      col1 = chroma(col1);
	    }
	    if (type(col2) !== 'object') {
	      col2 = chroma(col2);
	    }
	    for (o = 0, len = _interpolators.length; o < len; o++) {
	      interpol = _interpolators[o];
	      if (m === interpol[0]) {
	        res = interpol[1](col1, col2, f, m);
	        break;
	      }
	    }
	    if (res == null) {
	      throw "color mode " + m + " is not supported";
	    }
	    res.alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
	    return res;
	  };

	  chroma.interpolate = interpolate;

	  Color.prototype.interpolate = function(col2, f, m) {
	    return interpolate(this, col2, f, m);
	  };

	  chroma.mix = interpolate;

	  Color.prototype.mix = Color.prototype.interpolate;

	  interpolate_rgb = function(col1, col2, f, m) {
	    var xyz0, xyz1;
	    xyz0 = col1._rgb;
	    xyz1 = col2._rgb;
	    return new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
	  };

	  _interpolators.push(['rgb', interpolate_rgb]);

	  Color.prototype.luminance = function(lum, mode) {
	    var cur_lum, eps, max_iter, test;
	    if (mode == null) {
	      mode = 'rgb';
	    }
	    if (!arguments.length) {
	      return rgb2luminance(this._rgb);
	    }
	    if (lum === 0) {
	      this._rgb = [0, 0, 0, this._rgb[3]];
	    } else if (lum === 1) {
	      this._rgb = [255, 255, 255, this._rgb[3]];
	    } else {
	      eps = 1e-7;
	      max_iter = 20;
	      test = function(l, h) {
	        var lm, m;
	        m = l.interpolate(h, 0.5, mode);
	        lm = m.luminance();
	        if (Math.abs(lum - lm) < eps || !max_iter--) {
	          return m;
	        }
	        if (lm > lum) {
	          return test(l, m);
	        }
	        return test(m, h);
	      };
	      cur_lum = rgb2luminance(this._rgb);
	      this._rgb = (cur_lum > lum ? test(chroma('black'), this) : test(this, chroma('white'))).rgba();
	    }
	    return this;
	  };

	  temperature2rgb = function(kelvin) {
	    var b, g, r, temp;
	    temp = kelvin / 100;
	    if (temp < 66) {
	      r = 255;
	      g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
	      b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
	    } else {
	      r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
	      g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
	      b = 255;
	    }
	    return clip_rgb([r, g, b]);
	  };

	  rgb2temperature = function() {
	    var b, eps, g, maxTemp, minTemp, r, ref, rgb, temp;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    minTemp = 1000;
	    maxTemp = 40000;
	    eps = 0.4;
	    while (maxTemp - minTemp > eps) {
	      temp = (maxTemp + minTemp) * 0.5;
	      rgb = temperature2rgb(temp);
	      if ((rgb[2] / rgb[0]) >= (b / r)) {
	        maxTemp = temp;
	      } else {
	        minTemp = temp;
	      }
	    }
	    return round(temp);
	  };

	  chroma.temperature = chroma.kelvin = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['temperature']), function(){});
	  };

	  _input.temperature = _input.kelvin = _input.K = temperature2rgb;

	  Color.prototype.temperature = function() {
	    return rgb2temperature(this._rgb);
	  };

	  Color.prototype.kelvin = Color.prototype.temperature;

	  chroma.contrast = function(a, b) {
	    var l1, l2, ref, ref1;
	    if ((ref = type(a)) === 'string' || ref === 'number') {
	      a = new Color(a);
	    }
	    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
	      b = new Color(b);
	    }
	    l1 = a.luminance();
	    l2 = b.luminance();
	    if (l1 > l2) {
	      return (l1 + 0.05) / (l2 + 0.05);
	    } else {
	      return (l2 + 0.05) / (l1 + 0.05);
	    }
	  };

	  Color.prototype.get = function(modechan) {
	    var channel, i, me, mode, ref, src;
	    me = this;
	    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
	    src = me[mode]();
	    if (channel) {
	      i = mode.indexOf(channel);
	      if (i > -1) {
	        return src[i];
	      } else {
	        return console.warn('unknown channel ' + channel + ' in mode ' + mode);
	      }
	    } else {
	      return src;
	    }
	  };

	  Color.prototype.set = function(modechan, value) {
	    var channel, i, me, mode, ref, src;
	    me = this;
	    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
	    if (channel) {
	      src = me[mode]();
	      i = mode.indexOf(channel);
	      if (i > -1) {
	        if (type(value) === 'string') {
	          switch (value.charAt(0)) {
	            case '+':
	              src[i] += +value;
	              break;
	            case '-':
	              src[i] += +value;
	              break;
	            case '*':
	              src[i] *= +(value.substr(1));
	              break;
	            case '/':
	              src[i] /= +(value.substr(1));
	              break;
	            default:
	              src[i] = +value;
	          }
	        } else {
	          src[i] = value;
	        }
	      } else {
	        console.warn('unknown channel ' + channel + ' in mode ' + mode);
	      }
	    } else {
	      src = value;
	    }
	    me._rgb = chroma(src, mode).alpha(me.alpha())._rgb;
	    return me;
	  };

	  Color.prototype.darken = function(amount) {
	    var lab, me;
	    if (amount == null) {
	      amount = 1;
	    }
	    me = this;
	    lab = me.lab();
	    lab[0] -= LAB_CONSTANTS.Kn * amount;
	    return chroma.lab(lab).alpha(me.alpha());
	  };

	  Color.prototype.brighten = function(amount) {
	    if (amount == null) {
	      amount = 1;
	    }
	    return this.darken(-amount);
	  };

	  Color.prototype.darker = Color.prototype.darken;

	  Color.prototype.brighter = Color.prototype.brighten;

	  Color.prototype.saturate = function(amount) {
	    var lch, me;
	    if (amount == null) {
	      amount = 1;
	    }
	    me = this;
	    lch = me.lch();
	    lch[1] += amount * LAB_CONSTANTS.Kn;
	    if (lch[1] < 0) {
	      lch[1] = 0;
	    }
	    return chroma.lch(lch).alpha(me.alpha());
	  };

	  Color.prototype.desaturate = function(amount) {
	    if (amount == null) {
	      amount = 1;
	    }
	    return this.saturate(-amount);
	  };

	  Color.prototype.premultiply = function() {
	    var a, rgb;
	    rgb = this.rgb();
	    a = this.alpha();
	    return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
	  };

	  blend = function(bottom, top, mode) {
	    if (!blend[mode]) {
	      throw 'unknown blend mode ' + mode;
	    }
	    return blend[mode](bottom, top);
	  };

	  blend_f = function(f) {
	    return function(bottom, top) {
	      var c0, c1;
	      c0 = chroma(top).rgb();
	      c1 = chroma(bottom).rgb();
	      return chroma(f(c0, c1), 'rgb');
	    };
	  };

	  each = function(f) {
	    return function(c0, c1) {
	      var i, o, out;
	      out = [];
	      for (i = o = 0; o <= 3; i = ++o) {
	        out[i] = f(c0[i], c1[i]);
	      }
	      return out;
	    };
	  };

	  normal = function(a, b) {
	    return a;
	  };

	  multiply = function(a, b) {
	    return a * b / 255;
	  };

	  darken = function(a, b) {
	    if (a > b) {
	      return b;
	    } else {
	      return a;
	    }
	  };

	  lighten = function(a, b) {
	    if (a > b) {
	      return a;
	    } else {
	      return b;
	    }
	  };

	  screen = function(a, b) {
	    return 255 * (1 - (1 - a / 255) * (1 - b / 255));
	  };

	  overlay = function(a, b) {
	    if (b < 128) {
	      return 2 * a * b / 255;
	    } else {
	      return 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
	    }
	  };

	  burn = function(a, b) {
	    return 255 * (1 - (1 - b / 255) / (a / 255));
	  };

	  dodge = function(a, b) {
	    if (a === 255) {
	      return 255;
	    }
	    a = 255 * (b / 255) / (1 - a / 255);
	    if (a > 255) {
	      return 255;
	    } else {
	      return a;
	    }
	  };

	  blend.normal = blend_f(each(normal));

	  blend.multiply = blend_f(each(multiply));

	  blend.screen = blend_f(each(screen));

	  blend.overlay = blend_f(each(overlay));

	  blend.darken = blend_f(each(darken));

	  blend.lighten = blend_f(each(lighten));

	  blend.dodge = blend_f(each(dodge));

	  blend.burn = blend_f(each(burn));

	  chroma.blend = blend;

	  chroma.analyze = function(data) {
	    var len, o, r, val;
	    r = {
	      min: Number.MAX_VALUE,
	      max: Number.MAX_VALUE * -1,
	      sum: 0,
	      values: [],
	      count: 0
	    };
	    for (o = 0, len = data.length; o < len; o++) {
	      val = data[o];
	      if ((val != null) && !isNaN(val)) {
	        r.values.push(val);
	        r.sum += val;
	        if (val < r.min) {
	          r.min = val;
	        }
	        if (val > r.max) {
	          r.max = val;
	        }
	        r.count += 1;
	      }
	    }
	    r.domain = [r.min, r.max];
	    r.limits = function(mode, num) {
	      return chroma.limits(r, mode, num);
	    };
	    return r;
	  };

	  chroma.scale = function(colors, positions) {
	    var _classes, _colorCache, _colors, _correctLightness, _domain, _fixed, _max, _min, _mode, _nacol, _out, _padding, _pos, _spread, classifyValue, f, getClass, getColor, resetCache, setColors, tmap;
	    _mode = 'rgb';
	    _nacol = chroma('#ccc');
	    _spread = 0;
	    _fixed = false;
	    _domain = [0, 1];
	    _pos = [];
	    _padding = [0, 0];
	    _classes = false;
	    _colors = [];
	    _out = false;
	    _min = 0;
	    _max = 1;
	    _correctLightness = false;
	    _colorCache = {};
	    setColors = function(colors) {
	      var c, col, o, ref, ref1, ref2, w;
	      if (colors == null) {
	        colors = ['#fff', '#000'];
	      }
	      if ((colors != null) && type(colors) === 'string' && (((ref = chroma.brewer) != null ? ref[colors] : void 0) != null)) {
	        colors = chroma.brewer[colors];
	      }
	      if (type(colors) === 'array') {
	        colors = colors.slice(0);
	        for (c = o = 0, ref1 = colors.length - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; c = 0 <= ref1 ? ++o : --o) {
	          col = colors[c];
	          if (type(col) === "string") {
	            colors[c] = chroma(col);
	          }
	        }
	        _pos.length = 0;
	        for (c = w = 0, ref2 = colors.length - 1; 0 <= ref2 ? w <= ref2 : w >= ref2; c = 0 <= ref2 ? ++w : --w) {
	          _pos.push(c / (colors.length - 1));
	        }
	      }
	      resetCache();
	      return _colors = colors;
	    };
	    getClass = function(value) {
	      var i, n;
	      if (_classes != null) {
	        n = _classes.length - 1;
	        i = 0;
	        while (i < n && value >= _classes[i]) {
	          i++;
	        }
	        return i - 1;
	      }
	      return 0;
	    };
	    tmap = function(t) {
	      return t;
	    };
	    classifyValue = function(value) {
	      var i, maxc, minc, n, val;
	      val = value;
	      if (_classes.length > 2) {
	        n = _classes.length - 1;
	        i = getClass(value);
	        minc = _classes[0] + (_classes[1] - _classes[0]) * (0 + _spread * 0.5);
	        maxc = _classes[n - 1] + (_classes[n] - _classes[n - 1]) * (1 - _spread * 0.5);
	        val = _min + ((_classes[i] + (_classes[i + 1] - _classes[i]) * 0.5 - minc) / (maxc - minc)) * (_max - _min);
	      }
	      return val;
	    };
	    getColor = function(val, bypassMap) {
	      var c, col, i, k, o, p, ref, t;
	      if (bypassMap == null) {
	        bypassMap = false;
	      }
	      if (isNaN(val)) {
	        return _nacol;
	      }
	      if (!bypassMap) {
	        if (_classes && _classes.length > 2) {
	          c = getClass(val);
	          t = c / (_classes.length - 2);
	          t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));
	        } else if (_max !== _min) {
	          t = (val - _min) / (_max - _min);
	          t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));
	          t = Math.min(1, Math.max(0, t));
	        } else {
	          t = 1;
	        }
	      } else {
	        t = val;
	      }
	      if (!bypassMap) {
	        t = tmap(t);
	      }
	      k = Math.floor(t * 10000);
	      if (_colorCache[k]) {
	        col = _colorCache[k];
	      } else {
	        if (type(_colors) === 'array') {
	          for (i = o = 0, ref = _pos.length - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
	            p = _pos[i];
	            if (t <= p) {
	              col = _colors[i];
	              break;
	            }
	            if (t >= p && i === _pos.length - 1) {
	              col = _colors[i];
	              break;
	            }
	            if (t > p && t < _pos[i + 1]) {
	              t = (t - p) / (_pos[i + 1] - p);
	              col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
	              break;
	            }
	          }
	        } else if (type(_colors) === 'function') {
	          col = _colors(t);
	        }
	        _colorCache[k] = col;
	      }
	      return col;
	    };
	    resetCache = function() {
	      return _colorCache = {};
	    };
	    setColors(colors);
	    f = function(v) {
	      var c;
	      c = chroma(getColor(v));
	      if (_out && c[_out]) {
	        return c[_out]();
	      } else {
	        return c;
	      }
	    };
	    f.classes = function(classes) {
	      var d;
	      if (classes != null) {
	        if (type(classes) === 'array') {
	          _classes = classes;
	          _domain = [classes[0], classes[classes.length - 1]];
	        } else {
	          d = chroma.analyze(_domain);
	          if (classes === 0) {
	            _classes = [d.min, d.max];
	          } else {
	            _classes = chroma.limits(d, 'e', classes);
	          }
	        }
	        return f;
	      }
	      return _classes;
	    };
	    f.domain = function(domain) {
	      var c, d, k, len, o, ref, w;
	      if (!arguments.length) {
	        return _domain;
	      }
	      _min = domain[0];
	      _max = domain[domain.length - 1];
	      _pos = [];
	      k = _colors.length;
	      if (domain.length === k && _min !== _max) {
	        for (o = 0, len = domain.length; o < len; o++) {
	          d = domain[o];
	          _pos.push((d - _min) / (_max - _min));
	        }
	      } else {
	        for (c = w = 0, ref = k - 1; 0 <= ref ? w <= ref : w >= ref; c = 0 <= ref ? ++w : --w) {
	          _pos.push(c / (k - 1));
	        }
	      }
	      _domain = [_min, _max];
	      return f;
	    };
	    f.mode = function(_m) {
	      if (!arguments.length) {
	        return _mode;
	      }
	      _mode = _m;
	      resetCache();
	      return f;
	    };
	    f.range = function(colors, _pos) {
	      setColors(colors, _pos);
	      return f;
	    };
	    f.out = function(_o) {
	      _out = _o;
	      return f;
	    };
	    f.spread = function(val) {
	      if (!arguments.length) {
	        return _spread;
	      }
	      _spread = val;
	      return f;
	    };
	    f.correctLightness = function(v) {
	      if (v == null) {
	        v = true;
	      }
	      _correctLightness = v;
	      resetCache();
	      if (_correctLightness) {
	        tmap = function(t) {
	          var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;
	          L0 = getColor(0, true).lab()[0];
	          L1 = getColor(1, true).lab()[0];
	          pol = L0 > L1;
	          L_actual = getColor(t, true).lab()[0];
	          L_ideal = L0 + (L1 - L0) * t;
	          L_diff = L_actual - L_ideal;
	          t0 = 0;
	          t1 = 1;
	          max_iter = 20;
	          while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
	            (function() {
	              if (pol) {
	                L_diff *= -1;
	              }
	              if (L_diff < 0) {
	                t0 = t;
	                t += (t1 - t) * 0.5;
	              } else {
	                t1 = t;
	                t += (t0 - t) * 0.5;
	              }
	              L_actual = getColor(t, true).lab()[0];
	              return L_diff = L_actual - L_ideal;
	            })();
	          }
	          return t;
	        };
	      } else {
	        tmap = function(t) {
	          return t;
	        };
	      }
	      return f;
	    };
	    f.padding = function(p) {
	      if (p != null) {
	        if (type(p) === 'number') {
	          p = [p, p];
	        }
	        _padding = p;
	        return f;
	      } else {
	        return _padding;
	      }
	    };
	    f.colors = function() {
	      var dd, dm, i, numColors, o, out, ref, results, samples, w;
	      numColors = 0;
	      out = 'hex';
	      if (arguments.length === 1) {
	        if (type(arguments[0]) === 'string') {
	          out = arguments[0];
	        } else {
	          numColors = arguments[0];
	        }
	      }
	      if (arguments.length === 2) {
	        numColors = arguments[0], out = arguments[1];
	      }
	      if (numColors) {
	        dm = _domain[0];
	        dd = _domain[1] - dm;
	        return (function() {
	          results = [];
	          for (var o = 0; 0 <= numColors ? o < numColors : o > numColors; 0 <= numColors ? o++ : o--){ results.push(o); }
	          return results;
	        }).apply(this).map(function(i) {
	          return f(dm + i / (numColors - 1) * dd)[out]();
	        });
	      }
	      colors = [];
	      samples = [];
	      if (_classes && _classes.length > 2) {
	        for (i = w = 1, ref = _classes.length; 1 <= ref ? w < ref : w > ref; i = 1 <= ref ? ++w : --w) {
	          samples.push((_classes[i - 1] + _classes[i]) * 0.5);
	        }
	      } else {
	        samples = _domain;
	      }
	      return samples.map(function(v) {
	        return f(v)[out]();
	      });
	    };
	    return f;
	  };

	  if (chroma.scales == null) {
	    chroma.scales = {};
	  }

	  chroma.scales.cool = function() {
	    return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
	  };

	  chroma.scales.hot = function() {
	    return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
	  };

	  chroma.analyze = function(data, key, filter) {
	    var add, k, len, o, r, val, visit;
	    r = {
	      min: Number.MAX_VALUE,
	      max: Number.MAX_VALUE * -1,
	      sum: 0,
	      values: [],
	      count: 0
	    };
	    if (filter == null) {
	      filter = function() {
	        return true;
	      };
	    }
	    add = function(val) {
	      if ((val != null) && !isNaN(val)) {
	        r.values.push(val);
	        r.sum += val;
	        if (val < r.min) {
	          r.min = val;
	        }
	        if (val > r.max) {
	          r.max = val;
	        }
	        r.count += 1;
	      }
	    };
	    visit = function(val, k) {
	      if (filter(val, k)) {
	        if ((key != null) && type(key) === 'function') {
	          return add(key(val));
	        } else if ((key != null) && type(key) === 'string' || type(key) === 'number') {
	          return add(val[key]);
	        } else {
	          return add(val);
	        }
	      }
	    };
	    if (type(data) === 'array') {
	      for (o = 0, len = data.length; o < len; o++) {
	        val = data[o];
	        visit(val);
	      }
	    } else {
	      for (k in data) {
	        val = data[k];
	        visit(val, k);
	      }
	    }
	    r.domain = [r.min, r.max];
	    r.limits = function(mode, num) {
	      return chroma.limits(r, mode, num);
	    };
	    return r;
	  };

	  chroma.limits = function(data, mode, num) {
	    var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max_log, min, min_log, mindist, n, nb_iters, newCentroids, o, p, pb, pr, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, repeat, sum, tmpKMeansBreaks, value, values, w;
	    if (mode == null) {
	      mode = 'equal';
	    }
	    if (num == null) {
	      num = 7;
	    }
	    if (type(data) === 'array') {
	      data = chroma.analyze(data);
	    }
	    min = data.min;
	    max = data.max;
	    sum = data.sum;
	    values = data.values.sort(function(a, b) {
	      return a - b;
	    });
	    limits = [];
	    if (mode.substr(0, 1) === 'c') {
	      limits.push(min);
	      limits.push(max);
	    }
	    if (mode.substr(0, 1) === 'e') {
	      limits.push(min);
	      for (i = o = 1, ref = num - 1; 1 <= ref ? o <= ref : o >= ref; i = 1 <= ref ? ++o : --o) {
	        limits.push(min + (i / num) * (max - min));
	      }
	      limits.push(max);
	    } else if (mode.substr(0, 1) === 'l') {
	      if (min <= 0) {
	        throw 'Logarithmic scales are only possible for values > 0';
	      }
	      min_log = Math.LOG10E * log(min);
	      max_log = Math.LOG10E * log(max);
	      limits.push(min);
	      for (i = w = 1, ref1 = num - 1; 1 <= ref1 ? w <= ref1 : w >= ref1; i = 1 <= ref1 ? ++w : --w) {
	        limits.push(pow(10, min_log + (i / num) * (max_log - min_log)));
	      }
	      limits.push(max);
	    } else if (mode.substr(0, 1) === 'q') {
	      limits.push(min);
	      for (i = aa = 1, ref2 = num - 1; 1 <= ref2 ? aa <= ref2 : aa >= ref2; i = 1 <= ref2 ? ++aa : --aa) {
	        p = values.length * i / num;
	        pb = floor(p);
	        if (pb === p) {
	          limits.push(values[pb]);
	        } else {
	          pr = p - pb;
	          limits.push(values[pb] * pr + values[pb + 1] * (1 - pr));
	        }
	      }
	      limits.push(max);
	    } else if (mode.substr(0, 1) === 'k') {

	      /*
	      implementation based on
	      http://code.google.com/p/figue/source/browse/trunk/figue.js#336
	      simplified for 1-d input values
	       */
	      n = values.length;
	      assignments = new Array(n);
	      clusterSizes = new Array(num);
	      repeat = true;
	      nb_iters = 0;
	      centroids = null;
	      centroids = [];
	      centroids.push(min);
	      for (i = ab = 1, ref3 = num - 1; 1 <= ref3 ? ab <= ref3 : ab >= ref3; i = 1 <= ref3 ? ++ab : --ab) {
	        centroids.push(min + (i / num) * (max - min));
	      }
	      centroids.push(max);
	      while (repeat) {
	        for (j = ac = 0, ref4 = num - 1; 0 <= ref4 ? ac <= ref4 : ac >= ref4; j = 0 <= ref4 ? ++ac : --ac) {
	          clusterSizes[j] = 0;
	        }
	        for (i = ad = 0, ref5 = n - 1; 0 <= ref5 ? ad <= ref5 : ad >= ref5; i = 0 <= ref5 ? ++ad : --ad) {
	          value = values[i];
	          mindist = Number.MAX_VALUE;
	          for (j = ae = 0, ref6 = num - 1; 0 <= ref6 ? ae <= ref6 : ae >= ref6; j = 0 <= ref6 ? ++ae : --ae) {
	            dist = abs(centroids[j] - value);
	            if (dist < mindist) {
	              mindist = dist;
	              best = j;
	            }
	          }
	          clusterSizes[best]++;
	          assignments[i] = best;
	        }
	        newCentroids = new Array(num);
	        for (j = af = 0, ref7 = num - 1; 0 <= ref7 ? af <= ref7 : af >= ref7; j = 0 <= ref7 ? ++af : --af) {
	          newCentroids[j] = null;
	        }
	        for (i = ag = 0, ref8 = n - 1; 0 <= ref8 ? ag <= ref8 : ag >= ref8; i = 0 <= ref8 ? ++ag : --ag) {
	          cluster = assignments[i];
	          if (newCentroids[cluster] === null) {
	            newCentroids[cluster] = values[i];
	          } else {
	            newCentroids[cluster] += values[i];
	          }
	        }
	        for (j = ah = 0, ref9 = num - 1; 0 <= ref9 ? ah <= ref9 : ah >= ref9; j = 0 <= ref9 ? ++ah : --ah) {
	          newCentroids[j] *= 1 / clusterSizes[j];
	        }
	        repeat = false;
	        for (j = ai = 0, ref10 = num - 1; 0 <= ref10 ? ai <= ref10 : ai >= ref10; j = 0 <= ref10 ? ++ai : --ai) {
	          if (newCentroids[j] !== centroids[i]) {
	            repeat = true;
	            break;
	          }
	        }
	        centroids = newCentroids;
	        nb_iters++;
	        if (nb_iters > 200) {
	          repeat = false;
	        }
	      }
	      kClusters = {};
	      for (j = aj = 0, ref11 = num - 1; 0 <= ref11 ? aj <= ref11 : aj >= ref11; j = 0 <= ref11 ? ++aj : --aj) {
	        kClusters[j] = [];
	      }
	      for (i = ak = 0, ref12 = n - 1; 0 <= ref12 ? ak <= ref12 : ak >= ref12; i = 0 <= ref12 ? ++ak : --ak) {
	        cluster = assignments[i];
	        kClusters[cluster].push(values[i]);
	      }
	      tmpKMeansBreaks = [];
	      for (j = al = 0, ref13 = num - 1; 0 <= ref13 ? al <= ref13 : al >= ref13; j = 0 <= ref13 ? ++al : --al) {
	        tmpKMeansBreaks.push(kClusters[j][0]);
	        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
	      }
	      tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
	        return a - b;
	      });
	      limits.push(tmpKMeansBreaks[0]);
	      for (i = am = 1, ref14 = tmpKMeansBreaks.length - 1; am <= ref14; i = am += 2) {
	        if (!isNaN(tmpKMeansBreaks[i])) {
	          limits.push(tmpKMeansBreaks[i]);
	        }
	      }
	    }
	    return limits;
	  };

	  hsi2rgb = function(h, s, i) {

	    /*
	    borrowed from here:
	    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
	     */
	    var args, b, g, r;
	    args = unpack(arguments);
	    h = args[0], s = args[1], i = args[2];
	    h /= 360;
	    if (h < 1 / 3) {
	      b = (1 - s) / 3;
	      r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
	      g = 1 - (b + r);
	    } else if (h < 2 / 3) {
	      h -= 1 / 3;
	      r = (1 - s) / 3;
	      g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
	      b = 1 - (r + g);
	    } else {
	      h -= 2 / 3;
	      g = (1 - s) / 3;
	      b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
	      r = 1 - (g + b);
	    }
	    r = limit(i * r * 3);
	    g = limit(i * g * 3);
	    b = limit(i * b * 3);
	    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
	  };

	  rgb2hsi = function() {

	    /*
	    borrowed from here:
	    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
	     */
	    var b, g, h, i, min, r, ref, s;
	    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
	    TWOPI = Math.PI * 2;
	    r /= 255;
	    g /= 255;
	    b /= 255;
	    min = Math.min(r, g, b);
	    i = (r + g + b) / 3;
	    s = 1 - min / i;
	    if (s === 0) {
	      h = 0;
	    } else {
	      h = ((r - g) + (r - b)) / 2;
	      h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
	      h = Math.acos(h);
	      if (b > g) {
	        h = TWOPI - h;
	      }
	      h /= TWOPI;
	    }
	    return [h * 360, s, i];
	  };

	  chroma.hsi = function() {
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Color, slice.call(arguments).concat(['hsi']), function(){});
	  };

	  _input.hsi = hsi2rgb;

	  Color.prototype.hsi = function() {
	    return rgb2hsi(this._rgb);
	  };

	  interpolate_hsx = function(col1, col2, f, m) {
	    var dh, hue, hue0, hue1, lbv, lbv0, lbv1, res, sat, sat0, sat1, xyz0, xyz1;
	    if (m === 'hsl') {
	      xyz0 = col1.hsl();
	      xyz1 = col2.hsl();
	    } else if (m === 'hsv') {
	      xyz0 = col1.hsv();
	      xyz1 = col2.hsv();
	    } else if (m === 'hsi') {
	      xyz0 = col1.hsi();
	      xyz1 = col2.hsi();
	    } else if (m === 'lch' || m === 'hcl') {
	      m = 'hcl';
	      xyz0 = col1.hcl();
	      xyz1 = col2.hcl();
	    }
	    if (m.substr(0, 1) === 'h') {
	      hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
	      hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
	    }
	    if (!isNaN(hue0) && !isNaN(hue1)) {
	      if (hue1 > hue0 && hue1 - hue0 > 180) {
	        dh = hue1 - (hue0 + 360);
	      } else if (hue1 < hue0 && hue0 - hue1 > 180) {
	        dh = hue1 + 360 - hue0;
	      } else {
	        dh = hue1 - hue0;
	      }
	      hue = hue0 + f * dh;
	    } else if (!isNaN(hue0)) {
	      hue = hue0;
	      if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
	        sat = sat0;
	      }
	    } else if (!isNaN(hue1)) {
	      hue = hue1;
	      if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
	        sat = sat1;
	      }
	    } else {
	      hue = Number.NaN;
	    }
	    if (sat == null) {
	      sat = sat0 + f * (sat1 - sat0);
	    }
	    lbv = lbv0 + f * (lbv1 - lbv0);
	    return res = chroma[m](hue, sat, lbv);
	  };

	  _interpolators = _interpolators.concat((function() {
	    var len, o, ref, results;
	    ref = ['hsv', 'hsl', 'hsi', 'hcl', 'lch'];
	    results = [];
	    for (o = 0, len = ref.length; o < len; o++) {
	      m = ref[o];
	      results.push([m, interpolate_hsx]);
	    }
	    return results;
	  })());

	  interpolate_num = function(col1, col2, f, m) {
	    var n1, n2;
	    n1 = col1.num();
	    n2 = col2.num();
	    return chroma.num(n1 + (n2 - n1) * f, 'num');
	  };

	  _interpolators.push(['num', interpolate_num]);

	  interpolate_lab = function(col1, col2, f, m) {
	    var res, xyz0, xyz1;
	    xyz0 = col1.lab();
	    xyz1 = col2.lab();
	    return res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
	  };

	  _interpolators.push(['lab', interpolate_lab]);

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "@bentley/bentleyjs-core":
/*!*********************************!*\
  !*** external "bentleyjs_core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__;

/***/ }),

/***/ "@bentley/geometry-core":
/*!********************************!*\
  !*** external "geometry_core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_geometry_core__;

/***/ }),

/***/ "@bentley/imodeljs-clients":
/*!***********************************!*\
  !*** external "imodeljs_clients" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_clients__;

/***/ }),

/***/ "@bentley/imodeljs-common":
/*!**********************************!*\
  !*** external "imodeljs_common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_common__;

/***/ }),

/***/ "@bentley/imodeljs-frontend":
/*!************************************!*\
  !*** external "imodeljs_frontend" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_frontend__;

/***/ }),

/***/ "@bentley/presentation-common":
/*!**************************************!*\
  !*** external "presentation_common" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_presentation_common__;

/***/ }),

/***/ "@bentley/presentation-components":
/*!******************************************!*\
  !*** external "presentation_components" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_presentation_components__;

/***/ }),

/***/ "@bentley/presentation-frontend":
/*!****************************************!*\
  !*** external "presentation_frontend" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_presentation_frontend__;

/***/ }),

/***/ "@bentley/ui-components":
/*!********************************!*\
  !*** external "ui_components" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_ui_components__;

/***/ }),

/***/ "@bentley/ui-core":
/*!**************************!*\
  !*** external "ui_core" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_ui_core__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

},[["./lib/frontend/index.js","runtime"]]]);
});
//# sourceMappingURL=main.js.map