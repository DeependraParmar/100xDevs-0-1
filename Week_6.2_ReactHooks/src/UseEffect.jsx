import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const UseEffect = () => {
    const [selectedId, setSelectedId] = useState(0);
    const num = [1,2,3,4,5]
    return (
        <>
            <p>UseEffect is basically a unified single set of api which works like componentDidMount, componentDidUpdate, componentDidUnmount which are React Lifecycle Methods</p>

            {
                num.map(n => {
                    return <button onClick={() => setSelectedId(n)}>{n}</button>
                })
            }
            <p>id:   {selectedId}</p>
            <Todo id={selectedId} />
        </>
    )
}

const Todo = ({ id }) => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async (res) => {
            const data = await res.json();
            setTodo(data.todo);
        });
    }, [id]);

    return <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
    </div>
}
export default UseEffect
