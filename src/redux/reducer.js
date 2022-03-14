import {
  ADD_TODO,
  COMPLETE_TODO,
  REMOVE_TODO,
  UPDATE_TODO
} from "./actionType";
import { v4 as uuidv4 } from "uuid";

const init_state = {
  todos: []
  // todos: [{ id: 1, task: "wake up", completed: false }]
};

export const todoReducer = (state = init_state, action) => {
  switch (action.type) {
    case REMOVE_TODO:
      const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodo
      };
    case UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updatedTask };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos
      };
    case ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false
      };

      const addedTodo = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodo
      };
    case COMPLETE_TODO:
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : t
      );
      return {
        ...state,
        todos: toggleTodos
      };
    default:
      return state;
  }
};
