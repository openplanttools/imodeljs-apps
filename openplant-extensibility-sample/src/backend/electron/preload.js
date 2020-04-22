/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
if (window.location.href.indexOf("electron://") != 0) {
  require("electron").remote.require('module');
  window.nodeRequire = require;
  delete window.require;
  delete window.exports;
  delete window.module;
}
