import { useContext, useState } from "react"
import { CountContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);
  //  wrap the component with the context provider whoever wants to use it.
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({ setCount }) {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const count = useContext(CountContext);
  const setCount = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App











// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
// import React, { lazy, Suspense, useState } from 'react'

// // const Landing = React.lazy(() => import('./components/Landing.jsx'))
// // const Dashboard = React.lazy(() => import('./components/Dashboard.jsx'))

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       {/* // Suspense API is used to fetch the component code from the bigger bundle asynchronously and takes a few seconds 
//     //   <Router>
//     //     <Appbar />
//     //     <Routes>
//     //       <Route path='/' element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//     //       <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense> } />
//     //     </Routes>
//     //   </Router> */}

//       <Count count={count} setCount={setCount} />

//     </>
//   )
// }

// function Count({ count, setCount }) {
//   return <>
//     <div>{count}</div>
//     <Buttons count={count} setCount={setCount} />

//   </>
// }
// function Buttons({ count, setCount }) {
//   return <div>
//     <button onClick={() => {
//       setCount(count+1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count-1)
//     }}>Decrease</button>
//   </div>
// }

// // export const Appbar = () => {
// //   const navigate = useNavigate();
// //   return <div>
// //     <button onClick={() => {
// //       navigate('/dashboard')
// //     }}>
// //       Dashboard
// //     </button>
// //     <button onClick={() => {
// //       navigate('/')
// //     }}>
// //       Landing
// //     </button>
// //   </div>
// // }
// export default App
