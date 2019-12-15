import React from "react";
import "./Piece.css";

const Piece = props => {
  const { id, occupierType } = props;
  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
    event.target.style.background = "";
    event.target.style.opacity = 0.5;
    console.log("STARTING DRAG: ", id);
  };
  const onDragEnd = event => {
    event.target.style.background = "";
    event.target.style.opacity = 1;
  };
  return (
    <div
      onDragStart={event => onDragStart(event, id)}
      onDragEnd={event => onDragEnd(event)}
      draggable
      className="piece"
    >
      <div
        className="icon"
        style={{ backgroundImage: "url('" + occupierType + "')" }}
      ></div>
    </div>
  );
};

export default Piece;
