/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import "./Tree.scss";
import {
  IModelApp,
   //SelectionTool
} from "@bentley/imodeljs-frontend";
import * as React from "react";
import {
  IModelConnection,
  // MarginPercent
} from "@bentley/imodeljs-frontend";
import { TreeNodeItem, Tree } from "@bentley/ui-components";
// import PropTypes from "prop-types";
import * as icons from "react-icons/fa";

// import styled, * as style from "styled-components";
import {
  IPresentationTreeDataProvider,
  PresentationTreeDataProvider,
  treeWithUnifiedSelection,
} from "@bentley/presentation-components";
import { NodePathElement } from "@bentley/presentation-common";
import styled from "styled-components";
import assert = require("assert");
//import { IModel } from "@bentley/imodeljs-common";
// import { TreeNode } from "inspire-tree";
// import { Triangle } from "@bentley/imodeljs-frontend/lib/rendering";
// import { Box } from "@bentley/geometry-core";

// create a HOC tree component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleTree = treeWithUnifiedSelection(Tree);


/** React properties for the tree component, that accepts an iModel connection with ruleset id */
export interface IModelConnectionProps {
  /** iModel whose contents should be displayed in the tree */
  imodel: IModelConnection;
  /** ID of the presentation rule set to use for creating the hierarchy in the tree */
  rulesetId: string;
  isLoading?: boolean;
  onNodesSelected?: (nodes: TreeNodeItem[], replace: boolean) => boolean;
}

/** React properties for the tree component, that accepts a data provider */
export interface DataProviderProps {
  /** Custom tree data provider. */
  nodes?: NodePathElement[];
  dataProvider: IPresentationTreeDataProvider;
  onNodesSelected?: (nodes: TreeNodeItem[], replace: boolean) => boolean;
}

export interface TreeToolState {
  isLoading?: boolean;
  imodel?: IModelConnection;
  nodes?: NodePathElement;
  dataProvider?: IPresentationTreeDataProvider;
}

export default class TreeToolComponent extends React.Component<IModelConnectionProps, TreeToolState> {
  public theNodes: NodeItem[];

  constructor(props: any) {
    super(props);
    this.theNodes = [];
    this.state = {
      imodel: this.props.imodel,
      isLoading: true,
    };
    this.getDataProvider(props);
  }

  private async getDataProvider(props: Props) {
    if ((props as any).dataProvider) {
      const providerProps = props as DataProviderProps;
      return providerProps.dataProvider;
    } else {
      const imodelProps = props as IModelConnectionProps;
      const provider: PresentationTreeDataProvider = new PresentationTreeDataProvider(imodelProps.imodel, imodelProps.rulesetId);
      // tslint:disable-next-line: no-floating-promises
      const thePaths = await provider.getFilteredNodePaths("");
      this.filterDataProvider(thePaths);
      return provider;
    }
  }

  //WIP to create a new tree item
  private filterDataProvider(thePaths: NodePathElement[]) {
    const THE_FILTER = "ocument";
    const rootNode = thePaths[0].node;
    const filteredNodes: NodeItem[] = [];
    const newRootNode: NodeItem = {
      data: "temp_data",
      label: rootNode.label,
      children: [],
      isRoot: true,
      id: "temp_id",
      isOpen: true,
    };
    filteredNodes.push(newRootNode);
    let filteredPath;
    let newDocumentNode: NodeItem = {
      label: "Temp",
      children: [],
    };
    for (let i = 0; i < thePaths[0].children.length; i++) {
      if (thePaths[0].children[i].node.label.includes(THE_FILTER)) {
        filteredPath = thePaths[0].children[i];
        const documentNode = filteredPath.node;
        newDocumentNode = {
          data: "temp_data",
          label: documentNode.label,
          children: [],
          id: "temp_id",
          isOpen: true,
        };
        newRootNode.children.push(newDocumentNode);
        break;
      }
    }
    this.theNodes = filteredNodes;
    if (filteredPath)
      this.recursiveTreeBuilder(newDocumentNode, filteredPath.children, newDocumentNode.label);
    else
      console.log("Something went wrong, filtered path is null/undefined");
    this.theNodes = [];
    this.theNodes.push(filteredNodes[0].children[0].children[0]);
    this.setState(() => ({
      isLoading: false,
    }));
  }

