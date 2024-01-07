import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState(0)

    let count = useMemo(() => {
        let sum = 0;
        for(let i=0; i<=inputValue; i++){
            sum += i;
        }
        return sum;
    },[inputValue])
    
  return (
    <>
        <p>Usememo is used to do an expensive operation by memoising the previous input generally is used for dp</p>
        <form action="">
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        </form>
        <p>Sum is: {count}</p>
        <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
    </>
  )
}

export default UseMemo
