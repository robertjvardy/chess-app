import React, { useState } from "react";
import "./Board.css";

const Board = () => {
  const [graveYard, setGraveYard] = useState([]);
  const [pieces, setPieces] = useState([
    {
      id: "1",
      position: "1",
      backgroundColor: "red"
      // add a piece attribute here to be used to determine th rendering. ie {piece: knight}
    },
    {
      id: "3",
      position: "3",
      backgroundColor: "red"
      // add a piece attribute here to be used to determine th rendering. ie {piece: knight}
    },
    {
      id: "2",
      position: "2",
      backgroundColor: "green"
    }
  ]);

  let squares = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: []
  };

  const onDragStart = (event, id) => {
    console.log("dragstart on div: ", id);
    event.dataTransfer.setData("id", id);
  };

  const onDragOver = event => {
    event.preventDefault();
  };

  const onDrop = (event, position) => {
    //   the id of the attacking piece
    let id = event.dataTransfer.getData("id");

    let movedPiece = pieces.filter(piece => {
      if (piece.id === id) {
        piece.position = position;
      }
      return piece;
    });

    setPieces(movedPiece);
  };

  pieces.forEach(piece => {
    squares[piece.position].push(
      <div
        key={piece.id}
        onDragStart={event => onDragStart(event, piece.id)}
        draggable
        className="draggable"
        style={{ backgroundColor: piece.bgcolor }}
      >
        {piece.id}
      </div>
    );
  });

  const board = Object.keys(squares).map(square => (
    <div
      className="square"
      onDragOver={event => onDragOver(event)}
      onDrop={event => {
        onDrop(event, square);
      }}
    >
      <span className="group-header">{square}</span>
      {squares[square]}
    </div>
  ));

  return <div className="drag-container">{board}</div>;
};

export default Board;
