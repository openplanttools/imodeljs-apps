/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import "./Tree.scss";
import * as React from "react";
import {
  IModelConnection,
  MarginPercent
} from "@bentley/imodeljs-frontend";
import { TreeNodeItem } from "@bentley/ui-components";
// import PropTypes from "prop-types";
import * as icons from "react-icons/fa";
// import styled, * as style from "styled-components";
import {
  IPresentationTreeDataProvider,
  PresentationTreeDataProvider,
} from "@bentley/presentation-components";
import { NodePathElement } from "@bentley/presentation-common";
// import { TreeNode } from "inspire-tree";
// import { Triangle } from "@bentley/imodeljs-frontend/lib/rendering";
// import { Box } from "@bentley/geometry-core";

// create a HOC tree component that supports unified selection
// tslint:disable-next-line:variable-name
// const SimpleTree = treeWithUnifiedSelection(Tree);

/** React properties for the tree component, that accepts an iModel connection with ruleset id */
export interface IModelConnectionProps {
  /** iModel whose contents should be displayed in the tree */
  imodel: IModelConnection;
  /** ID of the presentation rule set to use for creating the hierarchy in the tree */
  rulesetId: string;
  onNodesSelected?: (nodes: TreeNodeItem[], replace: boolean) => boolean;
}

/** React properties for the tree component, that accepts a data provider */
export interface DataProviderProps {
  /** Custom tree data provider. */
  nodes?: NodePathElement[];
  dataProvider: IPresentationTreeDataProvider;
  onNodesSelected?: (nodes: TreeNodeItem[], replace: boolean) => boolean;
}

export default class TreeToolComponent extends React.Component<IModelConnectionProps> {
  public theNodes: NodeItem[];

  constructor(props: any) {
    super(props);
    this.theNodes = [];
    // tslint:disable-next-line: no-floating-promises
    this.getDataProvider(this.props);
  }

  private async getDataProvider(props: Props) {
    if ((props as any).dataProvider) {
      const providerProps = props as DataProviderProps;
      return providerProps.dataProvider;
    } else {
      const imodelProps = props as IModelConnectionProps;
      console.log(imodelProps + " These are the iModel Props");
      console.log(imodelProps.rulesetId + " this is the iModel Props ruleset ID for simple Tree Component");
      const provider: PresentationTreeDataProvider = new PresentationTreeDataProvider(imodelProps.imodel, imodelProps.rulesetId);
      // tslint:disable-next-line: no-floating-promises
      provider.getFilteredNodePaths("").then((thePaths: NodePathElement[]) => {
        this.filterDataProvider(thePaths);
      });
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
        };
        newRootNode.children.push(newDocumentNode);
        break;
      }
    }
    this.theNodes = filteredNodes;
    console.log("The length of the nodes are " + this.theNodes.length);
    if (filteredPath)
      this.recursiveTreeBuilder(newDocumentNode, filteredPath.children);
    else
      console.log("Something went wrong, filtered path is null/undefined");
    this.theNodes = filteredNodes;
    console.log("The length of the nodes are " + this.theNodes[0].children[0].children[1].children.length);
  }

  private recursiveTreeBuilder(currentNode: NodeItem, currentPath: NodePathElement[]) {
    if (currentPath) {
      //take the nodes out of this repackage them as current nodes children, make recursive call
      for (let i = 0; i < currentPath.length; i++) {
        const newNodeItem: NodeItem = {
          data: "temp_data",
          label: currentPath[i].node.label,
          children: [],
          id: "temp_id",
        };
        currentNode.children.push(newNodeItem);
        this.recursiveTreeBuilder(newNodeItem, currentPath[i].children);
      }
    }
  }

  render() {
    return (
      <div>
        <span>HELLO</span>
        <div><FilteredTreeComponent theNodes={this.theNodes}></FilteredTreeComponent></div>
      </div>);
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
  isInitialized?: boolean;
}

/** React properties for the tree component */
export type Props = IModelConnectionProps | DataProviderProps;

/* WIP attempt to replace the Simple Tree Componenet with something easier to work with*/
export class FilteredTreeComponent extends React.PureComponent<TreeProps> {

  constructor(props: TreeProps) {
    super(props);
    this.state = {
      theNodes: props.theNodes,
    };
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
    const rootNode = this.getRootNodes();
    return (
      <div>
        <span>HELLO2</span>
        <TreeNode node={rootNode} level={0} getChildNodes={this.getChildNodes(rootNode)}></TreeNode>
      </div>
    );
  }
}

export interface NodeProps {
  currentNode: NodeItem;
  childNodes: NodeItem[];
  level: number;
}

export class TreeNodeComponenet extends React.PureComponent<NodeProps> {
  constructor(props: NodeProps) {
    super(props);
    this.state = {
      currentNode: this.props.currentNode,
      childNodes: this.props.childNodes,
      level: this.props.level,
    };
  }

  public getChildNodes = (node: NodeItem) => {
    if (!node.children) { return [] };
    return node.children;
  }

  render() {
    return (
      <div>
        HEY 3
        <div data-level={this.props.level}>
          <div style={new MarginPercent(.01, .01, .05, .01)}>
            {this.props.currentNode.isOpen ? icons.FaArrowDown : icons.FaArrowRight}
          </div>
          <span role="button">
            {this.props.currentNode.label}
          </span>
        </div>
        {this.props.currentNode.isOpen && this.getChildNodes(this.props.currentNode).map((childNode: NodeItem) => (
          <TreeNode
            getChildNodes={this.getChildNodes}
            node={childNode}
            level={this.props.level + 1}
          ></TreeNode>
        ))}
      </div>
    );
  }
}
const TreeNode = (props: { node: NodeItem; getChildNodes: any; level: number; }) => {
  const { node, getChildNodes, level } = props;
  return (
    <React.Fragment>
      <div data-level={level}>
        <div style={new MarginPercent(.01, .01, .05, .01)}>
          {node.isOpen ? icons.FaArrowDown : icons.FaArrowRight}
        </div>
        <span role="button">
          {node.label}
        </span>
      </div>
      {node.isOpen && getChildNodes(node).map((childNode: any) => (
        <TreeNode
          {...props}
          node={childNode}
          level={level + 1}
        ></TreeNode>
      ))}
    </React.Fragment>
  );
};

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
