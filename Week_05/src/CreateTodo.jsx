import React, { useState } from 'react'

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const sendTodo = async (e) => {
        e.preventDefault();
        const todo = {title, description};
        const data = await fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {"Content-Type": "application/json"},
        });
        const response = await data.json();
    }
  return (
    <div>
          <form action="">
              <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} /> <br />
              <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} /> <br />
          </form>
              <button onClick={sendTodo} type="submit">Add a Todo</button>
    </div>
  )
}

export default CreateTodo
