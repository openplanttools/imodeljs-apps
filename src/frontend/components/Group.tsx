/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
import iModelDataWidget from "./iModelList";
import "../../common/configuration.js";
import "./Group.scss";
import { Button, ButtonType } from "@bentley/ui-core";
import { Config } from "@bentley/imodeljs-clients";

// WIP, event emitter bound function to be called from App.tsx and create changes in the AppState
// WIP, class to contain the current iModel chosen and return it to App.tsx
export class iModelContainer {

  // instance variables, storing imodel name as a string and an object, the object is useful because it can be assigned
  // as a property and dynamically allocated in react components
  currentIModel: string;
  public iModelObject: {
    iModelName: string,
    iModelValue: string,
    key?: string,
  }

  // initializes variables to dummy values
  constructor() {
    this.currentIModel = "initial_value";
    this.iModelObject = {
      iModelName: "initial_value",
      iModelValue: "initial_value",
      key: "initial_value",
    };
  }

  // getters and setters
  public setNewIModel(iModel: string){
    this.currentIModel = iModel;
  }

  public updateIModel(){
    return this.currentIModel;
  }
}

export const IModelContainer = new iModelContainer();

/** Group Widget controller class, formats and spaces the collcetion of tools associated with developing a new iModel */
// This method formats the required pieces in HTML
export const GroupWidget = () => {
  return (
    <div>
      <link rel='stylesheet' href="./Group.scss" type='text/css' />
      <div className="midLeft">
        <Button id="submitt" buttonType={ButtonType.Primary} name="submit" value="Submit">Submit</Button>
        <IModelList />
      </div>
    </div>
  );
};

/* IModelList class ,is a react component, has an app state with defined instance variables to keep track of relevant information */
export class IModelList extends React.Component<{}, { value: string }> {
  public myRef: HTMLElement | undefined;
  public prevIndex: number | undefined;
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // WIP, handles changes to the state of this piece when the desired project is changed, functionality not yet implemented
  handleChange(event: Event) {
    if (event.target)
      this.setState({});
  }

  // Handles new form submission of dropdown elements from the list
  handleSubmit() {

    // alert('A name was submitted: ' + this.state);
    // gets the document list and casts it to a select element
    var mainList = (document.getElementById("dropList")) as HTMLSelectElement;

    // This conditional holds code that keeps track of a variety of things. 1) The index of the option previously chosen, 2) the object currently selected becomes the selected
    // object, 3) the default node's inner HTML is updated, so the current node is displayed even when the dropdown tool is closed, 4) begins changing the Config files and sending an event that will
    // change the App State, changing the App State is necessary, as it will force react to re-render the desired processes, providing a new view.
    if (mainList) {
      console.log("selected index " + mainList.selectedIndex);
      mainList.options[mainList.selectedIndex].selected = true;
      if (this.prevIndex) {
        mainList.options[this.prevIndex].selected = false;
        this.prevIndex = mainList.selectedIndex;
      } else {
        this.prevIndex = mainList.selectedIndex;
      }

      // updates the primary node of the select element
      mainList.options[0].innerHTML = mainList.options[mainList.selectedIndex].innerText;

      // this config setting line should be changed, as we transition to reading and writing from a JSON file for smoother integration
      Config.App.set("imjs_test_imodel", mainList.options[mainList.selectedIndex].innerText);
      IModelContainer.setNewIModel(mainList.options[mainList.selectedIndex].innerText);

      // stores an IModelData object representing the imodel selected
      IModelContainer.iModelObject = {
        iModelName: mainList.options[mainList.selectedIndex].innerHTML,
        iModelValue: mainList.options[mainList.selectedIndex].value,
      };
    }
  }

  // render method, called automatically by react, provides formatting in HTML for the group tool widget
  render() {
    return (
      <form onSubmit={() => this.handleSubmit}>
        <label className="label">
          <select id="dropList" name="iModelList" style={{ fontFamily: "sans-serif" }} value="List of iModels" onChange={() => { this.handleSubmit() }}>{iModelDataWidget().map((iModelItem) => {
            return <option key={iModelItem.key} /*onClick={() => this.handleSubmit()}*/ value={iModelItem.iModelValue}>{iModelItem.iModelName}</option>;
          })}List of iModels</select>
        </label>
      </form>
    );
  }
}
