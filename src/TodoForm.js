import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [time, setTime] = useState("");
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value || !time) return;
    addTodo({text: value, isComplete: false, time: time});
    setValue("");
    // window.location.reload();
  };

  const footer = () => {
    if (isAddingTodo) {
      return (
        <div>
          <input
            type="text"
            className="input"
            onChange={e => setValue(e.target.value)}
            placeholder="e.g., Meeting"
          />
          <input
            type="text"
            className="input"
            onChange={e => setTime(e.target.value)}
            placeholder="e.g., 10:15"
          />
        </div>
      );
    } else {
      return (
        <button onClick={e => setIsAddingTodo(!isAddingTodo)}>ADD NEW</button>
      );
    }
  }

  return (
    <div className="todo-form">
      {footer()}
      <button onClick={handleSubmit}>+</button>
    </div>
  )
}

export default TodoForm;
