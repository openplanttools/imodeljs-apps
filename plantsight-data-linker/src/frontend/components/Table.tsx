import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import * as _ from "lodash";
import MUIDataTable, {SelectableRows} from "mui-datatables";
import * as path from "path";
import {remote} from "electron";
const electronFs = remote.require("fs");
const app = remote.app;
//import "materialize-css/dist/css/materialize.css";
//import "materialize-css/dist/js/materialize";
// import * as $ from "jquery";

const columnSettingPath = "\\..\\common\\ColumnSettings.json";
interface TableProps {
  data: any;
  iModelConn: any;
  dbResult: any;
}

interface TableState {
  elements: any;
  selectedColumns: [];
}

export class Table extends React.Component<TableProps, TableState> {
  constructor(props: any) {
    super(props);
  }

  public onColumnViewChange(changedColumn: string, action: string) {
    console.log(changedColumn, "   ", action);
    /*let jsonObject:any = [];
      electronFs.readFile(path.join(app.getAppPath(), columnSettingPath), (error: Error | null, data: any) => {
        if (error) {
          // tslint:disable-next-line:no-console
          console.log("error " + error);
        }
        console.log(data);
        if (data && data.length > 0) {
          jsonObject = JSON.stringify(data);
          console.log(jsonObject);
        }
      });
    if (action == "remove") {

      jsonObject.push(changedColumn);
      console.log(jsonObject);

    } else if (action == "add") {
      if(jsonObject) {
        jsonObject = jsonObject.filter((col: any) => col!= changedColumn);
        console.log(jsonObject);
      }

    }

    electronFs.writeFileSync(path.join(app.getAppPath(), columnSettingPath), JSON.stringify(jsonObject));*/

  }

  public setColumnDisplay(columns: any){
    console.log(app.getAppPath(), columnSettingPath);
      let jsonObject:any = [];
      electronFs.readFile(path.join(app.getAppPath(), columnSettingPath), (error: Error | null, data: any) => {
        if (error) {
          // tslint:disable-next-line:no-console
          console.log("error " + error);
        }
        console.log(data);
        if (data && data.length > 0) {
          jsonObject = JSON.stringify(data);
          console.log(jsonObject);
        }

      });
      if(jsonObject.length != 0) {
        let options = {display: false};
        jsonObject = jsonObject.map((col: any) => {
          if(columns.filter((c: any) => c.name == col).length > 0 ){
            console.log(col);
            columns.filter((c: any) => c.name == col)[0]["options"] = options;
          }

        });
      }
      return columns;
  }

