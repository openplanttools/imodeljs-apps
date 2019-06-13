"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imodeljs_clients_1 = require("@bentley/imodeljs-clients");
const imodeljs_frontend_1 = require("@bentley/imodeljs-frontend");
const presentation_frontend_1 = require("@bentley/presentation-frontend");
const ui_core_1 = require("@bentley/ui-core");
const ui_components_1 = require("@bentley/ui-components");
const logging_1 = require("./logging");
const rpc_1 = require("./rpc");
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
//# sourceMappingURL=SimpleViewerApp.js.map