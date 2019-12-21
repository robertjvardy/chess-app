import React from "react";
import "./Piece.css";

const Piece = props => {
  const { id, occupierType, position, rowId, handlePieceClick } = props;
  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
    event.dataTransfer.setData("fromPosition", position);
    event.dataTransfer.setData("fromRowId", rowId);
    event.target.style.background = "";
    event.target.style.opacity = 0.5;
    var img = new Image();
    img.src = occupierType;
    event.dataTransfer.setDragImage(img, 20, 20);
    console.log("STARTING DRAG: ", id);
  };
  const onDragEnd = event => {
    event.target.style.background = "";
    event.target.style.opacity = 1;
  };
  let fromPosition = position % 8 === 0 ? 8 : position % 8;
  let from = { x: fromPosition, y: rowId };
  return (
    <div
      onDragStart={event => onDragStart(event, id)}
      onDragEnd={event => onDragEnd(event)}
      draggable
      className="piece"
      onClick={event => handlePieceClick(from, position)}
    >
      <div
        className="icon"
        style={{ backgroundImage: "url('" + occupierType + "')" }}
      ></div>
    </div>
  );
};

export default Piece;
