import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  // We have two input fields, text and time, which make up a todo. Both are required.
  // We first initialize them as empty strings and dynamically update them as the user
  // types.
  // We also establish a boolean state called isAddingToDo, which simply indicates whether
  // the user is currently attempting to add a new todo. If they are, then should hide the
  // "ADD NEW" text and replace it with the appropriate input fields.
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  // On submission of the form, we make sure not to refresh the page by using preventDefault.
  // Both text and time are required for todos, so we return early if the user has left those
  // fields blank. Otherwise, we add the todo to the todo list and reset the text and time
  // states. We also hide the input fields until the user clicks the '+' button to indicate
  // that they want to add another todo.
  const handleSubmit = e => {
    e.preventDefault();
    if (!text || !time) return;
    addTodo({text: text, isComplete: false, time: time});
    setText("");
    setTime("");
    setIsAddingTodo(!isAddingTodo);
  };

  // Here we check to see if the user is trying to add a todo (this changes based on whether the
  // user has clicked the '+' button or not). If the user wants to add a new todo, we show the
  // the input fields and hide the "ADD NEW" text. When the user clicks on the '+' again, we simply
  // negate the isAddingTodo boolean.
  const footer = () => {
    if (isAddingTodo) {
      return (
        <div>
          <input
            type="text"
            className="input"
            onChange={e => setText(e.target.value)}
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

  // Here we've abstracted away the stuff that goes into the todo form / footer for our
  // todo list. Then we simply add a button, which upon clicking invokes the handleSubmit
  // logic.
  return (
    <div className="todo-form">
      {footer()}
      <button onClick={handleSubmit}>+</button>
    </div>
  )
}

export default TodoForm;
