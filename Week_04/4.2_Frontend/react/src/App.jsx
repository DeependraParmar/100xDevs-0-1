import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Count is {count} <br />
        <button onClick={() => setCount((count) => count + 1)}>+
        </button><span>  </span>
        <button onClick={() => setCount((count) => count - 1)}>-
        </button>
      </div>
    </>
  )
}

export default App;
