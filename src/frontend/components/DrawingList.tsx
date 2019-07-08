/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { getDrawingsList } from "../../backend/electron/main.js";
import { Drawing } from "@bentley/imodeljs-backend";

// This method initializes the data structure that will store the the iModelData objects, it returns both a test data array, and an empty real data array
const createDrawingStorage = () => {
  const drawingData = [];

  // Test data incase of offline usage or if iModel query is failing
  const testData = [];
  const testData1 = {
    drawingName: "Testing 1",
    drawingValue: "Testing 1",
    key: "Testing 1",
  };
  const testData2 = {
    drawingName: "Testing 2",
    drawingValue: "Testing 2",
    key: "Testing 2",
  };
  const defaultData = {
    drawingName: "Pick a Drawing",
    drawingValue: "Pick a Drawing",
    key: "Pick a Drawing",
  };
  drawingData.push(defaultData);
  testData.push(testData1);
  testData.push(testData2);
  return drawingData;
};

/* Creates an iModel data widget, the translates data from the iModel hub, and stores it as an array of iModelData objects */
const drawingDataWidget = () => {

  // stores the iModels with their data in iModelData
  const drawingData = createDrawingStorage();
  const listOfDrawings: Drawing[] = getDrawingsList();
  if (listOfDrawings) {

    // loops through all the iModels
    for (let i = 0; i < listOfDrawings.length; i++) {
      let theName = listOfDrawings[i].name;
      if (!theName) {
        theName = "NAME_MISSING " + i;
      }

      // Creates an iModelInfo object, and returns it as an object
      const drawingInfo = {
        drawingName: theName,
        drawingValue: listOfDrawings[i].wsgId,
        key: listOfDrawings[i].wsgId,
      };
      drawingData.push(drawingInfo);
    }
  }
  return drawingData;
};

export default drawingDataWidget;
