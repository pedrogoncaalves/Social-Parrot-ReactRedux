import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import * as C from './pages/pages/Login/App.Styles'
import {Login} from './pages/pages/Login/index';
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
    
  )
}

export default App;
