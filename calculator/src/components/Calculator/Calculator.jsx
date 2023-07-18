import React, { useState } from "react";
import InputField from "../InputField/InputField";
import OperatorButton from "../OperatorButton/OperatorButton";
import NumberButton from "../NumberButton/NumberButton";
import "../../Style/calculator.css";

const Calculator = () => {
  const [val, setVal] = useState("");

  const handleInputChange = (value) => {
    setVal(value);
  };

  const handleButtonClick = (value) => {
    setVal(val + value);
  };

