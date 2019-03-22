import React, { useState } from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';

function App() {
  const [todos, setTodos] = useState(JSON.parse(sessionStorage.getItem("todos")) || []);
  const [numTasks, setNumTasks] = useState(todos.length);
  const [completedTodos, setCompletedTodos] = useState(JSON.parse(sessionStorage.getItem("completedTodos")) || []);

  const addTodo = text => {
    const newTodos = [...todos, text];
    setNumTasks(numTasks + 1)
    sessionStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const completeTodo = index => {
    let newTodos = [...todos];
    let changeNumTasks;
    if (newTodos[index].isComplete) {
      newTodos[index].isComplete = false;
      changeNumTasks = 1;
    } else {
      newTodos[index].isComplete = true;
      changeNumTasks = -1;
      sessionStorage.setItem("completedTodos", JSON.stringify(completedTodos.concat([newTodos[index]])));
      setCompletedTodos(completedTodos.concat([newTodos[index]]));
      newTodos.splice(index, 1);
    }
    setNumTasks(numTasks + changeNumTasks);
    sessionStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <TodoHeader />
      <div className="todo-list">
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
        <div className="light-purple">{ numTasks === 1 ? "1 TASK" : `${numTasks} TASKS` }</div>
        <TodoForm addTodo={addTodo} />
      </footer>
    </div>
  );
}

export default App;
