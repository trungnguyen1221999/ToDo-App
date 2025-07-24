import { ACTION_ADD, ACTION_INPUT, ACTION_REMOVE } from "./Action";

export const initialState = {
  toDoList: [],
  input: "",
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION_ADD:
      if (state.input === "") return state;
      return {
        ...state,
        toDoList: [...state.toDoList, state.input],
        input: "",
      };
    case ACTION_INPUT:
      return {
        ...state,
        input: action.payload,
      };

    case ACTION_REMOVE: {
      const newList = state.toDoList.filter((item) => item !== action.payload);
      return {
        ...state,
        toDoList: newList,
      };
    }
    default:
      throw new Error("Invalid Action");
  }
};