  private recursiveTreeBuilder(currentNode: NodeItem, currentPath: NodePathElement[], parentID: string) {
    if (currentPath) {
      //take the nodes out of this repackage them as current nodes children, make recursive call
      for (let i = 0; i < currentPath.length; i++) {
        const newNodeItem: NodeItem = {
          data: "temp_data",
          label: currentPath[i].node.label,
          children: [],
          id: "temp_id",
          isOpen: true,
        };
        if (newNodeItem.label !== parentID)
          currentNode.children.push(newNodeItem);
        this.recursiveTreeBuilder(newNodeItem, currentPath[i].children, newNodeItem.label);
      }
    }
  }
  componentWillReceiveProps(nextProps: IModelConnectionProps) {
    if (this.state.imodel) {
      if (this.state.imodel !== nextProps.imodel) {
        this.setState(() => ({
          isLoading: true,
          imodel: nextProps.imodel,
        }));
        this.getDataProvider(nextProps);
      }
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>IS LOADING</div>
      )
    } else {
      return (
        <div>
          <span></span>
          <div><FilteredTreeComponent reloadCheck={this.state.imodel} theNodes={this.theNodes} isLoading={this.state.isLoading} /></div>
        </div>);
    }
  }
}
export interface NodeItem {
  data?: any;
  label: string;
  children: NodeItem[];
  isRoot?: boolean;
  id?: string;
  isOpen?: boolean;
}

// WIP TreeProps interface, provides method for passing data from TreeToolComponenet to FilteredTreeComponenet
export interface TreeProps {
  theNodes: NodeItem[];
  isLoading?: boolean;
  reloadCheck?: IModelConnection;
}

export interface TreeState {
  theNodes: NodeItem[];
  isLoading?: boolean;
}

/** React properties for the tree component */
export type Props = IModelConnectionProps | DataProviderProps;

/* WIP attempt to replace the Simple Tree Componenet with something easier to work with*/
export class FilteredTreeComponent extends React.PureComponent<TreeProps, TreeState> {

  constructor(props: TreeProps) {
    super(props);
    this.state = {
      theNodes: props.theNodes,
      isLoading: props.isLoading,
    };
    assert(props.theNodes[0] !== undefined);
  }
  public getRootNodes = () => {
    const nodes = this.props.theNodes;
    return nodes[0];
  }

  public getChildNodes = (node: NodeItem) => {
    if (!node.children) { return [] };
    return node.children;
  }

  public render() {
    return (
      <div>
        <span></span>
        {assert(this.props.theNodes[0] !== undefined)}
        <TreeNodeComponent isOpen={true} currentNode={this.props.theNodes[0]} level={0} />
      </div>
    );
  }
}

export interface NodeProps {
  currentNode: NodeItem;
  childNodes?: NodeItem[];
  level: number;
  isOpen?: boolean;
  onToggle?: () => void;
}

export interface NodeState {
  currentNode: NodeItem;
  childNodes: NodeItem[];
  level: number;
  isOpen?: boolean;
}

export class TreeNodeComponent extends React.PureComponent<NodeProps, NodeState> {
  constructor(props: NodeProps) {
    super(props);
    this.state = {
      currentNode: this.props.currentNode,
      childNodes: this.props.currentNode.children,
      level: this.props.level,
      isOpen: this.props.isOpen,
    };
  }

  public getChildNodes = (node: NodeItem) => {
    if (!node.children) { return [] };
    return node.children;
  }

  public onToggle() {
    this.setState(() => ({
      isOpen: !this.state.isOpen,
    }));
    if(this.state.currentNode.label.includes("Pid Graphic-")) {
      IModelApp.tools.run
    }
  }

  public onClick() {
    alert("IN ON CLICK METHOD");

    this.setState(() => ({
      isOpen: !this.state.isOpen,
    }));
  }

