const counterReducer = (state, action) => {
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

export const dec = () => {
  dispatch({ type: "dec" });
};

export const inc = () => {
  dispatch({ type: "inc" });
};
export const inc10 = () => {
  dispatch({ type: "inc10" });
};
export const toogle = () => {
  dispatch({ type: "toogle" });
};

export default counterReducer;
