import React from "react";
import Square from "../Square/Square";

const Row = props => {
  const { onDrop, squares, id, pieces } = props;
  return (
    <>
      {Object.keys(squares)
        .filter(num => id < num && num <= id + 8)
        .map(square => (
          <Square
            squareNumber={parseInt(square)}
            occupierId={squares[square]["id"]}
            onDrop={onDrop}
            pieces={pieces}
            classname={id % 16 === 0 ? "square" : "odd-row-square"}
          />
        ))}
    </>
  );
};

export default Row;
