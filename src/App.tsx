import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as C from './components/App.Styles'
import { Login } from './pages/pages/Login/index';
import { Cadastro } from './pages/pages/Cadastro/index';
import { Feed } from './pages/pages/Feed/index';


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/signup" element={<Cadastro />} />
    </Routes>
  </BrowserRouter>
    
  )
}

export default App;
