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

  /** Sets the title with the provided iModel data */
  public componentWillReceiveProps(newProps: TitleProps) {
    this.setState(() => ({
      iModelName: newProps.iModelName,
      projectName: newProps.projectName,
      drawingName: newProps.drawingName,
    }));
  }

  /** Renders the title */
  public render() {
    const projDisplay = `${this.state.projectName}`;
    const modelDisplay = `(${this.state.iModelName})`;

    return (
      <StyledWrapperProject id={this.state.iModelName} key = {this.state.iModelName}>
        <StyledWrapperProject id = {this.state.iModelName + "1"}> {projDisplay} </StyledWrapperProject>
        <StyledWrapperModel id = {this.state.iModelName + "2"}> {modelDisplay} </StyledWrapperModel>
      </StyledWrapperProject>
    );
  }
}

// tslint:disable-next-line:variable-name
export const StyledWrapperProject = styled.span`
padding-top: 7px;
padding-bottom: 3px;
padding-left: 0px;
justifyContent: space-between;
font-weight: bold;
font-size: 12pt;
display: flex;
flex-direction: row;
overflow: hidden;
flex-flow: row;
`;

// tslint:disable-next-line:variable-name
export const StyledWrapperModel = styled.span`
padding-top: 9px;
padding-bottom: 2px;
padding-left: 2px;
justifyContent: space-between;
// font-weight: bold;
font-size: 10pt;
display: flex;
flex-direction: row;
overflow: hidden;
flex-flow: row;
color: cyan;
`;
