/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { getViewList } from "../../backend/electron/main.js";
import { ipcRenderer } from "electron";
import { ViewDefinitionProps } from "@bentley/imodeljs-common";
// tslint:disable: no-console

export const viewData: any[] = [];

// This method initializes the data structure that will store the the iModelData objects, it returns both a test data array, and an empty real data array
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

/* Creates an iModel data widget, the translates data from the iModel hub, and stores it as an array of iModelData objects */
const viewDataWidget = () => {

  // stores the iModels with their data in iModelData
  createViewStorage();
  const listOfViews: ViewDefinitionProps[] = getViewList();
  if (listOfViews) {

    // loops through all the iModels
    for (let i = 0; i < listOfViews.length; i++) {
      let theName = listOfViews[i].name;
      if (!theName) {
        theName = "NAME_MISSING " + i;
      }

      // Creates an iModelInfo object, and returns it as an object
      const viewInfo = {
        viewName: theName,
        viewValue: listOfViews[i].wsgId,
        key: listOfViews[i].wsgId,
      };
      viewData.push(viewInfo);
    }
  }
  return viewData;
};

export const getCorrectViewName = () => {

  // Sets up listener for response back from server
  ipcRenderer.on("readConfigResultsIModel", (event: Event, jsonObject: any) => {
    if (event) {
      console.log(jsonObject);
    }

    // Configures the correct value, setting the state of the app, depending on what values currently exist
    // values in the settings.json are prioritized
    // tslint:disable-next-line: prefer-const
    let configiModel = jsonObject.imodel_name;
    if (jsonObject.imodel_name.length < 1) {
      alert("Warning! Invalid settings, missing imodel name");
      try {
        throw new ReferenceError("No imodel id has been specified");
      } catch (e) {
        console.log((e as Error).message);
        ipcRenderer.send("closeApplication", "Missing imodel");
      }
    }
    viewData[0] = {
      viewName: configiModel,
      viewValue: configiModel,
      key: configiModel + 1,
    };
  }); };

export default viewDataWidget;
