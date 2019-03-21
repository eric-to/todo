import React from 'react';

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      className={todo.isComplete ? "completed todo" : "todo"}
    >
      <div className="checkbox-container-container">
        <label className="checkbox-container">
          <input type="checkbox" readOnly checked={todo.isComplete ? "checked" : ""} disabled={todo.isComplete ? true : false} onClick={() => completeTodo(index)} />
          <span className="checkmark"></span>
        </label>
        <div>{todo.text}</div>
      </div>
      <div>
        <div className="time">{todo.isComplete ? "" : todo.time}</div>
      </div>
    </div>
  );
}

export default Todo;
