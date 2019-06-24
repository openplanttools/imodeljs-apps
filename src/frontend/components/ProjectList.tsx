/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { getProjectsList } from "../../backend/electron/main.js";
import { Project } from "@bentley/imodeljs-clients";

// This method initializes the data structure that will store the the iModelData objects, it returns both a test data array, and an empty real data array
const createProjectStorage = () => {
  let projectData = [];

  // Test data incase of offline usage or if iModel query is failing
  const testData = [];
  const testData1 = {
    projectName: "Testing 1",
    projectValue: "Testing 1",
    key: "Testing 1",
  };
  const testData2 = {
    projectName: "Testing 2",
    projectValue: "Testing 2",
    key: "Testing 2",
  };
  const defaultData = {
    projectName: "Pick a Project",
    projectValue: "Pick a Project",
    key: "Pick a Projcet",
  };
  projectData.push(defaultData);
  testData.push(testData1);
  testData.push(testData2);
  return projectData;
};

/* Creates a project data widget, the translates data from the iModel hub, and stores it as an array of project objects */
const ProjectDataWidget = () => {

  // stores the projects with their data in projectData
  var projectData = createProjectStorage();
  const listOfProjects: Project[] = getProjectsList();
  if (listOfProjects) {

    // loops through all the projects
    for (let i = 0; i < listOfProjects.length; i++) {
      var theName = listOfProjects[i].name;
      if (!theName) {
        theName = "NAME_MISSING " + i;
      }

      // Creates a projectInfo object, and returns it as an object
      const projectInfo = {
        projectName: theName,
        projectValue: listOfProjects[i].wsgId,
        key: listOfProjects[i].wsgId,
      };
      projectData.push(projectInfo);
    }
  }
  return projectData;
};

export default ProjectDataWidget;
