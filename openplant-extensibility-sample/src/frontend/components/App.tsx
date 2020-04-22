/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
//import { Id64String } from "@bentley/bentleyjs-core";
//import { AccessToken } from "@bentley/imodeljs-clients";
import { IModelConnection } from "@bentley/imodeljs-frontend";
import { Spinner, SpinnerSize } from "@bentley/ui-core";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {ipcRenderer} from "electron";
import Sidebar from "./Sidebar";

/** React state of the App component */
export interface AppState {
  imodelConnection?: IModelConnection;
  displayData:any;
}

export interface AppProps {
  imodelInfo: any;
}

/** A component the renders the whole application UI */
export  class App extends React.Component<AppProps, AppState> {

  /** Creates an App instance */
  constructor(props?: any, context?: any) {
    super(props, context);
    console.log( this.props.imodelInfo );
    this.state = {
      imodelConnection: undefined,
      displayData:[]
    };

  }

  public async componentDidMount() {

    ipcRenderer.send("readSettings", "Settings");
    ipcRenderer.on("readSettingResults", async (event: Event, configObject: any) => {
      console.log("Recieved ReadConfigResults",event, " \n", configObject);
      const cols =  configObject["properties"]["DisplayProperties"].filter((v:any) => {

        if( v.DisplayStatus != "Hide" ) { return true;} return false;
      }).map((value:any) => {
        return value.PropertyName.toLowerCase().replace(/\s/g, '').replace(/_/g, '')
      })
      let imodelCon: IModelConnection | undefined = await IModelConnection.open(this.props.imodelInfo.project , this.props.imodelInfo.model);
          this.setState( {imodelConnection: imodelCon,
                          displayData: cols
          });
      console.log(cols);
    });
  }

  /** The component's render method */
  public render() {
    let ui;
    console.log( "ProjID: ", this.props.imodelInfo["project"], "   IModelID: ", this.props.imodelInfo["model"], "   token:", this.props.imodelInfo["token"] );
    if ( this.state.displayData && this.state.imodelConnection )
      ui = (<Sidebar displayData={this.state.displayData} imodelConnection={this.state.imodelConnection} />);
    else
      ui = (<span className="open-imodel"><Spinner size={SpinnerSize.Large} /></span>);

    return (
      <>{ui}</>
    );
  }
}
