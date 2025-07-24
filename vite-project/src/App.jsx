import { useReducer, useRef } from "react";
import { initialState, Reducer } from "./Reducer";
import { ACTION_ADD, ACTION_INPUT, ACTION_REMOVE } from "./Action";

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const ref = useRef();
  return (
    <>
      <h1>TODO</h1>
      <form
        action=""
        onSubmit={(e) => {
          dispatch({ type: ACTION_ADD }), e.preventDefault();
          ref.current.focus();
        }}
      >
        <input
          type="text"
          placeholder="Enter Todo..."
          onChange={(e) =>
            dispatch({ type: ACTION_INPUT, payload: e.target.value })
          }
          value={state.input}
          ref={ref}
        />
        <button>Add</button>
      </form>
      <ul>
        {state.toDoList.map((item) => (
          <li>
            {item}
            <button
              onClick={() => dispatch({ type: ACTION_REMOVE, payload: item })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
