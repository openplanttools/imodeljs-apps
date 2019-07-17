/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { Config } from "@bentley/imodeljs-clients";

/**
 * List of possible backends that simple-viewer-app can use
 */
export enum UseBackend {
  /** Use local simple-viewer-app backend */
  Local = 0,

  /** Use deployed Navigator backend */
  Navigator = 1,
}

/**
 * Setup configuration for the application
 *
 * **Note:** this part of configuration is shared between both the application itself and
 * the tests. Each of them also have unique configuration stored in:
 * - App: `src/common/config.json`
 * - Tests: `test/end-to-end/config.json`
 */
export default function setupEnv() {
  Config.App.merge({
    // -----------------------------------------------------------------------------------------------------------
    // Client registration (RECOMMENDED but OPTIONAL)
    // Must set these variables before deployment, but the supplied defaults can be used for testing on localhost.
    // Create a client registration using the procedure here - https://git.io/fx8YP (Developer registration). For the purpose
    // of running this sample on localhost, ensure your registration includes http://localhost:3000/signin-callback as a
    // valid redirect URI.
    // -----------------------------------------------------------------------------------------------------------
    // imjs_browser_test_client_id: "spa-QtBqEiXs0Pj9lLoiTWhMnkvjz",
    // imjs_browser_test_client_id: "spa-MBQFbO5ABzMeXkahkOslOJhs7",
    // imjs_test_project: "testing27",
    // imjs_test_imodel: "testing27",
    // imjs_buddi_resolve_url_using_region: "102",
    // imjs_browser_test_scope: "openid email profile organization imodelhub context-registry-service reality-data:read",
    // use to view in BROWSER (PRODUCTION only):
    // imjs_browser_test_redirect_uri: "http://localhost:3000/signin-callback",
    // imjs_browser_test_client_id: "imodeljs-spa-test-2686",
    // use to view in BROWSER (QA only):
    // imjs_browser_test_redirect_uri: "http://localhost:3000/signin-callback",
    // imjs_browser_test_client_id: "imodeljs-spa-test-2686",
    // imjs_buddi_resolve_url_using_region: "102",

    // * CONFIGURATION SETTINGS: *

    imjs_browser_test_redirect_uri: "electron://frontend/signin-callback",
   //imjs_browser_test_client_id: "spa-TndE76P2OLOLZMumh7nx5yHjR", // Un-comment if in Production
    imjs_browser_test_client_id: "spa-r2eFZFCkkth19yr8R2Ei4oTk1", // Un-comment if in QA
    imjs_buddi_resolve_url_using_region: "102", // Un-comment if in QA

    // imjs_test_project: "opbimdev01", // Set this to the name of the Project
    // imjs_test_imodel: "OpDev_IPL_Baytown_YII", // Set this to the name of the iModel
    // imjs_test_drawing: "PIDP301", // Set this to the name of the Drawing

    // imjs_test_imodel: "Nick-May2019",
    //  imjs_test_project: "OP_CE_VIEW",
    //  imjs_test_imodel: "MistyMountainTop",
    //  imjs_test_drawing: "Pid001_MT",

    // default permissions that allow the application to function
    imjs_browser_test_scope: "openid email profile organization imodelhub context-registry-service reality-data:read imodeljs-router",
  });
}
