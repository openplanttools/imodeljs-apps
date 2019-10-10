import * as React from "react";
import { AccessToken, ConnectClient } from "@bentley/imodeljs-clients";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AuthorizedFrontendRequestContext,
  IModelConnection
} from "@bentley/imodeljs-frontend";
import { Table, stringManipulator } from "./Table";
import { ipcRenderer, Event } from "electron";
import { Spinner, SpinnerSize } from "@bentley/ui-core";

interface PageState {
  projectId: any;
  iModels: any;
  selectediModelId: " ";
  projects: any;
  elements: any;
  iModelId: any;
  iModelConnection: any;
  databaseResult: any;
}

interface PageProps {
  token: AccessToken;
  displayColumns:any;
}
export class Page extends React.Component<PageProps, PageState> {
  public userOwnedIds: any;
  public ownerNames: any;

  constructor(props: any) {
    super(props);
    // this.handleChangeProjectId.bind(this);
    // this.handleSubmit.bind(this);
    this.oniModelSelectChange = this.oniModelSelectChange.bind(this);
  }

  public async  componentDidMount() {

    const requestContext = await AuthorizedFrontendRequestContext.create();
    const connectClient = new ConnectClient();

    // Try catch block gets a project, if the project doesnt exist, throw an alert
    let currentProjects: any;
    try {
      currentProjects = await  connectClient.getProjects(requestContext, {isMRU: true});
      this.setState({projects: currentProjects});
      // tslint:disable-next-line:no-console
      console.log(currentProjects);
    } catch (e) {
      // alert(`Project with name "${projectName}" does not exist.`);
      throw new Error(`Project with name does not exist.`);
    }

  }

  public fetchImodels(pid: any) {
    const http =
      "https://imodelhubapi.bentley.com/sv1.1/Repositories/Context--" +
      pid +
      "/ContextScope/iModel";

    // FETCHING IMODELS FROM THE PORJECT

    fetch(http, {
      method: "GET",
      headers: new Headers({
        Authorization: this.props.token.toTokenString()
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          iModels: data
        });
      })
      .catch(err => console.log(err));
  }

  public getIModelsList = () => {
    if (this.state && this.state.iModels) {
      const iModelsToRender = this.state.iModels.instances.map(
        (models: any) => (
          <option key={models.instanceId} value={models.instanceId}>
            {models.properties.Name}
          </option>
        )
      );
      const selectList = [];
      for (let i = 0; i < this.state.iModels.length; i++) {
        selectList.push(
          <option
            key={this.state.iModels.instances[i].instanceId}
            value={this.state.iModels.instances[i].instanceId}
          >
            {this.state.iModels.instances[i].properties.Name}
          </option>
        );
      }
      return iModelsToRender;
    }
    return "";
  };

  public getProjectsList = () => {
    if (this.state && this.state.projects) {
      const projectsToRender = this.state.projects.map((project: any) => (
        <option key={project.wsgId} value={project.wsgId}>
          {project.name}
        </option>
      ));
      return projectsToRender;
    }
    return "";
  };

  public handleChangeProjectId(e: any) {
    e.preventDefault();
    this.setState({ projectId: e.currentTarget.value });
  }

  public onProjectSelectChange(e: any) {
    e.preventDefault();
    const pId = e.currentTarget.value;
    // tslint:disable-next-line:no-console
    console.log(e.currentTarget.value);
    this.fetchImodels(pId);
    this.setState({ projectId: e.currentTarget.value })
  }

  public getProjectUI() {
    if (this.state && this.state.projects) {
      return (
        <div className="form-group">
          <label
            style={{ marginRight: 20 }}
            className="font-weight-bold"
            htmlFor="projectList"
          >
            Project List
          </label>
          <select
            onChange={e => this.onProjectSelectChange(e)}
            id="so"
            style={{ width: 350 }}
            className="custom-select custom-select-sm "
          >
            {/* <option value="None">None</option> */}
            <option style={{ backgroundColor: "#00904444" }}></option>
            {this.getProjectsList()}
          </select>
        </div>
      );
    }

    return <></>;
  }

  public getImodelsUI() {
    if (this.state && this.state.iModels) {
      return (
        <div className="form-group">
          <label
            style={{ marginRight: 20 }}
            className="font-weight-bold"
            htmlFor="projectList"
          >
            Imodels List
          </label>
          <select
            onChange={e => this.oniModelSelectChange(e)}
            id="so"
            style={{ width: 350 }}
            className="custom-select custom-select-sm "
          >
            {/* <option value="None">None</option> */}
            <option style={{ backgroundColor: "#00904444" }}></option>
            {this.getIModelsList()}
          </select>
        </div>
      );
    }

    return <></>;
  }


  public getprojectId() {
    if (this.state) {
      return this.state.projectId;
    }
    return "";
  }

  public getselectedImodelId() {
    if (this.state && this.state.iModels) {
      return this.state.projectId;
    }
    return "";
  }


  public getImodels() {
    if (this.state && this.state.iModels) {
      return this.state.iModels;
    }
    return "";
  }

  public async connectWithDb(projectId: any, iModelId: any) {
    const iModel = await IModelConnection.open(
      projectId,
      iModelId
    );
    console.log("Imodel Connection: ", iModel);
    this.setState({iModelConnection:iModel});
    let equipments = [];
    let elementProps = await iModel.query("SELECT * FROM ProcessPhysical:EQUIPMENT");
    for await (const item of elementProps) {
      //console.log(item);
      //console.log(item["mANUFACTURER"]);
      equipments.push(item);
    }
    console.log(equipments);
    const sql = `SELECT * from Manufacturer`;
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
    //console.log(qResult);
    this.setState({databaseResult: qResult});

    for (let i = 0; i < equipments.length; ++i) {
      let manufacturer = equipments[i]["mANUFACTURER"];
      const className = equipments[i]["className"].split('.')[1];
      equipments[i]["className"] = stringManipulator( className);

      let manAddr = qResult != undefined ? qResult.find((item: any) => item.Name == manufacturer) : undefined;
      if (manAddr) { equipments[i]["mANUFACTURER_ADDRESS"] = manAddr.Address; }
      else {equipments[i]["mANUFACTURER_ADDRESS"] = ""};
    }

    this.setState({ elements: equipments });

    if (iModel) await iModel.close();
  }

  public async oniModelSelectChange(e: any) {
    const imodelID = e.target.value;

    if (this.state && this.state.iModels) {
      await this.connectWithDb(this.state.projectId, imodelID);
      this.setState({ selectediModelId: imodelID }, async () => {

        if (this.state && this.state.projectId) {
        }
      });
    }
  }

  public renderTable() {
    if (this.state && this.state.elements && this.state.iModelConnection && this.state.databaseResult) {
      return (
        <Table
          data={this.state.elements} iModelConn={this.state.iModelConnection} dbResult={this.state.databaseResult} displayColumns={this.props.displayColumns}
        />
      );
    }
    return " ";
  }

  public showSpinner() {
    if (!this.state || !this.state.elements || !this.state.projectId || !!this.state.selectediModelId){
      return <span className="open-imodel"><Spinner size={SpinnerSize.Large} /></span>;
    }
    return <></>;
  }

  public render() {
    return (
        <>

        {this.getProjectUI()}
        {this.getImodelsUI()}
        {this.renderTable()}
        </>
    );
  }
}
