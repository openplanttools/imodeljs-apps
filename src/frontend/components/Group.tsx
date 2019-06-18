/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/

import * as React from "react";
import iModelDataWidget from "./iModelList";
import "../../common/configuration.js";
import { Config } from "@bentley/imodeljs-clients";
import "./Group.scss";
import { Button, ButtonType } from "@bentley/ui-core";

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
        <select id="dropList" name="iModelList" value="List of iModels" onChange={() => { changeConfigValue() }}>{iModelDataWidget().map((iModelItem) => {
          return <option key={iModelItem.key} value={iModelItem.iModelValue} >{iModelItem.iModelName}</option>;
        })}</select>
      </div>
    </div>
  );
};

const changeConfigValue = () => {
  var element = document.getElementById("dropList");
  var wsgId;
  if (element)
    wsgId = element.accessKey;
  if (wsgId)
    Config.App.set("imjs_test_imodel", wsgId)
  else
    console.log("the value was null");
};
export default groupWidget;
