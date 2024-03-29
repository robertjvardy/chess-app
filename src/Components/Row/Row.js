import React from "react";
import Square from "../Square/Square";
import "./Row.css";

const Row = props => {
  const {
    onDrop,
    squares,
    id,
    pieces,
    attackingOptions,
    rowId,
    handlePieceClick,
    handleMoveOptionClick
  } = props;
  return (
    <div id={rowId} className="row">
      {Object.keys(squares)
        .filter(num => id < num && num <= id + 8)
        .map(square => (
          <Square
            squareNumber={parseInt(square)}
            occupierId={squares[square]["id"]}
            onDrop={onDrop}
            pieces={pieces}
            attackingOptions={attackingOptions}
            classname={id % 16 === 0 ? "square" : "odd-row-square"}
            rowId={rowId}
            handlePieceClick={handlePieceClick}
            handleMoveOptionClick={handleMoveOptionClick}
          />
        ))}
    </div>
  );
};

export default Row;
