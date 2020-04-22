/*---------------------------------------------------------------------------------------------
* Copyright (c) 2020 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModalDialog.css";


interface ModalProps {

}

interface ModalState {
  selectedTableName: any;
  manufacturerColName: any;
  addressColName: any;

}

export class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: any) {
    super(props);
  }

  public showModal() {
    return (
      <>
        <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal2">
          Set Mapping
        </button>

        <div className="modal custom fade" id="myModal2" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 className="modal-title" id="myModalLabel">Mapping Dialog</h4>
              </div>
              <div className="modal-body">
              <div style={{display:"block"}}>
              <select>
              <option>1</option>
              </select>
              <button className="btn btn-primary btn-sm" > X </button>
              </div>
              <div className="content" style={{display:"block"}}>
              <select>
              <option>1</option>
              </select>
              <button className="btn btn-primary btn-sm" > X </button>
              </div>
              <div style={{display:"block"}}>
              <select>
              <option>1</option>
              </select>
              <button className="btn btn-primary btn-sm" > X </button>
              </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }

  public render() {

    return(
      this.showModal()
    );
  }
}
