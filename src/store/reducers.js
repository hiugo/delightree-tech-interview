import { ADD_TASK, SET_ASSIGNED } from "./actions";

export const initialState = {
  tasks: [],
  assigned: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case SET_ASSIGNED:
      return {
        ...state,
        assigned: action.payload,
      };

    default:
      throw new Error();
  }
}
