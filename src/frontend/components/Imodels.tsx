import * as React from "react";
import { AccessToken, ConnectClient, IModelQuery } from "@bentley/imodeljs-clients";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AuthorizedFrontendRequestContext,
  IModelConnection
} from "@bentley/imodeljs-frontend";
import { Table } from "./Table";
import { ipcRenderer, Event } from "electron";
import {IModelApp} from "@bentley/imodeljs-frontend";

interface PageState {
  projectId: any;
  iModels: any;
  selectediModelId: " ";
  projects: any;
  elements: any;
  iModelId: any;
}

interface PageProps {
  token: AccessToken;
  projectName: any;
  imodelName: any;
}
export class Page extends React.Component<PageProps, PageState> {
  public userOwnedIds: any;
  public ownerNames: any;

  constructor(props: any) {
    super(props);
    // this.handleChangeProjectId.bind(this);
    // this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.oniModelSelectChange = this.oniModelSelectChange.bind(this);
  }

  public handleSubmit(e: any) {
    e.preventDefault();
    this.fetchImodels();
  }

  private async getIModelInfo(projectName: string, imodelName: string): Promise<{ projectId: string, imodelId: string }> {
    // Requests a context and connection client to access the iModelHub, and retrieves a list of projects
    const requestContext = await AuthorizedFrontendRequestContext.create();
    const connectClient = new ConnectClient();

    // Try catch block gets a project, if the project doesnt exist, throw an alert
    let currentProject: any;
    try {
      currentProject = await connectClient.getProject(requestContext, { $filter: `Name+eq+'${projectName}'` });
    } catch (e) {
      // alert(`Project with name "${projectName}" does not exist.`);
      throw new Error(`Project with name "${projectName}" does not exist.`);
    }

    // Creates a new iModelQuery to connect to the database, and queries with specified context and project
    // Then resolves that promise and sends that information to constiuent components that need the data
    const imodelQuery = new IModelQuery();
    imodelQuery.byName(imodelName);

    // Gets the specific imodel, returns the project and imodel wsdId's to the functions handling initial startup/rendering
    const imodels = await IModelApp.iModelClient.iModels.get(requestContext, currentProject.wsgId, imodelQuery);
    if (imodels.length === 0) {
      // alert(`iModel with name "${imodelName}" does not exist in project "${projectName}".`);
      throw new Error(`iModel with name "${imodelName}" does not exist in project "${projectName}".`);
    }

    this.setState({projectId: currentProject.wsgId, iModelId:  imodels[0].wsgId}, async () => {
      await this.connectWithDb(currentProject.wsgId, imodels[0].wsgId);
    });
    // Returns
    return { projectId: currentProject.wsgId, imodelId: imodels[0].wsgId };
  }

  public async componentWillMount () {
    this.getIModelInfo(this.props.projectName, this.props.imodelName);
  }

  public fetchImodels() {
    const http =
      "https://imodelhubapi.bentley.com/sv1.1/Repositories/Context--" +
      this.state.projectId +
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
    // tslint:disable-next-line:no-console
    console.log(e.currentTarget.value);
    this.setState({ projectId: e.currentTarget.value }, () => {
      this.fetchImodels();
    });
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
    let equipments = [];
    let elementProps = await iModel.query("SELECT * FROM ProcessPhysical:EQUIPMENT");
    for await (const item of elementProps) {
      console.log(item);
      console.log(item["mANUFACTURER"]);
      equipments.push(item);
    }
    console.log(elementProps);
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
    console.log(qResult);
    const manAddr = qResult != undefined ? qResult.find((item: any) => item.Name == "Manu1") : "";
    console.log(manAddr);
    equipments.map((item) => item["mANU_ADDRESS"] = manAddr.Address);
    console.log(equipments);
    this.setState({ elements: equipments });

    if (iModel) await iModel.close();
  }

  public async oniModelSelectChange(e: any) {
    const v = e.target.value;

    if (this.state && this.state.iModels) {
      this.setState({ selectediModelId: v }, async () => {

        if (this.state && this.state.projectId) {
        }
      });
    }
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

    return <span></span>;
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

    return <span></span>;
  }

  public renderTable() {
    if (this.state && this.state.elements) {
      return (
        <Table
          data={this.state.elements}
        />
      );
    }
    return " ";
  }

  public render() {
    return (
      <div style={{ margin: "0 auto", marginTop: 50 }} className=".bg-light">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>{this.getProjectUI()}</div>
          <div>{this.getImodelsUI()}</div>
        </form>
        <div className="pre-scrollable" style={{ maxWidth: 800, overflowX: "auto" }}>{this.renderTable()}</div>
      </div>
    );
  }
}
