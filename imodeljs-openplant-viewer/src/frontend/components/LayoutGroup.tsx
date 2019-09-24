/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import styled from "styled-components";
import * as React from "react";
import layoutWidget from "./LayoutList";
import "../../common/configuration.js";
import "./LayoutGroup.scss";
import { updateLayout } from "./App";

/** Group Widget controller class, formats and spaces the collcetion of tools associated with developing a new layout */
// This method formats the required pieces in HTML
// tslint:disable-next-line: variable-name
export interface LayoutGroupProps {
  layout: string;
}

/** The GroupWidget to hold the LayoutList */
export class LayoutGroupWidget extends React.Component<LayoutGroupProps, { value: string }> {
  /** Renders the LayoutGroupWidget */
  public render() {
    return (
      <div>
        <link rel="stylesheet" href="./LayoutGroup.scss" type="text/css" />
        <div className="layoutDropList">
          <LayoutList value = {this.props.layout}/>
        </div>
      </div>
    );
  }
}

/** LayoutList class is a react component, has an app state with defined instance variables to keep track of relevant information */
export interface LayoutListProps {
  value?: string;
}
export class LayoutList extends React.Component<LayoutListProps, { value: string }> {
  public myRef: HTMLElement | undefined;
  public prevIndex: number | undefined;
  // Constructs a dropdown list selecting a layout
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
    const mainList = (document.getElementById("layoutDropList")) as HTMLSelectElement;

    // This conditional holds code that keeps track of a variety of things. 1) The index of the option previously chosen, 2) the object currently selected becomes the selected
    // object, 3) the default node's inner HTML is updated, so the current node is displayed even when the dropdown tool is closed, 4) begins changing the Config files and sending an event that will
    // change the App State, changing the App State is necessary, as it will force react to re-render the desired processes, providing a new layout.
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

      // Updates the App with the selected layout
      updateLayout(mainList.options[0].value);
    }
  }

  // render method, called automatically by react, provides formatting in HTML for the group tool widget
  public render() {
    return (
        <form onSubmit={() => this.handleSubmit}>
        <label className="layoutLabel">
          <select id="layoutDropList" name="layoutList" style={{ fontFamily: "sans-serif" }} value="List of Layouts" onChange={() => { this.handleSubmit(); }}>{layoutWidget().map((layoutItem) => {
            if (layoutItem.layoutName.length < 1) {
              return <option className ="drawingOption" key={layoutItem.key} value={this.props.value}>{this.props.value}</option>;
            } else {
              return <option className = "drawingOption" key={layoutItem.key} value={layoutItem.layoutValue}>{layoutItem.layoutName}</option>;
            }
          })}List of Layouts</select>
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
