/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import styled from "styled-components";
import * as React from "react";
import viewDataWidget from "./viewList";
import "../../common/configuration.js";
import { Config } from "@bentley/imodeljs-clients";

// WIP, event emitter bound function to be called from App.tsx and create changes in the AppState
// WIP, class to contain the current iModel chosen and return it to App.tsx
export class ViewContainer {

  // instance variables, storing imodel name as a string and an object, the object is useful because it can be assigned
  // as a property and dynamically allocated in react components
  public currentView: string;
  public viewObject: {
    viewName: string,
    viewValue: string,
    key?: string,
  };

  // initializes variables to dummy values
  constructor() {
    this.currentView = "initial_value";
    this.viewObject = {
      viewName: "initial_value",
      viewValue: "initial_value",
      key: "initial_value",
    };
  }

  // getters and setters
  public setNewView(view: string) {
    this.currentView = view;
  }

  public updateView() {
    return this.currentView;
  }
}

export const viewContainer = new ViewContainer();

/** Group Widget controller class, formats and spaces the collcetion of tools associated with developing a new iModel */
// This method formats the required pieces in HTML
// tslint:disable-next-line: variable-name
export interface GroupProps {
  view: string;
}
export class GroupWidget extends React.Component<GroupProps, { value: string }> {
  public render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" />
        <div className="midLeft">
          <ViewList value = {this.props.view}/>
        </div>
      </div>
    );
  }
}

export interface ViewListProps {
  value?: string;
}

/** IModelList class is a react component, has an app state with defined instance variables to keep track of relevant information */
export class ViewList extends React.Component<ViewListProps, { value: string }> {
  public myRef: HTMLElement | undefined;
  public prevIndex: number | undefined;
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // WIP, handles changes to the state of this piece when the desired project is changed, functionality not yet implemented
  public handleChange(event: Event) {
    if (event.target)
      this.setState({});
  }

  // Handles new form submission of dropdown elements from the list
  public handleSubmit() {

    // alert('A name was submitted: ' + this.state);
    // gets the document list and casts it to a select element
    const mainList = (document.getElementById("viewDropList")) as HTMLSelectElement;

    // This conditional holds code that keeps track of a variety of things. 1) The index of the option previously chosen, 2) the object currently selected becomes the selected
    // object, 3) the default node's inner HTML is updated, so the current node is displayed even when the dropdown tool is closed, 4) begins changing the Config files and sending an event that will
    // change the App State, changing the App State is necessary, as it will force react to re-render the desired processes, providing a new view.
    if (mainList) {
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
      viewContainer.setNewView(mainList.options[mainList.selectedIndex].innerText);

      // stores an IModelData object representing the imodel selected
      viewContainer.viewObject = {
        viewName: mainList.options[mainList.selectedIndex].innerHTML,
        viewValue: mainList.options[mainList.selectedIndex].value,
      };
    }
  }

  // render method, called automatically by react, provides formatting in HTML for the group tool widget
  public render() {
    return (
         <form onSubmit={() => this.handleSubmit}>
        <label className="viewLabel">
          <select id="viewDropList" name="viewList" style={{ fontFamily: "sans-serif" }} value="List of Views" onChange={() => { this.handleSubmit(); }}>{viewDataWidget().map((viewItem) => {
            if (viewItem.viewName.length < 1) {
              return <option key={viewItem.key} value={this.props.value}>{this.props.value}</option>;
            } else {
            return <option key={viewItem.key} value={viewItem.viewValue}>{viewItem.viewName}</option>;
            }
          })}List of Views</select>
        </label>
        </form>
    );
  }
}

export const styledSelect = styled.select`
background-color: #222;
color: white;
`;

export const styledForm = styled.form`
padding-top: 0px;
padding-left: 5px;
padding-right: 5px;
font-weight: bold;
font-size: large;
`;

export const styledWrapper = styled.text`
padding-top: 0px;
padding-left: 5px;
padding-right: 5px;
font-weight: bold;
font-size: large;
`;
