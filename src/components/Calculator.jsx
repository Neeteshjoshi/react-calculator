import React, { useState } from "react";
import "../Calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (event) => {
    setInputValue((prevInputValue) => prevInputValue + event.target.value);
  };
  const handleClear = () => {
    setInputValue("");
  };
  const handleCalculation = () => {
    setInputValue(eval(inputValue));
  };
  return (
    <>
      <div className="calculator-container">
        <div className="calculator-title">
          <h2>Calculator App</h2>
        </div>
        <div className="calculator-body">
          <input
            className="calculator-input-box"
            type="text"
            name="input-box"
            id="input-box"
            value={inputValue}
            placeholder="|"
          />
          <div className="calculator-input-numbers">
            <button className="number" value="7" onClick={handleInput}>
              7
            </button>
            <button className="number" value="8" onClick={handleInput}>
              8
            </button>
            <button className="number" value="9" onClick={handleInput}>
              9
            </button>
            <button className="number" value="+" onClick={handleInput}>
              +
            </button>
            <button className="number" value="4" onClick={handleInput}>
              4
            </button>
            <button className="number" value="5" onClick={handleInput}>
              5
            </button>
            <button className="number" value="6" onClick={handleInput}>
              6
            </button>
            <button className="number" value="-" onClick={handleInput}>
              -
            </button>
            <button className="number" value="1" onClick={handleInput}>
              1
            </button>
            <button className="number" value="2" onClick={handleInput}>
              2
            </button>
            <button className="number" value="3" onClick={handleInput}>
              3
            </button>
            <button className="number" value="*" onClick={handleInput}>
              *
            </button>
            <button className="number" value="0" onClick={handleInput}>
              0
            </button>
            <button className="number" value="/" onClick={handleInput}>
              /
            </button>
            <button className="number" value="=" onClick={handleCalculation}>
              =
            </button>
            <button className="number" value="C" onClick={handleClear}>
              C
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
