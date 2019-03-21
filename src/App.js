import React, { useState } from 'react';

import TodoHeader from './TodoHeader';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { text: "Morning run", isComplete: false, time: "7:30" },
    { text: "Meeting", isComplete: false, time: "10:15" },
    { text: "Lunch with Mike", isComplete: false, time: "13:00" },
    { text: "Pay Bills", isComplete: false, time: "ALL DAY" },
    { text: "Renew gym membership", isComplete: false, time: "ALL DAY" },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    if (newTodos[index].isComplete) {
      newTodos[index].isComplete = false;
    } else {
      newTodos[index].isComplete = true;
    }
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
        {todos.length} TASKS
        <TodoForm addTodo={addTodo} />
      </footer>
    </div>
  );
}

export default App;
