import React from "react";
import "../../Style/calculator.css";

const NumberButton = ({ value, onClick }) => {
  return (
    <div>
      <button
        className="number-button"
        value={value}
        onClick={() => onClick(value)}
      >
        {value}
      </button>
    </div>
  );
};

export default NumberButton;


