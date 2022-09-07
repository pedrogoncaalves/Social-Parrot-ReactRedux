import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as C from './components/App.Styles'
import { Login } from './pages/pages/Login/index';
import { Cadastro } from './pages/pages/Cadastro/index';
import { Feed } from './pages/pages/Feed/index';
import { PerfilUsuario } from "./pages/pages/PerfilUsuario";
import { RequireAuth } from "./contexts/Auth/RequireAuth";


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feed" element={<RequireAuth><Feed /></RequireAuth>} />
      <Route path="/signup" element={<Cadastro />} />
      <Route path="/profile" element={<RequireAuth><PerfilUsuario/></RequireAuth>} />
    </Routes>
  </BrowserRouter>
    
  )
}

export default App;
