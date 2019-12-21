import React from "react";
import "./NavBar.css";

const NavBar = props => {
  const { resetBoard } = props;
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-button" onClick={() => resetBoard()}>
          New Game
        </li>
        <li className="nav-button">Settings</li>
      </ul>
    </div>
  );
};

export default NavBar;
