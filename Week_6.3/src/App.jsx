import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UseState from "./UseState"
import UseEffect from "./UseEffect"
import UseMemo from "./UseMemo"

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element = {<UseEffect />}  />
          <Route path="/use-memo" element={<UseMemo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