  public getPaddingLeft() {
    return this.state.level * 15;
  }
  render() {
    return (

      <StyledTreeNode level={this.state.level}>
        <StyledHoverSelection>
          {/* <div style={}> */}
          {/* this.props.currentNode.isOpen ? icons.FaArrowDown :*/}
          {this.state.isOpen ? <icons.FaArrowDown /> : <icons.FaArrowRight />}
          {/* </div> */}
          <span role="button" onClick={() => this.onToggle()}>
            {this.state.currentNode.label}
          </span>
        </StyledHoverSelection>
        {this.state.isOpen && this.state.childNodes.map((childNode: NodeItem) => (
          <TreeNodeComponent isOpen={false} onToggle={this.onToggle} currentNode={childNode} level={this.state.level + 1} />
        ))}
      </StyledTreeNode>
    );
  }
}

export const getPaddingLeft = (level: number) => {
  return level * 15;
};

export interface styledTreeProps {
  level: number;
}

export const StyledTreeNode = styled.div`
display: flex;
flex-direction: column;
padding-left: ${(props: styledTreeProps) => getPaddingLeft(props.level)}px;
overflow: hidden;
flex-flow: column;
`;

export const StyledHoverSelection = styled.div`
display: flex;
flex-direction: row;
overflow: hidden;
&:hover::after {
  content: "";
  position: absolute;
  background-color: rgb(91, 190, 223);
  top: -50px;
  height: 10px;
  width: 5%;
  z-index: -1;
}`;
// const TreeNode = (props: { node: NodeItem; getChildNodes: any; level: number; }) => {
//   const { node, getChildNodes, level } = props;
//   return (
//     <React.Fragment>
//       <div data-level={level}>
//         <div style={new MarginPercent(.01, .01, .05, .01)}>
//           {node.isOpen ? icons.FaArrowDown : icons.FaArrowRight}
//         </div>
//         <span role="button">
//           {node.label}
//         </span>
//       </div>
//       {node.isOpen && getChildNodes(node).map((childNode: any) => (
//         <TreeNode
//           {...props}
//           node={childNode}
//           level={level + 1}
//         ></TreeNode>
//       ))}
//     </React.Fragment>
//   );
// };

//   <div>
    //     <link href = "./Tree.scss"></link>
    //   <ul id="myUL">
    //   <li><span className="caret">Beverages</span>
    //     <ul className="nested">
    //       <li>Water</li>
    //       <li>Coffee</li>
    //       <li><span className="caret">Tea</span>
    //         <ul className="nested">
    //           <li>Black Tea</li>
    //           <li>White Tea</li>
    //           <li><span className="caret">Green Tea</span>
    //             <ul className="nested">
    //               <li>Sencha</li>
    //               <li>Gyokuro</li>
    //               <li>Matcha</li>
    //               <li>Pi Lo Chun</li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </li>
    //     </ul>
    //   </li>
    // </ul>
    // </div>

/** Tree component for the viewer app */
// export default class SimpleTreeComponent extends React.PureComponent<Props> {

//   private getDataProvider(props: Props) {
//     if ((props as any).dataProvider) {
//       const providerProps = props as DataProviderProps;
//       console.log(providerProps.dataProvider.getFilteredNodePaths("document") + " This is the getfilterednodePaths");
//       return providerProps.dataProvider;
//     } else {
//       const imodelProps = props as IModelConnectionProps;
//       console.log(imodelProps + " These are the iModel Props");
//       console.log(imodelProps.rulesetId + " this is the iModel Props ruleset ID for simple Tree Component");
//       const provider: PresentationTreeDataProvider = new PresentationTreeDataProvider(imodelProps.imodel, imodelProps.rulesetId);

//       // const document = imodelProps.imodel.tiles.getTileTreeProps("PlantDocumentModel")
//       let testing = this.getNodePaths(provider).then((provider) => { return provider });
//       //  if((testing as any).PresentationTreeDataProvider){
//       //    return testing;
//       //  } else {
//       //    return provider;
//       //  }
//       return provider;

//       // console.log(provider.getNodes());
//       // return provider;
//     }
//   }

