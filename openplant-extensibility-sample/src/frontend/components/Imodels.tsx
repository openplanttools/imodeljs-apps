import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  IModelConnection
} from "@bentley/imodeljs-frontend";
import { Table, stringManipulator } from "./Table";
import { ipcRenderer, Event } from "electron";
import { Spinner, SpinnerSize } from "@bentley/ui-core";
import { sidebarList} from "./Sidebar";
import * as Settings from "../../common/Settings.json"

interface PageState {
  projectId?: any;
  iModels: any;
  selectediModelId: " ";
  projects: any;
  elements: any;
  iModelId?: any;
  databaseResult: any;
  colHeaders:any;
  hiddenColumns:any;
  columnLabels:any;
}

interface PageProps {
  displayData:any;
  className:any;
  imodelConnection:IModelConnection;
}

export class Page extends React.Component<PageProps, PageState> {
  public userOwnedIds: any;
  public ownerNames: any;

  constructor(props: any) {
    super(props);
  }

  public async componentDidMount () {
    await this.connectWithDb();
  }

  public async componentDidUpdate(prevProps:any){
    console.log(prevProps.className,"  ", this.props.className);
    if (prevProps.className != this.props.className){
      console.log("Inside check");
      await this.connectWithDb();
    }
  }

  public async retriveColumnHeaders(iModel:any, schemaName:any , className:any){
    let columns = [];
    let query = `SELECT p.name, p.displaylabel FROM ECDbMeta.ECPropertyDef p
    JOIN ECDbMeta.ECClassDef c USING ECDbMeta.ClassOwnsLocalProperties
    JOIN ECDbMeta.ECSchemaDef s USING ECDbMeta.SchemaOwnsClasses
    WHERE s.Name = '${schemaName}' AND c.Name = '${className}'`
    console.log( query );
    let elementProps = await iModel.query( query );
    for await (const item of elementProps) {
      columns.push(item);
    }
    return columns;
  }

  // column labels for all the properties against a schema irrespective of a class.
  public async retriveColumnHeadersLabels(iModel:any, schemaName:any){
    let columnLabels = [];
    let query = `SELECT distinct p.name, p.displaylabel FROM ECDbMeta.ECPropertyDef p
    JOIN ECDbMeta.ECClassDef c USING ECDbMeta.ClassOwnsLocalProperties
    JOIN ECDbMeta.ECSchemaDef s USING ECDbMeta.SchemaOwnsClasses WHERE s.Name = '${schemaName}'`
    console.log( query );
    let elementProps = await iModel.query( query );
    for await (const item of elementProps) {
      columnLabels.push(item);
    }
    return columnLabels;
  }

