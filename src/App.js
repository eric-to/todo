import React, { useState } from 'react';

import TodoHeader from './TodoHeader';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { text: "Morning run", isComplete: false },
    { text: "Meeting", isComplete: false },
    { text: "Lunch with Mike", isComplete: false },
    { text: "Pay Bills", isComplete: false },
    { text: "Renew gym membership", isComplete: false },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <TodoHeader />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <footer className="card card-footer">
        {todos.length} Tasks
        <TodoForm addTodo={addTodo} />
      </footer>
    </div>
  );
}

export default App;
