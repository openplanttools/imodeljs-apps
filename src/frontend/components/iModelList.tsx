/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { getIModelsList } from "../../backend/electron/main.js";
import { Config, HubIModel } from "@bentley/imodeljs-clients";
import * as configurationData from "../../common/settings.json";
// tslint:disable: no-console

// This method initializes the data structure that will store the the iModelData objects, it returns both a test data array, and an empty real data array
const createiModelStorage = () => {
  const iModelData = [];

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
    iModelName: getCorrectiModelName(),
    iModelValue: getCorrectiModelName(),
    key: Config.App.get("imjs_test_imodel"),
  };
  iModelData.push(defaultData);
  testData.push(testData1);
  testData.push(testData2);
  return iModelData;
};

export const getCorrectProjectName = () => {
  if (configurationData.project_name.length > 0 && configurationData.imodel_name.length > 0) {
    return configurationData.project_name;
  }
  return Config.App.get("imjs_test_project") as string;
};

export const getCorrectiModelName = () => {
  const newJSON = configurationData as any as any[];
  console.log(newJSON);
  console.log(newJSON[0]);
  if (configurationData.imodel_name.length > 0) {
    console.log("returning configuration JSON name");
    return configurationData.imodel_name;
  }
  return Config.App.get("imjs_test_imodel") as string;
};

/* Creates an iModel data widget, the translates data from the iModel hub, and stores it as an array of iModelData objects */
const iModelDataWidget = () => {

  // stores the iModels with their data in iModelData
  const iModelData = createiModelStorage();
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

export default iModelDataWidget;
