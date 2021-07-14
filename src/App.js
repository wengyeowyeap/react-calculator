import React, { useState } from "react";
import CalculatorDisplay from "./components/CalculatorDisplay";
import KeyPad from "./components/KeyPad";

function App() {
  const [result, setResult] = useState("");
  const calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  const performCalculation = key => {
    if (key === "=") {
      calculate();
    } else if (key === "AC") {
      setResult("");
    } else if (key === "C") {
      if (result === "error") {
        setResult("")
      } else {
        setResult(result.slice(0, -1));
      }
    } else {
      setResult(result + key);
    }
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{
          width: "350px",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        >
          <CalculatorDisplay result={result} />
          <KeyPad performCalculation={performCalculation} />
        </div>
      </div>
    </>
  );
}

export default App;
