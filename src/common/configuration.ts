/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { Config } from "@bentley/imodeljs-clients";

/**
 * List of possible backends that simple-viewer-app can use
 */
export const enum UseBackend {
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

    // (1) UN-COMMENT ONE OF THE FOLLOWING FOUR BLOCKS

    // use to view in BROWSER (PRODUCTION only)
    // imjs_browser_test_redirect_uri: "http://localhost:3000/signin-callback",
    // imjs_browser_test_client_id: "imodeljs-spa-test-2686",

    // use to view in BROWSER (QA only)
    // imjs_browser_test_redirect_uri: "http://localhost:3000/signin-callback",
    // imjs_browser_test_client_id: "imodeljs-spa-test-2686",
    // imjs_buddi_resolve_url_using_region: "102",

    // use to view in ELECTRON (PRODUCTION only)
    imjs_browser_test_redirect_uri: "electron://frontend/signin-callback",
    imjs_browser_test_client_id: "spa-TndE76P2OLOLZMumh7nx5yHjR",

    // use to view in ELECTRON (QA only)
    // imjs_browser_test_redirect_uri: "electron://frontend/signin-callback",
    // imjs_browser_test_client_id: "spa-r2eFZFCkkth19yr8R2Ei4oTk1",
    // imjs_buddi_resolve_url_using_region: "102",


    // (2) SET THE PROJECT AND IMODEL NAMES
    imjs_test_project: "OP_CE_VIEW", // Set this to the name of the project
    imjs_test_imodel: "MistyMountainTop", // Set this to the name of the iModel


    // default permissions that allow the application to function
    imjs_browser_test_scope: "openid email profile organization imodelhub context-registry-service reality-data:read imodeljs-router",
  });
}
