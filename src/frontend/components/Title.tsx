import * as React from "react";
import {IModelList} from "./Group";
import styled from "styled-components";
// import {Config} from "@bentley/imodeljs-clients";

export interface TitleProps {
  projectName: string;
  drawingName: string;
  iModelName: string;
}

export interface TitleState {
  projectName?: string;
  drawingName?: string;
  iModelName: string;
}

export default class TitleBar extends React.PureComponent<TitleProps, TitleState> {
  constructor(props: TitleProps) {
    super(props);
    this.state = {
      projectName: this.props.projectName,
      drawingName: this.props.drawingName,
      iModelName: this.props.iModelName,
    };
  }

  render() {
    return (
      <StyledWrapper>

    <StyledWrapper> {"Project: " + this.state.projectName + " iModel: "} <IModelList/> {" Drawing: " + this.state.drawingName} </StyledWrapper>
    </StyledWrapper>
    );
  }
}

// tslint:disable-next-line:variable-name
export const StyledWrapper = styled.span`
padding-top: 10px;
padding-bottom: 0px;
padding-left: 0px;
justifyContent: space-between;
font-weight: bold;
font-size: large;
display: flex;
flex-direction: row;
overflow: hidden;
flex-flow: row;
`;
