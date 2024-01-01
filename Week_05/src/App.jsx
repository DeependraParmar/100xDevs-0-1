import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './CreateTodo.jsx'
import Todos from './Todos.jsx'

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const data = await fetch("http://localhost:3000/todos");
    const todo = await data.json();
    setTodos(todo.todos);
  }
  useEffect(() => {
    getTodos();
  },[]);

  return (
    <>
      <h1>Todo App</h1>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  )
}

export default App
