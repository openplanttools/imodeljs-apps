// import * as React from "react";
// import {
//  BrowserRouter as Router,
//  Route
// } from "react-router-dom"
// import Update from "./ViewA";
// import Console from "./ViewB"’;
// class ViewManager extends React.Component {
// static Views() {
//  return {
//  viewA: <ViewA/>,
//  viewB: <ViewB/>
//  }
//  }
// static View(props: any) {
//  let name = props.location.search.substr(1);
//  let view = ViewManager.Views()[name];
//  if(view == null)
//  throw new Error("View ‘" + name + "‘ is undefined");
//  return view;
//  }

//  render() {
//  return (
//  <Router>
//  <div>
//  <Route path="/" component={ViewManager.View}/>
//  </div>
//  </Router>
//  );
//  }
// }
// export default ViewManager
