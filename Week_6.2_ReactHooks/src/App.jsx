import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'

function App() {

  return (
    <>  
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/use-effect' element={<UseEffect />} />
            <Route path='/use-memo' element={<UseMemo />} />
            <Route path='/use-callback' element={<UseCallback />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
