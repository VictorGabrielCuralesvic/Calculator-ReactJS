import React from "react";
import "../../Style/calculator.css";

const InputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="input-field"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
