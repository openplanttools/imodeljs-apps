import * as React from "react";
import { AccessToken, ConnectClient } from "@bentley/imodeljs-clients";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AuthorizedFrontendRequestContext,
  IModelConnection
} from "@bentley/imodeljs-frontend";
import { Locks } from "./Locks";

interface PageState {
  allLocks: boolean;
  projectId: " ";
  iModels: any;
  selectediModelId: " ";
  selectedbriefcaseId: " ";
  briefcases: any;
  locks: any;
  deleteResult: any;
  projects: any;
  displayableLocks: any;
  userInfo: any;
  checkBoxes: [
    {
      checked: boolean;
      name: any;
    }
  ];
  locksLength: any;
  elements: any;
}

interface PageProps {
  token: AccessToken;
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
    this.onbriefcaseSelectChange = this.onbriefcaseSelectChange.bind(this);
  }

  public handleSubmit(e: any) {
    e.preventDefault();
    this.fetchImodels();
  }

  public async componentDidMount() {
    const requestContext = await AuthorizedFrontendRequestContext.create();
    const connectClient = new ConnectClient();

    // Try catch block gets a project, if the project doesnt exist, throw an alert
    let currentProjects: any;
    try {
      currentProjects = await connectClient.getProjects(requestContext, {
        isMRU: true
      });
      this.setState({ projects: currentProjects });
      // tslint:disable-next-line:no-console
      console.log(currentProjects);
    } catch (e) {
      // alert(`Project with name "${projectName}" does not exist.`);
      throw new Error(`Project with name does not exist.`);
    }
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

  public async deleteLockById(selectedId: any) {
    const http =
      "https://imodelhubapi.bentley.com/sv1.1/Repositories/iModel--" +
      this.state.selectediModelId +
      "/iModelScope/Lock/" +
      selectedId;
    console.log(http);
    // FETCHING IMODELS FROM THE PORJECT

    return fetch(http, {
      method: "DELETE",
      headers: new Headers({
        Authorization: this.props.token.toTokenString()
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          briefcases: data
        });
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  public async fetchBriefcases(selectedId: any) {
    const http =
      "https://imodelhubapi.bentley.com/sv1.1/Repositories/iModel--" +
      selectedId +
      "/iModelScope/Briefcase";
    console.log(http);
    // FETCHING IMODELS FROM THE PORJECT

    return fetch(http, {
      method: "GET",
      headers: new Headers({
        Authorization: this.props.token.toTokenString()
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          briefcases: data
        });
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  public async fetchLocks() {
    const http =
      "https://imodelhubapi.bentley.com/sv1.1/Repositories/iModel--" +
      this.state.selectediModelId +
      "/iModelScope/Lock";
    console.log(http);
    // FETCHING IMODELS FROM THE PORJECT

    return fetch(http, {
      method: "GET",
      headers: new Headers({
        Authorization: this.props.token.toTokenString()
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          locks: data
        });
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  public async fetchUserInfo(selectedId: any) {
    const http =
      "https://imodelhubapi.bentley.com/sv1.1/Repositories/iModel--" +
      selectedId +
      "/iModelScope/UserInfo";
    console.log(http);
    // FETCHING IMODELS FROM THE PORJECT

    return fetch(http, {
      method: "GET",
      headers: new Headers({
        Authorization: this.props.token.toTokenString()
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          userInfo: data
        });
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  public async deleteLocks(exp: any) {
    let http = "";
    if (exp == "Delete") {
      http =
        "https://imodelhubapi.bentley.com/sv1.1/Repositories/iModel--" +
        this.state.selectediModelId +
        "/iModelScope/Lock/DeleteAll-" +
        this.state.selectedbriefcaseId;
    } else {
      http =
        "https://imodelhubapi.bentley.com/sv1.1/Repositories/iModel--" +
        this.state.selectediModelId +
        "/iModelScope/Lock/" +
        exp;
      console.log(http);
    }
    // FETCHING IMODELS FROM THE PORJECT

    return fetch(http, {
      method: "DELETE",
      headers: new Headers({
        Authorization: this.props.token.toTokenString()
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          deleteResult: data
        });
        if (data.changedInstance.change) {
          if (exp == "Delete") {
            const arr: any = [];
            arr["instances"] = this.state.locks.instances.filter(
              (item: any) =>
                item.properties.BriefcaseId != this.state.selectedbriefcaseId
            );
            console.log("Array after UPDATE");
            console.log(arr);
            if (arr && this.state.locks) {
              this.setState({ locks: arr }, () => {
                if (this.state.locks) {
                  const cond =
                    this.state.locks.instances.length == this.state.locksLength;
                  console.log(this.state.locks);
                  console.log(this.state.locks.length);
                  console.log(this.state.locksLength);
                  this.getTable(!cond);
                }
              });
            }
          } else {
            const arr: any = [];
            arr["instances"] = this.state.locks.instances.filter(
              (item: any) => item.instanceId != exp
            );
            console.log("Array after UPDATE");
            console.log(arr);
            if (arr) {
              this.setState({ locks: arr }, () => {
                if (this.state.locks) {
                  const cond =
                    this.state.locks.instances.length == this.state.locksLength;
                  console.log(this.state.locks);
                  console.log(this.state.locks.length);
                  console.log(this.state.locksLength);
                  this.getTable(cond);
                }
              });
            }
          }
        }
        console.log(data);
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

  public getBriefcasessList() {
    if (this.state && this.state.briefcases) {
      const briefcasesToRender = this.state.briefcases.instances.map(
        (bcases: any) => (
          <option key={bcases.instanceId} value={bcases.instanceId}>
            {bcases.instanceId}
          </option>
        )
      );
      const selectList = [];
      for (let i = 0; i < this.state.briefcases.length; i++) {
        selectList.push(
          <option
            key={this.state.briefcases.instances[i].instanceId}
            value={this.state.briefcases.instances[i].instanceId}
          >
            {this.state.briefcases.instances[i].instanceId}
          </option>
        );
      }
      return briefcasesToRender;
    }
    return "";
  }

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
    this.setState(
      { locks: null, briefcases: null, displayableLocks: null },
      () => {
        this.getTable(false);
      }
    );
  }

  public getdeleteResult() {
    if (this.state) {
      if (this.state.deleteResult) {
        if (this.state.deleteResult.errorMessage) {
          return this.state.deleteResult.errorMessage;
        } else if (this.state.deleteResult.changedInstance.change) {
          return this.state.deleteResult.changedInstance.change;
        }
      }
    }
    return "";
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

  public getselectedBriefcaseId() {
    if (this.state && this.state.selectedbriefcaseId) {
      return true;
    }
    return false;
  }

  public getImodels() {
    if (this.state && this.state.iModels) {
      return this.state.iModels;
    }
    return "";
  }

  public async oniModelSelectChange(e: any) {
    const v = e.target.value;

    if (this.state && this.state.iModels) {
      this.setState({ selectediModelId: v }, () => {
        this.fetchUserInfo(v).then(() => {
          this.fetchBriefcases(v).then(() =>
            this.fetchLocks().then(async () => {
              const filteredList: any = [];
              filteredList["instances"] = this.state.locks.instances.filter(
                (id: any) => id.properties.BriefcaseId != 0
              );
              // tslint:disable-next-line:no-console
              console.log(filteredList);

              if (this.state && this.state.briefcases && this.state.userInfo) {
                this.userOwnedIds = this.state.briefcases.instances.map(
                  (a: any) => ({
                    bid: [a.instanceId],
                    uid: [a.properties.UserOwned]
                  })
                );
                // tslint:disable-next-line:no-console
                console.log("User Ids");
                // tslint:disable-next-line:no-console
                console.log(this.userOwnedIds);

                const bid = this.userOwnedIds.map((id: any) =>
                  id.bid[0].toString()
                );
                const uid = this.userOwnedIds.map((id: any) =>
                  id.uid[0].toString()
                );
                // tslint:disable-next-line:no-console
                console.log(bid);
                // tslint:disable-next-line:no-console
                console.log(uid);

                for (let i = 0; i < uid.length; i++) {
                  const properties = this.state.userInfo.instances.filter(
                    (id: any) => id.instanceId == uid[i]
                  )[0].properties;
                  // tslint:disable-next-line:no-console
                  console.log(properties);
                  const name = properties.Name.concat(" ").concat(
                    properties.Surname
                  );
                  // tslint:disable-next-line:no-console
                  console.log(name);
                  const locksList = this.state.locks.instances.filter(
                    (id: any) => id.properties.BriefcaseId == bid[i]
                  );
                  // tslint:disable-next-line:no-console
                  console.log(locksList);

                  if (locksList) {
                    for (let j = 0; j < locksList.length; j++) {
                      const propHandler = locksList[j].properties;
                      // tslint:disable-next-line:no-console
                      console.log(propHandler);
                      propHandler["UserName"] = name;
                      propHandler["Email"] = properties.Email;
                      // tslint:disable-next-line:no-console
                      console.log(propHandler);
                    }
                  }
                }
              }

              if (this.state && this.state.projectId) {
                const iModel = await IModelConnection.open(
                  this.state.projectId,
                  v
                );
                console.log("Imodel Connection: ", iModel);

                let elementProps = await iModel.elements.queryProps({
                  from: "bis.Element"
                });
                elementProps = elementProps.filter(
                  row =>
                    row["classFullName"] ==
                    "ProcessFunctional:HORIZONTAL_VESSEL"
                );
                console.log(elementProps);
                this.setState({ elements: elementProps });
                if (iModel) await iModel.close();
              }

              this.setState({ locks: filteredList }, () => {
                let cboxes: any = [];
                for (let i = 0; i < this.state.locks.instances.length; ++i) {
                  cboxes.push({
                    checked: false,
                    name: this.state.locks.instances[i].instanceId
                  });
                }
                this.setState({ checkBoxes: cboxes });
              });
              this.setState({ allLocks: true });
            })
          );
        });
      });
    }
  }

  public onbriefcaseSelectChange(e: any) {
    if (this.state && this.state.briefcases) {
      this.setState({ selectedbriefcaseId: e.target.value }, () => {
        this.getTable(true);
        this.setState({ allLocks: false });
      });
    }
  }

  public handleCheckboxClick(e: any) {
    console.log(e.target.name);
    console.log(e.target.checked);

    let checkedBoxes: any = [];
    if (this.state && this.state.checkBoxes) {
      checkedBoxes = this.state.checkBoxes;
    }

    const index = checkedBoxes.findIndex(
      (ch: any) => ch.name === e.target.name
    );
    if (index != -1) {
      checkedBoxes[index].checked = !checkedBoxes[index].checked;
    }
    const cond = this.state.locks.instances.length == this.state.locksLength;
    this.setState({ checkBoxes: checkedBoxes }, () => {
      console.log(this.state.checkBoxes);
      this.getTable(!cond);
    });
  }

  public getCheckStatus(bid: any) {
    if (this.state && this.state.checkBoxes) {
      const cBox = this.state.checkBoxes.find(item => item.name == bid);
      if (cBox) {
        return true;
      }
    }
    return false;
  }

  public getTable(locksAgainstBid: boolean) {
    this.setState({ allLocks: false });
    let locksToRender: any = [];
    let fil: any = [];

    if (this.state && this.state.locks) {
      if (locksAgainstBid) {
        const filteredBcases = this.state.locks.instances.filter(
          (m: any) => m.properties.BriefcaseId == this.state.selectedbriefcaseId
        );
        fil = fil["instances"] = filteredBcases;
      } else {
        fil = this.state.locks.instances;
      }
      // tslint:disable-next-line:no-console
      console.log(fil);
      this.setState({ locksLength: fil.length });
      if (fil) {
        locksToRender = fil.map((bcases: any) => (
          <tr>
            <td> {bcases.instanceId} </td>
            <td> {bcases.properties.ObjectId} </td>
            <td> {bcases.properties.BriefcaseId} </td>
            <td> {bcases.properties.Email} </td>
            <td>
              {" "}
              <input
                name={bcases.instanceId}
                type="checkbox"
                checked={
                  this.state.checkBoxes.filter(
                    item => item.name == bcases.instanceId
                  )[0].checked
                }
                onChange={(e: any) => this.handleCheckboxClick(e)}
              />{" "}
            </td>
          </tr>
        ));
      }
      // tslint:disable-next-line:no-console
      console.log(locksToRender);
      const finalLocks = (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Instance Id</th>
              <th scope="col">Object Id</th>
              <th scope="col">Briefcase Id</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>{locksToRender}</tbody>
        </table>
      );
      this.setState({ displayableLocks: finalLocks });
    }
  }

  public getdisplayTable() {
    if (this.state && this.state.displayableLocks) {
      return this.state.displayableLocks;
    }
    return "";
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

  public getBriefcasesUI() {
    if (this.state && this.state.briefcases) {
      return (
        <div className="form-group">
          <label
            style={{ marginRight: 20 }}
            className="font-weight-bold"
            htmlFor="projectList"
          >
            Briefcases List
          </label>
          <select
            onChange={e => this.onbriefcaseSelectChange(e)}
            id="so"
            style={{ width: 350 }}
            className="custom-select custom-select-sm "
          >
            {/* <option value="None">None</option> */}
            <option style={{ backgroundColor: "#00904444" }}></option>
            {this.getBriefcasessList()}
          </select>
        </div>
      );
    }

    return <span></span>;
  }

  public async onDisplayLocksClick() {
    this.setState({ allLocks: true });
    this.getTable(false);
  }

  public async deleteSelected() {
    if (this.state && this.state.checkBoxes) {
      const deleteIds = this.state.checkBoxes.filter(
        item => item.checked == true
      );
      if (deleteIds) {
        for (let i = 0; i < deleteIds.length; ++i) {
          await this.deleteLocks(deleteIds[i].name);
        }
      }
    }
  }

  public renderLocks() {
    if (this.state && this.state.elements) {
      return (
        <Locks
          locks={this.state.elements}
          allLocks={true}
          selectedbriefcaseId={" "}
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
          <div>{this.getBriefcasesUI()}</div>
          <p>{this.getdeleteResult()}</p>
        </form>

        <div className="pre-scrollable">{this.renderLocks()}</div>
      </div>
    );
  }
}
