/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import {
  ElectronRpcManager, ElectronRpcConfiguration
} from "@bentley/imodeljs-common";
import getSupportedRpcs from "../../common/rpcs";

/**
 * Initializes RPC communication based on the platform
 */
export default function initRpc() {
  let config;
  const rpcInterfaces = getSupportedRpcs();
  if (ElectronRpcConfiguration.isElectron) {
    // initializes RPC for Electron
    config = ElectronRpcManager.initializeClient({}, rpcInterfaces);
  }
  console.log(config);
}
