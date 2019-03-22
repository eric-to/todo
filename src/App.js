import React, { useState } from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';

function App() {
  // I chose to use React hooks instead of the usual class-style React components because
  // it looked a little cleaner (also because I wanted to experiment!). Here are the states
  // we need: todos, completed todos (keeping track of this so we know what todos to place
  // at the bottom of the list without having to sort). Lastly, we have the number of tasks,
  // which gets updated upon adding and completing todos.
  const [todos, setTodos] = useState(JSON.parse(sessionStorage.getItem("todos")) || []);
  const [completedTodos, setCompletedTodos] = useState(JSON.parse(sessionStorage.getItem("completedTodos")) || []);
  const [numTasks, setNumTasks] = useState(todos.length);

  // There are two primary functions we need here: one handling adding todos and another handling
  // completing todos. Here we make a copy of the todos state and add on the new state (so as to not
  // mutate the state). We update the copy of todos in our sessionStorage (where we store session-related
  // data). We then update the number of tasks and set the new todos (this is like using setState in
  // traditional React style).
  const addTodo = text => {
    const newTodos = [...todos, text];
    sessionStorage.setItem("todos", JSON.stringify(newTodos));
    setNumTasks(numTasks + 1)
    setTodos(newTodos);
  }

  const completeTodo = index => {
    // Again, we make a copy of the current todos state.
    let newTodos = [...todos];
    // We change the completion status of the current todo clicked.
    newTodos[index].isComplete = true;
    // We also update the data we've stored regarding completed todos in the current session.
    sessionStorage.setItem("completedTodos", JSON.stringify(completedTodos.concat([newTodos[index]])));
    // Finally, we remove the todo from the incompleted todos list.
    newTodos.splice(index, 1);
    // We also update our local todos data because it was changed on the previous line.
    sessionStorage.setItem("todos", JSON.stringify(newTodos));

    // Finally, we appropriately update the state.
    setNumTasks(numTasks - 1);
    setCompletedTodos(completedTodos.concat([newTodos[index]]));
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <TodoHeader />
      <div className="todo-list">
        {/* We add an index to avoid the pesky console errors, and because it is good practice. */}
        {todos.concat(completedTodos).map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <footer className="card card-footer">
        {/* We display "TASK" instead of "TASKS" if there's only 1 task left to do. */}
        <div className="light-purple">{ numTasks === 1 ? "1 TASK" : `${numTasks} TASKS` }</div>
        <TodoForm addTodo={addTodo} />
      </footer>
    </div>
  );
}

export default App;
