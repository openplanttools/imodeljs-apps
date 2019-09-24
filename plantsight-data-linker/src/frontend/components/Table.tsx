import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";

interface TableProps {
  data: any;
}

export class Table extends React.Component<TableProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public getRows() {
    let rows: any;
    let data: any = [];
    data = this.props.data;
    // tslint:disable-next-line:no-console
    console.log(data);

    if (data != undefined) {
      rows = data.map((bcases: any) => (
        <tr key={bcases.id}>
          <td> {bcases.className} </td>
          <td> {bcases.userLabel} </td>
          <td> {bcases.dEVICE_TYPE_CODE} </td>
          <td> {bcases.nUMBER} </td>
          <td> {bcases.sTATE} </td>
          <td> {bcases.mANUFACTURER} </td>
          <td className="table-secondary"> {bcases.mANU_ADDRESS} </td>
          <td> {bcases.sUNIT} </td>
          <td> {bcases.sERVICE} </td>
          <td> {bcases.sPLANT_AREA} </td>
        </tr>
      ));
    } else {
      rows = <span></span>;
    }
    console.log(rows);
    return rows;
  }

  public render() {
    return (
      <table className="table" style={{ marginTop: 50 }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Class Name</th>
            <th scope="col">User Label</th>
            <th scope="col">Device Type Code</th>
            <th scope="col">Number</th>
            <th scope="col">State</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Manufacturer Address</th>
            <th scope="col">Unit</th>
            <th scope="col"> Service</th>
            <th scope="col"> Plant Area </th>
          </tr>
        </thead>
        <tbody>{this.getRows()}</tbody>
      </table>
    );
  }
}
