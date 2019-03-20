import React from 'react';

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isDone ? "line-through" : "" }}
    >
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
      {todo.text}
    </div>
  );
}

export default Todo;
