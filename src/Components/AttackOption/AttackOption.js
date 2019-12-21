import React from "react";
import "./AttackOption.css";

const AttackOption = props => {
  const { handleMoveOptionClick, position } = props;
  return (
    <div
      className="attack-option-wrapper"
      onClick={event => handleMoveOptionClick(position)}
    >
      <div className="attack-option"></div>
    </div>
  );
};

export default AttackOption;
