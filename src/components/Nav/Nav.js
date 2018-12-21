import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">{ props.brand }</a>
      </li>
      <li 
        className={props.outcome.indexOf('incorrect') !== -1 ? "incorrect" :
        props.outcome.indexOf('correct') !== -1 ? "correct" : "normal"}
        >
        { props.outcome }
      </li>
      <li>
        Score: <span style={{ color: "yellow" }}>{ props.currentScore }</span> | Top Score: { props.topScore }
      </li>
    </ul>
  </nav>
);

export default Nav;
