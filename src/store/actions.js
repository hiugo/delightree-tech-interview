export const ADD_TASK = "ADD_TASK";
export const SET_ASSIGNED = "SET_ASSIGNED";

export const addTask = (data) => ({ type: ADD_TASK, payload: data });
export const setAssigned = (data) => ({ type: SET_ASSIGNED, payload: data });
