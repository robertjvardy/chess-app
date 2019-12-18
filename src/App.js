import React, { useState } from "react";
import Board from "./Components/Board/Board";
import NavBar from "./Components/NavBar/NavBar";
import { piecesInit } from "./Components/Board/piecesInit";
import { validMove, boardInit } from "./utils/utils";
import "./App.css";
import Square from "./Components/Square/Square";

const App = () => {
  let squares = boardInit();
  const [pieces, setPieces] = useState(piecesInit());
  const [graveyard, setGraveyard] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const getOccupier = (x, y) => {
    const squareId = (y - 1) * 8 + x;
    return squares[parseInt(squareId)];
  };
  const isOccupied = (x, y) => {
    if (x < 1 || y < 1 || x > 8 || y > 8) return false;
    const squareId = (y - 1) * 8 + x;
    return squares[parseInt(squareId)].hasOwnProperty("id");
  };

  const isPlayersTurn = piece => {
    const whiteTurn = moveCount % 2 === 0;
    if (piece.player === 1 && whiteTurn) return true;
    else if (piece.player === 2 && !whiteTurn) return true;
    else return false;
  };

  const onDrop = (event, toPosition, toRowId) => {
    let id = parseInt(event.dataTransfer.getData("id"));
    let fromPosition = parseInt(event.dataTransfer.getData("fromPosition")) % 8;
    fromPosition = fromPosition === 0 ? 8 : fromPosition;
    let fromRowId = parseInt(event.dataTransfer.getData("fromRowId"));
    let from = { x: fromPosition, y: fromRowId };
    let toColunm = parseInt(toPosition) % 8 === 0 ? 8 : toPosition % 8;
    const to = { x: toColunm, y: toRowId };
    console.log(from, "->", to);
    const attackedPiece = pieces.find(piece => piece.position == toPosition);
    const attackingPiece = pieces.find(piece => piece.id == id);
    if (
      (attackedPiece !== undefined &&
        attackedPiece["player"] === attackingPiece["player"]) ||
      !validMove(from, to, attackingPiece.type, isOccupied, getOccupier) ||
      !isPlayersTurn(attackingPiece)
    ) {
      return;
    }
    let newPositions = pieces.map(piece => {
      if (piece === attackedPiece) {
        const newPiece = piece;
        newPiece["status"] = "dead";
        setGraveyard(graveyard.concat(newPiece));
        return newPiece;
      }
      if (piece === attackingPiece) {
        const newPiece = { ...attackingPiece };
        newPiece["position"] = toPosition;
        return newPiece;
      } else {
        return piece;
      }
    });
    setPieces(newPositions.filter(piece => piece.status === "alive"));
    setMoveCount(moveCount + 1);
  };

  return (
    <div className="App">
      <NavBar setPieces={setPieces} />
      <div className="main-container">
        <Board pieces={pieces} squares={squares} onDrop={onDrop} />
        <div id="turn-indicator">
          <p>Turn: {moveCount % 2 == 0 ? "White" : "Black"}</p>
        </div>
        {/* Timmer */}
      </div>
    </div>
  );
};

export default App;
