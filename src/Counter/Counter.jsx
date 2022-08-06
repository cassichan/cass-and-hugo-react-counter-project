import React from "react";
import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const addClick = () => setCount(count + 1);
  const subtractClick = () => {
    if (count <= 0) {
      return 0;
    } else {
      return setCount(count - 1);
    }
  };
  const resetClick = () => setCount(count * 0);

  return (
    <>
      <main>
        <h1>How Many Cats Does Cass Have?</h1>
        <h2 id="count-text">Count: {count}</h2>
        <div id="buttons">
          <button
            onClick={subtractClick}
            style={{ borderRadius: "15px" }}
            className="operation-btn"
          >
            -
          </button>
          <button onClick={resetClick} id="reset-btn">
            Reset
          </button>
          <button
            onClick={addClick}
            style={{ borderRadius: "15px" }}
            className="operation-btn"
          >
            +
          </button>
        </div>
      </main>
    </>
  );
}

export default Counter;
