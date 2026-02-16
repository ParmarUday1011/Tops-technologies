import { useSelector, useDispatch } from "react-redux";
import { increment, addByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(addByAmount(5))}>
        Add 5
      </button>
    </div>
  );
}

export default Counter;
