import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UseState from "./UseState"
import UseEffect from "./UseEffect"
import UseMemo from "./UseMemo"
import UseCallback from "./UseCallback"
import UseRef from "./UseRef"

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element = {<UseEffect />}  />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-ref" element={<UseRef />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
