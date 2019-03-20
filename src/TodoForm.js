import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const footer = () => {
    if (isAddingTodo) {
      return (
        <input
        type="text"
        className="input"
        onChange={e => setValue(e.target.value)}
        />
      );
    } else {
      return (
        <span>
          ADD NEW
        </span>
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {footer()}
      <button onClick={e => setIsAddingTodo(!isAddingTodo)}>+</button>
    </form>
  )
}

export default TodoForm;
