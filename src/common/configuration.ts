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
    // starts up the electron window with the sign-in
    imjs_browser_test_redirect_uri: "electron://frontend/signin-callback",
    // default permissions that allow the application to function
    imjs_browser_test_scope: "openid email profile organization imodelhub context-registry-service reality-data:read imodeljs-router",

    /** CLIENT SELECTION
     * USE/UN-COMMENT 1ST LINE IF IN PRODUCTION
     * USE/UN-COMMENT 2ND & 3RD LINES IF IN QA
     */
    imjs_browser_test_client_id: "spa-TndE76P2OLOLZMumh7nx5yHjR", // Use/un-comment if in Production
    // imjs_browser_test_client_id: "spa-r2eFZFCkkth19yr8R2Ei4oTk1", // Use/un-comment if in QA
    // imjs_buddi_resolve_url_using_region: "102", // Use/un-comment if in QA
  });
}
