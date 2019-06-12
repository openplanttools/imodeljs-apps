/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

/// <reference types="node" />

declare module 'distinct-colors' {

  import chroma = require('chroma-js');

  function distinctColors(options: any): chroma.Color[];

  export = distinctColors;
}
