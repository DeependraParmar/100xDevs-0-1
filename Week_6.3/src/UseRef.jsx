import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    //  useRef() gives you an access to the DOM elements and also to the previous state of the component. More deeply, it helps you put something else on the dom over to what react has put on the dom. Directly get access to the react's dom manipulation.
    const [income, setIncome] = useState(20000);
    const divRef = useRef();

    useEffect(() => {
        setInterval(() => {
            divRef.current.innerHTML = 10000000000;
            console.log(divRef.current); // contains the actual dom element
        },5000)
    },[]);

    return (
        <>
            <div>Hi there, my current income tax is: <div ref={divRef}>{income}</div></div>
        </>
    )
}

export default UseRef
