import React from "react";
import Piece from "../Piece/Piece";
import "./Square.css";
import { isUndefined } from "lodash";
import AttackOption from "../AttackOption/AttackOption";
const Square = props => {
  const {
    squareNumber,
    onDrop,
    occupierId,
    classname,
    pieces,
    attackingOptions,
    rowId,
    handlePieceClick,
    handleMoveOptionClick
  } = props;
  const onDragOver = event => event.preventDefault();
  const occupier = pieces.find(piece => piece.id == occupierId);
  const attackOption = !isUndefined(
    attackingOptions.find(
      option =>
        option.y === rowId && option.x + (option.y - 1) * 8 === squareNumber
    )
  );

  return (
    <div
      className={classname}
      onDragOver={event => onDragOver(event)}
      onDrop={event => onDrop(event, squareNumber, rowId)}
    >
      {occupierId ? (
        <Piece
          id={occupierId}
          position={squareNumber}
          occupierType={occupier["type"]}
          rowId={rowId}
          handlePieceClick={handlePieceClick}
        />
      ) : null}
      {attackOption ? (
        <AttackOption
          handleMoveOptionClick={handleMoveOptionClick}
          position={squareNumber}
        />
      ) : null}
    </div>
  );
};

export default Square;
