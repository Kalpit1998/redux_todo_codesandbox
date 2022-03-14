import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TodoInput } from "./TodoInput";
import { Todo } from "./Todo";
import "./TodoList.css";
import { addTodo, completeTodo, removeTodo, updateTodo } from "../redux/action";

export const TodoList = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  let dispatch = useDispatch();

  const create = (newTodo) => {
    dispatch(addTodo(newTodo));
  };

  const update = (id, updatedTask) => {
    dispatch(updateTodo({ id, updatedTask }));
  };
  // console.log(state, "from todo list component");
  return (
    <div className="TodoList">
      <h1>Todo App With Redux</h1>
      <TodoInput createTodo={create} />
      <ul>
        <TransitionGroup className="todo=list">
          {state.todos &&
            state.todos.map((todo) => {
              return (
                <CSSTransition key={todo.id} className="todo">
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    toggleTodo={() => {
                      dispatch(completeTodo(todo));
                    }}
                    removeTodo={() => {
                      dispatch(removeTodo(todo));
                    }}
                    updateTodo={update}
                  />
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ul>
    </div>
  );
};
