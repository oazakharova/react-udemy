import { useState } from 'react';

import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    // const updatedTodos = [...todos];
    // updatedTodos.splice(index, 1);
    // setTodos(updatedTodos);
    setTodos(todos.filter((_, idx) => idx !== index)); // _ - 1 todo, который мы не используем
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
