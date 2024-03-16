import { useReducer, useState } from "react";
import classes from "./Counter.module.css";
import { useDispatch } from "react-redux";

const initialState = {
  count: 0,
  step: 1,
  show: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "inc10":
      return { ...state, count: state.count + 10 };
    case "toogle":
      return { ...state, show: !state.show };
    default:
      throw new Error("Unknown action");
  }
};

const Counter = () => {
  // const dispatch = useDispatch();
  // const [count, setCount] = useState(0);
  // const [show, setShow] = useState(true);

  // const inc = () => {
  //   dispatch(inc());
  // };

  // const dec = () => {
  //   dispatch(dec());
  // };
  // const inc10 = () => {
  //   dispatch(inc10());
  // };
  // const toogle = () => {
  //   dispatch(toogle());
  //   setShow(!show);
  // };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, show } = state;

  const dec = () => {
    dispatch({ type: "dec" });
  };

  const inc = () => {
    dispatch({ type: "inc" });
  };
  const inc10 = () => {
    dispatch({ type: "inc10" });
  };
  const toogle = () => {
    dispatch({ type: "toogle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={inc}>Increment</button>
        <button onClick={inc10}>Increase by 10</button>
        <button onClick={dec}>Decrement</button>
      </div>
      <button onClick={toogle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
