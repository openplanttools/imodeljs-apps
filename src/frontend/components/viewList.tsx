/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { getViewList } from "../../backend/electron/main.js";
import { ViewDefinitionProps } from "@bentley/imodeljs-common";

// ADD COMMENTS

export const viewData: any[] = [];

const createViewStorage = () => {
  const defaultData = {
    viewName: "",
    viewValue: "",
    key: "",
  };
  viewData.push(defaultData);
  getCorrectViewName();
  return viewData;
};

const viewDataWidget = () => {
  createViewStorage();
  const listOfViews: ViewDefinitionProps[] = getViewList();
  if (listOfViews) {
    for (const elem of listOfViews) {
      const viewInfo = {
        viewName: elem.code.value,
        viewValue: elem.id,
        key: elem.id,
      };
      viewData.push(viewInfo);
    }
  }
  return viewData;
};

export const getCorrectViewName = () => {
  viewData[0] = {
    viewName: "testName",
    viewValue: "testValue",
    key: "testKey",
  };
}

export default viewDataWidget;
