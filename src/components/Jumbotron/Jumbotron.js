import React from "react";
import "./Jumbotron.css"

const Jumbotron = props => (
  <header 
  style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron">
    <h1>{props.children}</h1>
  </header>
);

export default Jumbotron;
