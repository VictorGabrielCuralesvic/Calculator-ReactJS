import React, { useState } from "react";
import InputField from "../InputField/InputField";
import OperatorButton from "../OperatorButton/OperatorButton";
import NumberButton from "../NumberButton/NumberButton";
import "../../Style/calculator.css";

const Calculator = () => {
  const [val, setVal] = useState("");
  const [memory, setMemory] = useState(0);

  const handleInputChange = (value) => {
    setVal(value);
  };

  const handleButtonClick = (value) => {
    setVal(val + value);
  };

  const handleBackspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };

  const handleCalculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };
  
  const handleMemoryRecall = () => {
    setVal(memory.toString());
  };
  return (
    <div className="calculator">
      <div>
        <div>
          <h1>CALCULATOR</h1>
        </div>
      </div>
      <div>
        <div>
          <InputField value={val} onChange={handleInputChange} />
          <div className="button-container">
            <NumberButton value="1" onClick={() => handleButtonClick("1")} />
            <NumberButton value="2" onClick={() => handleButtonClick("2")} />
            <NumberButton value="3" onClick={() => handleButtonClick("3")} />
            <OperatorButton value="CE" onClick={handleBackspace} label="CE" />

            <NumberButton value="4" onClick={() => handleButtonClick("4")} />
            <NumberButton value="5" onClick={() => handleButtonClick("5")} />
            <NumberButton value="6" onClick={() => handleButtonClick("6")} />
            <OperatorButton value="+" onClick={() => handleButtonClick("+")} label="+" />

            <NumberButton value="7" onClick={() => handleButtonClick("7")} />
            <NumberButton value="8" onClick={() => handleButtonClick("8")} />
            <NumberButton value="9" onClick={() => handleButtonClick("9")} />
            <OperatorButton value="*" onClick={() => handleButtonClick("*")} label="x" />

            <NumberButton value="." onClick={() => handleButtonClick(".")} />
            <NumberButton value="0" onClick={() => handleButtonClick("0")} />
            <OperatorButton value="=" onClick={handleCalculate} label="=" />
            <OperatorButton value="/" onClick={() => handleButtonClick("/")} label="/" />

            <OperatorButton value="MC" onClick={handleMemoryClear} label="MC" />
            <OperatorButton value="MR" onClick={handleMemoryRecall} label="MR" />
            <OperatorButton value="M+" onClick={handleMemoryAdd} label="M+" />
            <OperatorButton value="M-" onClick={handleMemorySubtract} label="M-" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