  public showMUITable() {

    if (this.state && this.state.elements) {
      let columns = (Object.keys(this.state.elements[0]).map((item: any) => {
        console.log(item);
        let col;
        if (String(item) == "geometry" || String(item) == "geometryStream"|| String(item) == "bBoxHigh" || String(item) == "bBoxLow") {

          col =  {name: stringManipulator(item.toUpperCase()), options:{display:false} };
        }else {
          col = {name: stringManipulator(item.toUpperCase()), options:{display:true} };
        }

        return col;

      }));
      const rows = this.state.elements.map((item: any) => (Object.values(item).map((i: any) => {
        if (typeof i === "object" && i !== null) {
          return String(Object.values(i).map( (rowItem: any) => (String(rowItem).replace(/,/g, ' ')  )));
        }

        return String(i);

      })) );

      //columns = this.setColumnDisplay(columns);
      //console.log("Columns 1 ",columns);
      //console.log("Rows 1 ",rows);

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
        downloadOptions: {filename: "EquipmentList.csv", title:"Dialog", separator: ","},
        onColumnViewChange:this.onColumnViewChange
      };

      return (<MUIDataTable
        title={"Equipments List"}
        data={data}
        columns={columns as any}
        options={options}
      />);
    }
    return <></>;
  }

  public componentDidMount() {
    // Doing this becasue different elements have different properties, this distorted the data table.
    const unique = [...new Set(...this.props.data.map((element: any) => (Object.keys(element) )))];
      //console.log("Unique Columns ",unique);

      let properties:any ;
      let dataTable = this.props.data;
      const elems = dataTable.map((element: any) => {
        //element["geometry"] = "";
        //element["geometryStream"] = "";

        properties = unique.filter((prop: any)=>  !Object.keys(element).includes(prop));
        //console.log("Diff Properties  ", properties);

          properties.map((prop: any) => {
            //console.log("Element: ",element);
            element[prop] = "";
          });
          let orderedElement:any ={};
          Object.keys(element).sort().forEach((key: any) => {
            //console.log(element[key]);
            orderedElement[key] = element[key];
          });
          //console.log(orderedElement);
          return orderedElement;
      });
      //console.log(elems);
      //console.log(dataTable);
      this.setState({elements: elems});
  }

  public getRows() {
    let rows: any;
    let data: any = [];
    // tslint:disable-next-line:no-console
    console.log(data);

    if (this.state && this.state.elements) {
      data = this.state.elements;
      rows = data.map((element: any) => (
        <tr key={element.id}>
          {Object.values(element).map((value: any,index: number) =>  <td key={index}> {String(value)} </td>)}
        </tr>
      ));
    } else {
      rows = <></>;
    }
    console.log(rows);
    return rows;
  }

  public hideColumn() {
    if (this.state && this.state.elements && this.state.selectedColumns) {
      const cols = this.state.selectedColumns;
      let elems: any = [];
      console.log(cols);
      this.state.elements.map((element: any) => {
        let properties:any;
        let filteredElement = element;
        cols.map((col: any) => {
          properties = Object.keys(element).filter((value: any) =>  value != col);
          console.log(properties);
          filteredElement = _.pick(filteredElement,  properties);
        })
        elems.push(filteredElement);
      });
      this.setState({elements:elems});
      console.log(elems);
    }
  }

  public getColumns() {
    let cols: any;
    let data: any = [];
    // tslint:disable-next-line:no-console
    console.log(data);

    if (this.state && this.state.elements) {
      data = this.state.elements[0];
      cols =  Object.keys(data).map((prop: any, index) =>  <th key={index} scope="col"> {prop} </th>)

    } else {
      cols = <></>;
    }
    //console.log(cols);
    return cols;
  }

  public getSelectColumns() {
    if ((this.state) && (this.state.elements)) {
      const columnsToRender = (

        Object.keys(this.props.data[0]).map((col: any, index) => <option key={index} value={col}>{col}</option>));
      return (columnsToRender);
    }
    return ("");
  }

  public onColumnChange(e: any) {
    const options = e.target.options;

    let selectedItems:any =[];
    for (let i =0; i< options.length; ++i) {
      if (options[i].selected) {
      selectedItems.push(options[i].value);
      console.log(options[i].value);
      }
    }

    this.setState({selectedColumns: selectedItems});
  }

  public showColumn() {
    if (this.state && this.state.elements && this.state.selectedColumns) {
      const cols = this.state.selectedColumns;
      let elems: any = [];
      let stateElements = this.state.elements;
      console.log(cols);
      this.props.data.map((element: any, index: any) => {
        let properties:any;
        let filteredElement:any = [];
        cols.map((col: any) => {
          properties = Object.keys(element).filter((value: any) =>  value == col);
          console.log(properties);
          filteredElement.push(Object.assign(_.pick(element,  properties), stateElements[index]) );
        })
        elems.push(filteredElement[0]);
      });
      this.setState({elements:elems});
      console.log(elems);
    }
  }

  public changeValue(){
    if (this.state && this.state.elements) {

      let d = this.state.elements;
      console.log(d[0][Object.keys(d[0])[0]]);
      d[0][Object.keys(d[0])[0]] = "Hello";
      console.log(d[0][Object.keys(d[0])[0]]);
      this.setState({elements:d});
    }
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
