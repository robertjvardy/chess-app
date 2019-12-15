import React from "react";
import "./NavBar.css";
import { piecesInit } from "../Board/piecesInit";

const NavBar = props => {
  const { setPieces } = props;
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-button" onClick={() => setPieces(piecesInit())}>
          New Game
        </li>
        <li className="nav-button">Settings</li>
      </ul>
    </div>
  );
};

export default NavBar;
