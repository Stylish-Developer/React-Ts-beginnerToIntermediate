import { useReducer } from "react";

// type
interface stateProps {
  count: number;
}

interface EventProps {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
}
interface resetprops {
  type: 'RESET'
}
// -----------------------------------------------------------------------------------

type actionProps = EventProps | resetprops;

// -----------------------------------------------------------------------------------
// initial state
const initialState = {
  count: 0,
};

// reducer
const reducer = (state: stateProps, action: actionProps) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
      };
    case "DECREMENT":
      return {
        count: state.count - action.payload,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// -- useReducer Hook
const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h3>useReducer Hook Effect</h3>
      <h3>COUNT - {state.count} </h3>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
          ➕
        </button>
        &nbsp;
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
          ➖
        </button>
        &nbsp;
        <button onClick={() => dispatch({ type: "RESET" })}>
          🔄
        </button>
      </div>
    </>
  );
};

export default UseReducerHook;
