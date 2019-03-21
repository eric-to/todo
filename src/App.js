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
  const [numTasks, setNumTasks] = useState(5);
  const [completedTodos, setCompletedTodos] = useState([
    { text: "Oh ya", isComplete: true, time: "8:30" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setNumTasks(numTasks + 1)
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
      setCompletedTodos(completedTodos.concat([newTodos[index]]));
      newTodos.splice(index, 1);
    }
    setNumTasks(numTasks + changeNumTasks);
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
        { numTasks === 1 ? "1 TASK" : `${numTasks} TASKS` }
        <TodoForm addTodo={addTodo} />
      </footer>
    </div>
  );
}

export default App;
