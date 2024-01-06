import React, { useState } from 'react'

let counter = 3;
const Todo = () => {
  const [todo,setTodo] = useState([{
    id:1,
    title: "gym",
    description: "go to gym"
  }, {
      id: 1,
      title: "gym",
      description: "go to gym"
    }, {
      id: 1,
      title: "gym",
      description: "go to gym"
    }])

    const addTodos = () => {
      setTodo([...todo ,{
        id: counter++,
        title: Math.random(),
        description: Math.random()
      }])
    }
  return (
    <>
        {
          todo && todo.map((todo) => {
            return <TodoComp key={todo.id} title={todo.title} description={todo.description} />
          })
        }
        <button onClick={addTodos}>Add new todo</button>
    </>
  )
}

function TodoComp({title,description}){
  return <>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </>
}
export default Todo
