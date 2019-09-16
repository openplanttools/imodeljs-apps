import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ipcRenderer, Event } from "electron";

ipcRenderer.on("readResultSet", (event: Event, resultSet: any) => {
  console.log(event);
  if (resultSet && resultSet.length > 0) {
    resultSet.forEach((row: any) => {
      console.log(row);
    });
  }
  console.log(resultSet);
});

interface LocksState {
  checkBoxes: [
    {
      checked: boolean;
      name: any;
    }
  ];
}

interface LocksProps {
  locks: any;
  allLocks: boolean;
  selectedbriefcaseId: any;
}

export class Locks extends React.Component<LocksProps, LocksState> {
  constructor(props: any) {
    super(props);
  }

  /*public componentWillMount() {
    let cboxes: any = [];
    if (this.props.locks) {
      for (let i = 0; i < this.props.locks.instances.length; ++i) {
        cboxes.push({
          checked: false,
          name: this.props.locks.instances[i].instanceId
        });
      }
      this.setState({ checkBoxes: cboxes });
    }
  }*/

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
    this.setState({ checkBoxes: checkedBoxes }, () => {
      console.log(this.state.checkBoxes);
    });
  }

  public getLocks() {
    const sql = `SELECT * from Person`;
    ipcRenderer.send("executeQuery", sql);

    let locksToRender: any;
    let fil: any = [];
    fil = this.props.locks;
    if (!this.props.allLocks) {
      const filteredBcases = this.props.locks.instances.filter(
        (m: any) => m.properties.BriefcaseId == this.props.selectedbriefcaseId
      );
      fil = fil["instances"] = filteredBcases;
    }
    // tslint:disable-next-line:no-console
    console.log(fil);

    if (fil != undefined) {
      locksToRender = fil.map((bcases: any) => (
        <tr key={bcases.id}>
          <td> {bcases.id} </td>
          <td> {bcases.classFullName} </td>
          <td> {bcases.dEVICE_TYPE_CODE} </td>
          <td> {bcases.nUMBER} </td>
          <td> {bcases.model} </td>
        </tr>
      ));
    } else {
      locksToRender = <span></span>;
    }
    console.log(locksToRender);
    return locksToRender;
  }

  public render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Instance Id</th>
            <th scope="col">Class Name</th>
            <th scope="col">Device Type Code</th>
            <th scope="col">Number</th>
            <th scope="col">Model</th>
          </tr>
        </thead>
        <tbody>{this.getLocks()}</tbody>
      </table>
    );
  }
}
