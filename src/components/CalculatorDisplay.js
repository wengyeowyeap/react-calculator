import React from "react";

const CalculatorDisplay = (props) => {
  const { result } = props
  return (
    <div style={{ border: "1px solid black" }}>
      <div style={{ width: "100%" }}>
        {
          result.length <= 26 ?
            <h1 style={{ textAlign: "end", fontSize: "1.5vw" }}>
              {result ? result : "0"}
            </h1>
          : 
          <h1 style={{ textAlign: "end", fontSize: "1.2vw" }}>
            {result ? result : "0"}
          </h1>
        }

      </div>
    </div>
  );
};

export default CalculatorDisplay;