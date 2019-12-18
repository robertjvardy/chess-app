import React from "react";
import Piece from "../Piece/Piece";
import "./Square.css";
import { squares } from "../../utils/utils";

const Square = props => {
  const { squareNumber, onDrop, occupierId, classname, pieces, rowId } = props;
  const onDragOver = event => event.preventDefault();
  const occupier = pieces.find(piece => piece.id == occupierId);
  return (
    <div
      className={classname}
      onDragOver={event => onDragOver(event)}
      onDrop={event => onDrop(event, squareNumber, rowId)}
      // onClick={event => (event.target.style.opacity = 0.5)}
    >
      {occupierId ? (
        <Piece
          id={occupierId}
          position={squareNumber}
          occupierType={occupier["type"]}
          rowId={rowId}
        />
      ) : null}
    </div>
  );
};

export default Square;
