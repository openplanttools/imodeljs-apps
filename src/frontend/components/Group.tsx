/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
import iModelDataWidget from "./iModelList";
import "../../common/configuration.js";
//import { Config } from "@bentley/imodeljs-clients";
import "./Group.scss";
import { Button, ButtonType } from "@bentley/ui-core";
//import { readJSON } from "fs-extra";
import { Config } from "@bentley/imodeljs-clients";

/** Group Widget controller class, formats and spaces the collcetion of tools associated with developing a new iModel */
const groupWidget = () => {
  return (
    <div>
      <link rel='stylesheet' href="./Group.scss" type='text/css' />
      <h2>New iModel</h2>
      <div className="formField">
        <input type='text' id="openinput" name='text1' />
        <form name="form1" action="#" /*METHOD*/>
        </form>
      </div>
      <div className="midLeft">
        <Button id="submitt" buttonType={ButtonType.Primary} name="submit" value="Submit">Submit</Button>
        <IModelList />
      </div>
    </div>
  );
};

export class IModelList extends React.Component<{}, { value: string }> {
  public myRef: HTMLElement | undefined;
  public prevIndex: number | undefined;
  constructor(props: any) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: Event) {
    if (event.target)
      this.setState({});
  }

  handleSubmit() {
    //alert('A name was submitted: ' + this.state);
    var mainList = (document.getElementById("dropList")) as HTMLSelectElement;
    if (mainList) {
      console.log("selected index " + mainList.selectedIndex);
      mainList.options[mainList.selectedIndex].selected = true;
      if (this.prevIndex) {
        mainList.options[this.prevIndex].selected = false;
        this.prevIndex = mainList.selectedIndex;
      } else {
        this.prevIndex = mainList.selectedIndex;
      }
      mainList.options[0].innerHTML = mainList.options[mainList.selectedIndex].innerText;
      console.log(Config.App.get("imjs_browser_test_redirect_uri"));
      console.log("REDIRECT UI");
      Config.App.set("imjs_test_imodel", mainList.options[mainList.selectedIndex].innerText);

    }
    // event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={() => this.handleSubmit}>
        <label className="label">
          Select new iModel
          <select id="dropList" name="iModelList" value="List of iModels" onChange={() => { this.handleSubmit() }}>{iModelDataWidget().map((iModelItem) => {
            return <option key={iModelItem.key} /*onClick={() => this.handleSubmit()}*/ /*value={iModelItem.iModelValue} */>{iModelItem.iModelName}</option>;
          })}List of iModels</select>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}
export default groupWidget;
