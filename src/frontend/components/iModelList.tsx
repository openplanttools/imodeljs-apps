/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { getiModelsList } from "../../backend/electron/main.js";
import { HubIModel } from "@bentley/imodeljs-clients";

/* Creates an iModel data widget, the translates data from the iModel hub, and stores it as an array of iModelData objects */
const iModelDataWidget = () => {
  let iModelData = [];
  let testData = [];
  let testData1 = {
    iModelName: "Testing 1",
    iModelValue: "Testing 1",
    key: "Testing 1",
  };
  let testData2 = {
    iModelName: "Testing 2",
    iModelValue: "Testing 2",
    key: "Testing 2",
  };
  testData.push(testData1);
  testData.push(testData2);
  const listOfIModels: HubIModel[] = getiModelsList();
  console.log("list of iModels " + listOfIModels);
  if (listOfIModels)
    for (let i = 0; i < listOfIModels.length; i++) {
      console.log(listOfIModels[i].name);
      var theName = listOfIModels[i].name;
      if (!theName) {
        theName = "NAME_MISSING " + i;
      }
      const iModelInfo = {
        iModelName: theName,
        iModelValue: listOfIModels[i].wsgId,
        key: listOfIModels[i].wsgId,
      };
      iModelData.push(iModelInfo);
    }
  if (iModelData)
    return iModelData;
  else
    return testData;
};

export default iModelDataWidget;
