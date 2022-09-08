import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as C from './components/App.Styles'
import { Login } from './pages/Login/index';
import { Cadastro } from './pages/Cadastro/index';
import { Feed } from './pages/Feed/index';
import { PerfilUsuario } from "./pages/PerfilUsuario";



function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/signup" element={<Cadastro />} />
      <Route path="/profile" element={<PerfilUsuario/>}/>
    </Routes>
  </BrowserRouter>
    
  )
}

export default App;
