import { useReducer } from "react";
import classes from "./Counter.module.css";
import counterReducer from "../features/counterSlice";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { count, step } = state;
  const counter = 0;
  const show = true;

  const inc = () => {
    dispatch({ type: "inc" });
  };

  const inc10 = () => {
    dispatch({ type: "inc10" });
  };

  const dec = () => {
    dispatch({ type: "dec" });
  };

  const defineCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <input value={count} className={classes.value} onChange={defineCount} />
      )}
      <div>
        <button onClick={inc}>Increment</button>
        <button onClick={inc10}>Increase by 10</button>
        <button onClick={dec}>Decrement</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default Counter;
