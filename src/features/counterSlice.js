import { useState, useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "inc10":
      return { ...state, count: state.count + 10 };
    default:
      throw new Error("Unknown action");
  }
};

export const dec = () => {
  return { type: "dec" };
};

export const inc = () => {
  return { type: "inc" };
};
export const inc10 = () => {
  return { type: "inc10" };
};

export const defineCount = (e) => {
  return { type: "setCount", payload: Number(e.target.value) };
};

export const defineStep = (e) => {
  return { type: "setStep", payload: Number(e.target.value) };
};

export default counterReducer;
