import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Todo.css";

export const Todo = ({
  toggleTodo,
  id,
  completed,
  task,
  removeTodo,
  updateTodo
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  function handleUpdate(e) {
    e.preventDefault();

    updateTodo(id, editTask);
    setIsEditing(false);
  }

  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      {isEditing ? (
        <CSSTransition key="editing" timeout={500} classNames="form">
          <form className="todo-edit-form" onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Enter task"
              name="task"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </CSSTransition>
      ) : (
        <CSSTransition key="normal" timeout={500} className="task-text">
          <li className="Todo-task" onChange={toggleTodo}>
            {task}
          </li>
        </CSSTransition>
      )}

      <div className="Todo-buttons">
        <button onClick={() => setIsEditing(true)}>
          <i className="fas fa-pen" />
        </button>
        <button onClick={removeTodo}>
          <i className="fas fa-trash" />
        </button>
      </div>
    </TransitionGroup>
  );
};
