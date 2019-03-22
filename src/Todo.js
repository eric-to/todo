import React from 'react';

function Todo({ todo, index, completeTodo }) {
  // A todo list is comprised of many todos. Here we've isolated the code needed
  // to create a single todo. I made two CSS classes, completed and todo, which
  // are used to style todos based on their completion status. Both incomplete and
  // complete todos are types of todos. Therefore, they both belong to the todo class.
  // Since completed todos look a little bit different (strikethrough), these elements
  // get an additional 'completed' class.
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
