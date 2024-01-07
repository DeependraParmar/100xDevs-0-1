import React from 'react'

const UseCallback = () => {
  return (
    <>
        <ButtonComponent /> 
    </>
  )
}

const ButtonComponent = (inputFunction) => {
    console.log("Button Component Redered");

    return <div>
        <p>I am a button component</p>
    </div>
}
export default UseCallback
