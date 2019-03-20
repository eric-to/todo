import React from 'react';

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      className={ todo.isComplete ? "complete todo" : "todo" }
    >
      <label className="checkbox-container">
        <input type="checkbox" onClick={() => completeTodo(index)} />
        <span class="checkmark"></span>
      </label>
      {todo.text}
    </div>
  );
}

export default Todo;
