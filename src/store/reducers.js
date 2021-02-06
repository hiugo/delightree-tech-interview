import { SET_DATA } from "./actions";

export const initialState = {
  test: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      throw new Error();
  }
}
