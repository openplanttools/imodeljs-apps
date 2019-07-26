import * as React from "react";
import styled from "styled-components";

export interface TitleProps {
  projectName?: string;
  drawingName?: string;
  iModelName: string;
}

export interface TitleState {
  projectName?: string;
  drawingName?: string;
  iModelName: string;
}

export default class TitleBar extends React.Component<TitleProps, TitleState> {
  constructor(props: TitleProps) {
    super(props);
    this.state = {
      projectName: this.props.projectName,
      drawingName: this.props.drawingName,
      iModelName: this.props.iModelName,
    };
  }

  public componentWillReceiveProps(newProps: TitleProps) {
    this.setState(() => ({
      iModelName: newProps.iModelName,
      projectName: newProps.projectName,
      drawingName: newProps.drawingName,
    }));
  }

  public render() {
    return (
      <StyledWrapper id={this.state.iModelName} key = {this.state.iModelName}>
        <StyledWrapper id = {this.state.iModelName + "1"}> {"Project: " + this.state.projectName + ", iModel: " + this.state.iModelName} </StyledWrapper>
      </StyledWrapper>
    );
  }
}

// tslint:disable-next-line:variable-name
export const StyledWrapper = styled.span`
padding-top: 7px;
padding-bottom: 3px;
padding-left: 0px;
justifyContent: space-between;
font-weight: bold;
font-size: 16pt;
display: flex;
flex-direction: row;
overflow: hidden;
flex-flow: row;
`;
