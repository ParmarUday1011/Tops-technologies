import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UseSelectorandDispatch() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "counter/increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "counter/decrement" })}>
        Decrement
      </button>
    </div>
  );
}
