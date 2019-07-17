/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { getIModelsList } from "../../backend/electron/main.js";
import { HubIModel } from "@bentley/imodeljs-clients";
import { ipcRenderer } from "electron";
// tslint:disable: no-console
export const iModelData: any[] = [];
// This method initializes the data structure that will store the the iModelData objects, it returns both a test data array, and an empty real data array
const createiModelStorage = () => {

  // Test data incase of offline usage or if iModel query is failing
  const testData = [];
  const testData1 = {
    iModelName: "Testing 1",
    iModelValue: "Testing 1",
    key: "Testing 1",
  };
  const testData2 = {
    iModelName: "Testing 2",
    iModelValue: "Testing 2",
    key: "Testing 2",
  };
  const defaultData = {
    iModelName: "",
    iModelValue: "",
    key: "",
  };
  iModelData.push(defaultData);
  getCorrectiModelName();
  testData.push(testData1);
  testData.push(testData2);
  return iModelData;
};

/* Creates an iModel data widget, the translates data from the iModel hub, and stores it as an array of iModelData objects */
const iModelDataWidget = () => {

  // stores the iModels with their data in iModelData
  createiModelStorage();
  const listOfIModels: HubIModel[] = getIModelsList();
  if (listOfIModels) {

    // loops through all the iModels
    for (let i = 0; i < listOfIModels.length; i++) {
      let theName = listOfIModels[i].name;
      if (!theName) {
        theName = "NAME_MISSING " + i;
      }

      // Creates an iModelInfo object, and returns it as an object
      const iModelInfo = {
        iModelName: theName,
        iModelValue: listOfIModels[i].wsgId,
        key: listOfIModels[i].wsgId,
      };
      iModelData.push(iModelInfo);
    }
  }
  return iModelData;
};

export const getCorrectiModelName = () => {

  // Sets up listener for response back from server
  ipcRenderer.on("readConfigResultsIModel", (event: Event, jsonObject: any) => {
    if (event) {
      console.log(jsonObject);
    }

    // Configures the correct value, setting the state of the app, depending on what values currently exist
    // values in the settings.json are prioritized
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
    iModelData[0] = {
      iModelName: configiModel,
      iModelValue: configiModel,
      key: configiModel + 1,
    };
  }); };

export default iModelDataWidget;
