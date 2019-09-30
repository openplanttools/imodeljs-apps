import * as React from "react";
import { AccessToken, ConnectClient, IModelQuery } from "@bentley/imodeljs-clients";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AuthorizedFrontendRequestContext,
  IModelConnection
} from "@bentley/imodeljs-frontend";
import { Table, stringManipulator } from "./Table";
import { ipcRenderer, Event } from "electron";
import {IModelApp} from "@bentley/imodeljs-frontend";
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
      //console.log("Manufacturer: ", manufacturer);
      const className = equipments[i]["className"].split('.')[1];
      equipments[i]["className"] = stringManipulator( className);
      console.log( equipments[i]["className"]);
      let manAddr = qResult != undefined ? qResult.find((item: any) => item.Name == manufacturer) : undefined;
      console.log(equipments[i]);
      if (manAddr) { equipments[i]["mANUFACTURER_ADDRESS"] = manAddr.Address; }
      else {equipments[i]["mANUFACTURER_ADDRESS"] = ""};

    }

    this.setState({ elements: equipments });

    //elementProps = await iModel.query("SELECT * FROM meta.ECPropertyDef");
    //for await (const item of elementProps) {
      //console.log(item);
      //console.log(item["mANUFACTURER"]);
      //console.log(item);
    //}

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

  public renderTable() {
    if (this.state && this.state.elements && this.state.iModelConnection && this.state.databaseResult) {
      return (
        <Table
          data={this.state.elements} iModelConn={this.state.iModelConnection} dbResult={this.state.databaseResult}
        />
      );
    }
    return " ";
  }

  public showSpinner() {
    if (!this.state || !this.state.elements){
      return <span className="open-imodel"><Spinner size={SpinnerSize.Large} /></span>;
    }
    return <></>;
  }

  public render() {
    return (
        <>
        {this.showSpinner()}
        {this.renderTable()}
        </>
    );
  }
}
