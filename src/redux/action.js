import {
  ADD_TODO,
  COMPLETE_TODO,
  REMOVE_TODO,
  UPDATE_TODO
} from "./actionType";

export const completeTodo = (todo) => ({
  type: COMPLETE_TODO,
  payload: todo
});

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    payload: todo
  };
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo
  };
};
