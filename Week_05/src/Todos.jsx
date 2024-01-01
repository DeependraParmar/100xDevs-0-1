import React from 'react'

const Todos = ({ todos }) => {
    console.log(todos);
    return (
        <div className='todoCollection'>
            {
                todos && todos.map((todo) => {
                    return <div key={todo._id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <button>{todo.isCompleted == true ? "Done" : "Mark as Done"}</button>
                    </div>
                })
            }
        </div>
    )
}

export default Todos
