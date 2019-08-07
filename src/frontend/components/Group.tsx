/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import styled from "styled-components";
import * as React from "react";
import viewWidget from "./ViewList";
import "../../common/configuration.js";
import "./Group.scss";
import { changeView } from "./App";

// event emitter bound function to be called from App.tsx and create changes in the AppState
// class to contain the current view chosen and return it to App.tsx
export class ViewContainer {

  // instance variables, storing view name as a string and an object, the object is useful because it can be assigned
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

  /** Sets the name of the current view definition to the provided name
   * @param view the provided name
   */
  public setNewView(view: string) {
    this.currentView = view;
  }

  /** Returns the name of the current view definition
   * @return the name of the current view definition
   */
  public updateView(): string {
    return this.currentView;
  }
}

// The ViewContainer to hold the GroupWidget
export const viewContainer = new ViewContainer();

/** Group Widget controller class, formats and spaces the collcetion of tools associated with developing a new view */
// This method formats the required pieces in HTML
// tslint:disable-next-line: variable-name
export interface GroupProps {
  view: string;
}

/** The GroupWidget to hold the ViewList */
export class GroupWidget extends React.Component<GroupProps, { value: string }> {
  /** Renders the GroupWidget */
  public render() {
    return (
      <div>
        <link rel="stylesheet" href="./Group.scss" type="text/css" />
        <div className="viewDropList">
          <ViewList value = {this.props.view}/>
        </div>
      </div>
    );
  }
}

/** ViewList class is a react component, has an app state with defined instance variables to keep track of relevant information */
export interface ViewListProps {
  value?: string;
}
export class ViewList extends React.Component<ViewListProps, { value: string }> {
  public myRef: HTMLElement | undefined;
  public prevIndex: number | undefined;
  // Constructs a dropdown list selecting a view
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** Handles changes to the state of this piece when the desired project is changed
   * Not yet fully implemented
   * @param event the state change selection made by the user
   */
  public handleChange(event: Event) {
    if (event.target)
      this.setState({});
  }

  /** Handles new form submission of dropdown elements from the list */
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
      mainList.options[0].value = mainList.options[mainList.selectedIndex].value;

      viewContainer.setNewView(mainList.options[mainList.selectedIndex].innerText);

      // stores a view data object representing the view selected
      viewContainer.viewObject = {
        viewName: mainList.options[mainList.selectedIndex].innerHTML,
        viewValue: mainList.options[mainList.selectedIndex].value,
      };

      // Updates the App with the selected view definition
      // tslint:disable-next-line: no-floating-promises
      changeView(viewContainer.viewObject.viewValue);

      // tslint:disable-next-line: no-console
      console.log("HERE!!!!!!!!!!");
      for (const elem of mainList.options) {
        // tslint:disable-next-line: no-console
        console.log(elem.innerHTML);
        // tslint:disable-next-line: no-console
        console.log(elem.value);
      }
      // tslint:disable-next-line: no-console
      console.log("HERE!!!!!!!!!!");
    }
  }

  // render method, called automatically by react, provides formatting in HTML for the group tool widget
  public render() {
    return (
         <form onSubmit={() => this.handleSubmit}>
        <label className="viewLabel">
          <select id="viewDropList" name="viewList" style={{ fontFamily: "sans-serif" }} value="List of Views" onChange={() => { this.handleSubmit(); }}>{viewWidget().map((viewItem) => {
            if (viewItem.viewName.length < 1) {
              return <option className ="drawingOption" key={viewItem.key} value={this.props.value}>{this.props.value}</option>;
            } else {
            return <option className = "drawingOption" key={viewItem.key} value={viewItem.viewValue}>{viewItem.viewName}</option>;
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
