/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import * as _ from "lodash";
import MUIDataTable, {SelectableRows} from "mui-datatables";
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { ipcRenderer } from "electron";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

interface TableProps {
  data: any;
  dbResult: any;
  title:any;
  colHeaders:any;
  hiddenColumns:any;
  columnLabels:any;
}

interface TableState {
  elements: any;
  selectedColumns: [];
  currentDisplayData:any;
}

export class Table extends React.Component<TableProps, TableState> {
  constructor(props: any) {
    super(props);
  }

  public customBodyRendererColumn = (value: any, tableMeta: any, updateValue: any) => {
    console.log("Value: ",value, " TableMeta: ",tableMeta, " UpdatedValue: ", updateValue);
      return (
        <div className="ManufacturerColumn" style = {{backgroundColor:"#ecf0f1", borderRadius: 3, width:"100%",}}>
          {value}
        </div>
      );
  }

  public componentDidMount() {
    [...document.getElementsByClassName("ManufacturerColumn")].map((i:any) => {
      i.parentNode.bgColor="#ecf0f1";
    });
    const div = document.getElementById("uifw-configurableui-wrapper");
    if (div){
      div.style.overflow = "auto";
    }
    this.insertDataToDb();

  }

  public componentDidUpdate(prevProps:any){
    if (prevProps.data != this.props.data){
      console.log("ROWS CHANGED------")
      //this.setState({elements:this.props.data});
    }
    if (prevProps.colHeaders != this.props.colHeaders){
      console.log("COLUMN HEADERS CHANGED------")
    }
  }


   materialTheme =() => {
     return createMuiTheme({
      overrides: {
        MUIDataTable:{
          tableRoot:{
            borderRight:"2px solid #34495e",
            borderLeft:"2px solid #34495e",
            borderTop:"2px solid #34495e",
            borderBottom:"2px solid #34495e",
            //pointerEvents: "none",

          }
        },

        MUIDataTableHeadCell: {
          fixedHeader: {
            fontSize:12,
            padding: "5px 10px 5px 10px",
            //fontFamily:"Arial, Verdana, Sans-serif",
            marginBottom:10,
            marginRight:10,
            borderRight:"1px solid grey",
            borderLeft:"1px solid grey",
            borderTop:"1px solid grey",
            backgroundColor:"#b1bfca",
            fontWeight:"bold"
          }
        },
        MUIDataTableBodyCell: {
          root: {
            padding: "5px",
            fontSize:10,
            borderRight:"1px solid grey",
            borderLeft:"1px solid grey",
            borderTop:"1px solid grey",
            borderBottom:"1px solid grey",
            textAlign:"",
          },

        }
      }
    } as ThemeOptions);
  }

  public insertDataToDb(){
    console.log(this.props.data);
    let data = (["id","mANUFACTURER_ID"].map((item: any) => {
      return this.props.data.map((element:any) => element[item]);
    }));
    //we are only getting indices of those rows whcich do not have empty value of Manufacturer Id.
    const indices = data[1].map((item:any, index:any) =>{ if(item != "") return index }).filter((elem:any) => elem != undefined)
    let rows = indices.map( (i:any) => [ data[0][i], data[1][i] ]);
    rows = rows.map( (item:any) => {
        return "(" + item[0] + "," + item[1] + ")";
    });
    console.log(rows);

    ipcRenderer.send("insertIntoTable", rows);
    console.log(data);
  }

  public showMUITable() {

    let columns = (this.props.columnLabels.map((item: any) => {
      const colVals = this.props.data.map((element:any) => element[item]);
        console.log(colVals);
        let col: any;
        col = {name: item, options:{display:true} };

        if (String(item) == "Manufacturer Address" ) {
          col["options"] = Object.assign({customBodyRender:this.customBodyRendererColumn},col["options"]);
        }
        return col;
    }));

    const rows = this.props.data.map((item: any) => (Object.values(item).map((i: any) => {
      if (typeof i === "object" && i !== null) {
        return String(Object.values(i).map( (rowItem: any) => (String(rowItem).replace(/,/g, ' ')  ) ));
      }else if (typeof i == "number") {
        return String(truncateDecimals(i,2));
      }else if (i == undefined){
        return "";
      }
      return String(i);
    })) );

    const data = [
        ...rows
    ];
    const options = {
      pagination: false,
      search: false,
      print: false,
      download: true,
      selectableRows: "none" as SelectableRows,
      selectableRowsHeader: false,
      selectableRowsOnClick: false,
      downloadOptions: {filename: "EquipmentList.csv", title:"Dialog", separator: ","}
    };

    return (
      <MuiThemeProvider theme={this.materialTheme()}>
        <MUIDataTable
          title={this.props.title}
          data={data}
          columns={columns as any}
          options={options}
        />
      </MuiThemeProvider>
    );
  }

  public render() {
    return (
      <>
      {this.showMUITable()}
      </>
    );
  }
}

export function stringManipulator(propertyNameBefore: any) {
  var propertyNameAfter: string = '';
  if (propertyNameBefore.charAt(1).match(/(?=[a-z])/)) {
    var x = propertyNameBefore.split(/(?=[A-Z])/);
  }
  else
    var x = propertyNameBefore.split("_");
  for (let i = 0; i < x.length; i++) {
    propertyNameAfter = propertyNameAfter + (x[i].charAt(0).toUpperCase() + x[i].slice(1).toLowerCase());
    if (i < x.length - 1) {
      propertyNameAfter = propertyNameAfter + " ";
    }
  }
  return propertyNameAfter;
}

export function truncateDecimals(number: number, digits: number) {
  var multiplier = Math.pow(10, digits),
      adjustedNum = number * multiplier,
      truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

  return truncatedNum / multiplier;
};
