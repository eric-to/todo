import React from 'react';

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      className={ todo.isComplete ? "complete todo" : "todo" }
    >
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
      {todo.text}
    </div>
  );
}

export default Todo;
