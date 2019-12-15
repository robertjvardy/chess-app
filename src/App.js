import React, { useState } from "react";
import Board from "./Components/Board/Board";
import NavBar from "./Components/NavBar/NavBar";
import { piecesInit } from "./Components/Board/piecesInit";
import "./App.css";

const App = () => {
  const [pieces, setPieces] = useState(piecesInit());

  const boardInit = () => {
    const squares = {};
    for (var i = 1; i <= 64; i++) squares[i] = {};
    return squares;
  };

  var squares = boardInit();

  const onDrop = (event, position) => {
    let id = event.dataTransfer.getData("id");
    const attackedPiece = pieces.find(piece => piece.position == position);
    const attackingPiece = pieces.find(piece => piece.id == id);
    // add isValidMove here
    if (
      // try to find another fix for this
      attackedPiece !== undefined &&
      (attackedPiece["player"] === attackingPiece["player"] ||
        attackedPiece["status"] === "dead")
    ) {
      return;
    }
    let newPositions = pieces.map(piece => {
      if (piece === attackedPiece) {
        const newPiece = piece;
        newPiece["status"] = "dead";
        return newPiece;
      }
      if (piece === attackingPiece) {
        const newPiece = { ...attackingPiece };
        newPiece["position"] = position;
        return newPiece;
      } else {
        return piece;
      }
    });
    setPieces(newPositions);
  };
  return (
    <div className="App">
      <NavBar setPieces={setPieces} />
      <div className="main-container">
        <Board pieces={pieces} squares={squares} onDrop={onDrop} />
        {/* Timmer */}
      </div>
    </div>
  );
};

export default App;
