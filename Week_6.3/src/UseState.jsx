import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    // Re-render means to call the function again and again.
    console.log("App Rerendered")

    return (
        <>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button>Count is: {count}</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default UseState;
