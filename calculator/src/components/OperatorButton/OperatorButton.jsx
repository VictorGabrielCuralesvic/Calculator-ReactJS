import React from "react";
import "../../Style/calculator.css";

const OperatorButton = ({ value, onClick, label }) => {
  return (
    <div>
      <button
        className="operator-button"
        value={value}
        onClick={() => onClick(value)}
      >
        {label}
      </button>
    </div>
  );
};

export default OperatorButton;

