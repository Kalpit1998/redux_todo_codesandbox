import React, { useState } from "react";
import "./TodoInput.css";

export const TodoInput = ({ createTodo }) => {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createTodo(task);
    setTask("");
  }
  return (
    <form className="TodoInput" onSubmit={handleSubmit}>
      <input
        type="text"
        id="task"
        placeholder="Enter task"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
