/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

// Stores the list of layouts
export const layoutList: any[] = [];

/** Creates and exports widget with list of layouts */
const layoutWidget = () => {
  layoutList[0] = {
    layoutName: "initName",
    layoutValue: "initValue",
    key: "initKey",
  };

  layoutList[1] = {
    layoutName: "Left: 2D | Right: 3D",
    layoutValue: "left-2d-right-3d",
    key: "left-2d-right-3d",
  };

  layoutList[2] = {
    layoutName: "Left: 3D | Right: 2D",
    layoutValue: "left-3d-right-2d",
    key: "left-3d-right-2d",
  };

  layoutList[3] = {
    layoutName: "Top: 2D | Bottom: 3D",
    layoutValue: "top-2d-bottom-3d",
    key: "top-2d-bottom-3d",
  };

  layoutList[4] = {
    layoutName: "Top: 3D | Bottom: 2D",
    layoutValue: "top-3d-bottom-2d",
    key: "top-3d-bottom-2d",
  };

  // Sets the initial layout option to one of the previous indices
  layoutList[0] = layoutList[1];

  return layoutList;
};
export default layoutWidget;
