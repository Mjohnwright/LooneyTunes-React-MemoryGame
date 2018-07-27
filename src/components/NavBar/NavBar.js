//Navbar.js component
import React from "react";
import "./NavBar.css";

const NavBar = props => (

      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="Left">Test Your Memory! </li>
          <li className="Center"> {props.Update}</li>
          <li className="Right">Score: {props.score}</li>
          <li className="Right">High Score: {props.HighScore}</li>
        </ul>
      </nav>
    
);

export default NavBar;