//   private async getNodePaths(provider: PresentationTreeDataProvider) {
//     const paths = await provider.getFilteredNodePaths("");
//     const rootNode = paths[0];
//     rootNode.isMarked;
//     for (let i = 0; i < rootNode.children.length; i++) {
//       console.log(i + "index: " + rootNode.children[i].node.label);
//       rootNode.children[i].isMarked = true;
//       if (!rootNode.children[i].node.label.includes("Document")) {
//         console.log(rootNode.children[i].node.label);
//         rootNode.children[i].isMarked = false;
//       }
//     }
//     let positionOfDocument: number = -1;
//     console.log("looking for document model")
//     for (let i = 0; i < rootNode.children.length; i++) {
//       if (rootNode.children[i].isMarked) {
//         console.log("documentModelFound");
//         positionOfDocument = i;
//         break;
//       }
//     }
//     if (positionOfDocument !== -1) {
//       console.log("Removing child nodes");
//       const document = rootNode.children[positionOfDocument];
//       for (let i = 0; i < rootNode.children.length; i++) {
//         rootNode.children[i] = rootNode.children[positionOfDocument];
//       }

//       rootNode.children.push(document);
//     }
//     for (let i = 0; i < rootNode.children.length; i++) {
//       console.log("CHILD NODE " + rootNode.children[i].node.label);
//     }
//     // const k = await provider.getFilteredNodePaths("Document");
//   }

//   // ZD_TODO
//   // private async promiseTesting() {
//   //   let myNodes: DelayLoadedTreeNodeItem[] = await this.getDataProvider(this.props).getNodes();
//   //   for (let node of myNodes) {
//   //     node.autoExpand = true;
//   //   }
//   //   console.log("myNodes");
//   //   console.log(myNodes);
//   //   console.log("myNodes.length");
//   //   console.log(myNodes.length);
//   //   return myNodes;
//   // }

//   public render() {

//     //      let rootNode: DelayLoadedTreeNodeItem;
//     //     this.promiseTesting().then(function (v) {
//     //       rootNode = v[0];
//     //       console.log("rootNode");
//     //       console.log(rootNode);
//     //     });
//     // // ZD_TODO

//     return (
//       <>
//         <h3 data-testid="tree-component-header">{IModelApp.i18n.translate("SimpleViewer:components.tree")}</h3>
//         <div style={{ flex: "1" }}>
//           <SimpleTree dataProvider={this.getDataProvider(this.props)} onNodesSelected={this.props.onNodesSelected} />
//         </div>
//       </>
//     );
//   }
// }

 // private buildNewTree(nodes: Node[], parent: NodeItem) {
  //   console.log("ok");
  // }
  // private convertToNodeItem(node: Node, parent: NodeItem) {
  // }
  // componentDidMount() {
  //   var toggler = document.getElementsByClassName("caret");
  //   var i: number;

  //   for (i = 0; i < toggler.length; i++) {
  //     toggler[i].addEventListener("click", function () {
  //       const element = toggler[i];
  //       if (element) {
  //         const parent = element.parentElement;
  //         if (parent) {
  //           const test = parent.querySelector("nested");
  //           if (test) {
  //             console.log("In Test");
  //             test.classList.toggle("active");
  //           }
  //           element.classList.toggle("caret-down");
  //         }
  //       }
  //     });
  //   }
  // }
  // onClick(id: string) {
  //   console.log("in onClick")
  //   const toggler = document.getElementById(id);
  //   if (toggler) {
  //     console.log("In toggler");
  //     const parentElement = toggler.parentElement;
  //     if (parentElement) {
  //       console.log("in parent element");
  //       for (let k = 0; k < parentElement.children.length; k++) {
  //         console.log(k)
  //         if (parentElement.children[k].className === "nested") {
  //           console.log("showing");
  //           const toggled = toggler.classList.toggle("active");
  //           console.log(toggled);
  //         }
  //         if (parentElement.children[k].className === "active") {
  //           console.log("hiding");
  //           const toggled = parentElement.children[k].classList.toggle("nested");
  //           console.log(toggled);
  //         }
  //       }
  //     }
//   }
// }