  public async connectWithDb() {
      const imodel = this.props.imodelConnection;
      console.log("Connection ", imodel);
      const headers = await this.retriveColumnHeaders(imodel, Settings.schemaName, this.props.className);
      console.log("HEADER: ", headers);

      const colLabels = await this.retriveColumnHeadersLabels(imodel, Settings.schemaName);

      let instances = [];
      let queryRows = "SELECT * FROM "+ Settings.schemaName + "." + this.props.className;
      let elementProps = await imodel.query(queryRows );
      for await (const item of elementProps) {
        instances.push(item);
      }
      console.log(instances);

      const sql = "SELECT * from " + Settings.vendorTableName;
      let qResult: any = [];
      await new Promise(resolve => {
        ipcRenderer.send("executeQuery", sql);
        ipcRenderer.on("readResultSet", (event: Event, resultSet: any) => {
          console.log(event);
          if (resultSet && resultSet.length > 0) {
            resultSet.forEach((row: any) => {
              console.log(row);
            });
            resolve(resultSet);
          }
          console.log(resultSet);
        });
      }).then(result => qResult = result);

      for (let i = 0; i < instances.length; ++i) {
        let manufacturer = instances[i]["mANUFACTURER"];
        const className = instances[i]["className"].split('.')[1];
        instances[i]["className"] = stringManipulator( className);

        let manAddr = qResult != undefined ? qResult.find((item: any) => item.Name == manufacturer) : undefined;
        if (manAddr) {
          instances[i]["mANUFACTURER_ADDRESS"] = manAddr.Address;
          instances[i]["mANUFACTURER_ID"] = manAddr.Id
        }
        else {
          instances[i]["mANUFACTURER_ADDRESS"] = "";
          instances[i]["mANUFACTURER_ID"] = "";
        };
      }

      let uniqueCols = [...new Set(...instances.map((element: any) => (Object.keys(element) )))];
      console.log(uniqueCols);
      const vcCols = ["id", "mANUFACTURER_ID"];
      if (Settings.schemaName == "ProcessFunctional"){
        uniqueCols = this.getColumnNamesForDisplay(Array.from(new Set(uniqueCols.concat(headers.map((instance:any) => instance["name"])))));
      }

      let headersName = headers.map((prop: any) => prop["name"]);
      headersName = this.getColumnNamesForDisplay(headersName);
      console.log("HEADERS NAME ", headersName);
      let hiddenColumns = headersName.filter((prop: any) =>  !uniqueCols.map((item: any) => item.toLowerCase()).includes(prop.toLowerCase()));
      hiddenColumns = [...hiddenColumns, ...vcCols];
      instances = this.processInstances(instances, [ ...new Set(uniqueCols.concat(hiddenColumns))]);

      console.log("Hidden Columns: ",hiddenColumns);
      console.log(uniqueCols);
      console.log(instances);

      const columnLabels = uniqueCols.map((colName: any) => {
        let cName = colLabels.filter((col: any) => col.name == colName);
        if (cName.length > 0 ){
          return cName[0].displayLabel;
        }
        return stringManipulator(colName);
      });

      console.log("Column Labels", columnLabels);
      this.setState({ elements: instances, colHeaders:uniqueCols, databaseResult: qResult, hiddenColumns, columnLabels  });
  }

  public processInstances(dataTable:any, uniqueCols:any) {
    console.log("UNIQUE ",uniqueCols);
    let properties:any ;
    let elems:any;
    elems = dataTable.map((element: any) => {
      properties = uniqueCols.filter((prop: any) =>  !Object.keys(element).includes(prop));
      console.log("   KEYS ",Object.keys(element) )
      console.log("   PROPERTIES ", properties);
      properties.map((prop: any) => {

        element[prop] = "";
      });
      let orderedElement:any ={};
      uniqueCols.forEach((key: any) => {
        orderedElement[key] = element[key];
      });
      return orderedElement;
    });
    console.log("ELEMENTS ", elems);
    return elems;
  }

  public getColumnNamesForDisplay(keys:any){
    console.log(keys);
    const colsFromFile = this.props.displayData;
    const cKeys = keys.map((item:any) => item.toLowerCase().replace(/\s/g, '').replace(/_/g, ''));
    console.log(cKeys);
    console.log(colsFromFile);
    const indices =  colsFromFile.filter((v:any) => {
      let ind = cKeys.findIndex( (value:any) => v == value );
      if( ind != -1 ) { return true;} return false;
    }).map((value:any) => {
      return cKeys.findIndex((v:any) => v == value)
    })
    const cols = indices.map((ind:any) => keys[ind]);
    console.log(cols);
    return cols;
  }

  public renderTable() {
    if (this.state && this.state.elements && this.state.databaseResult && this.state.colHeaders && this.state.hiddenColumns && this.state.columnLabels) {
      console.log("RENDER TABLE------", this.state.elements);
      console.log("RENDER TABLE------", this.state.colHeaders);
      console.log(sidebarList,"  ", Settings.classNames.indexOf(this.props.className), " ", this.props.className);
      const title = sidebarList[Settings.classNames.indexOf(this.props.className)] + " List";
      return (
        <Table
          key={this.props.className}
          data={this.state.elements}
          dbResult={this.state.databaseResult}
          title={title}
          colHeaders={this.state.colHeaders}
          hiddenColumns={this.state.hiddenColumns}
          columnLabels={this.state.columnLabels}
        />
      );
    }
    return <span className="open-imodel"><Spinner size={SpinnerSize.Large} /></span>;
  }

  public render() {
    return (
        <>
        {this.renderTable()}
        </>
    );
  }
}
