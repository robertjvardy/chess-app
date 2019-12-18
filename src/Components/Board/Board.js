import React from "react";
import Row from "../Row/Row";
import "./Board.css";

const Board = props => {
  const { pieces, squares, onDrop } = props;

  pieces
    .filter(piece => piece.status === "alive")
    .forEach(piece => {
      squares[piece.position] = piece;
    });

  var rows = [];
  for (var i = 0; i < 64; i = i + 8) {
    rows.push(
      <Row
        onDrop={onDrop}
        squares={squares}
        id={i}
        pieces={pieces}
        rowId={i / 8 + 1}
      />
    );
  }

  return <div className="board-container">{rows}</div>;
};

export default Board;
