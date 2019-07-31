/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import {
  //get3DViews,
  get2DViews,
  getInitialView,
} from "./App.js";

// Stores the list of view definitions
export const viewList: any[] = [];

/** Creates and exports widget with list of view definitions */
const viewWidget = () => {
  // Sets the initial (displayed) option in dropdown list
  const initVal = getInitialView();
  viewList[0] = {
    viewName: initVal.code.value,
    viewValue: initVal.id,
    key: initVal.id,
  };

  // Adds the 3D views in the dropdown list
  // const views3D = get3DViews();
  // for (let i = 0; i < views3D.length; i++) {
  //   viewList[i + 1] = {
  //     viewName: views3D[i].code.value,
  //     viewValue: views3D[i].id,
  //     key: views3D[i].id,
  //   };
  // }

  // Adds the 2D views in the dropdown list
  const views2D = get2DViews();
  for (let i = 0; i < views2D.length; i++) {
    viewList[i + 1] = { // + views3D.length] = {
      viewName: views2D[i].code.value,
      viewValue: views2D[i].id,
      key: views2D[i].id,
    };
  }

  return viewList;
};
export default viewWidget;
