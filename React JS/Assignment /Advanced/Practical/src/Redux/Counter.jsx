import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}
