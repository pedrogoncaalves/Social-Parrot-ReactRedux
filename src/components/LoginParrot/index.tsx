import * as C from '../App.Styles'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles.css'
import logo from '../../images/logo.png'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useNavigate } from 'react-router-dom'

export const LoginParrot = () => {

  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if(email && password) {
      const isLogged = await auth.signin(email, password)
      if(isLogged) {
        navigate('/profile')

      }
    }

  }

   return(
        <C.Wrapper>
          <C.Container>
        
           
      <form className="Auth-form">
      <div className="Auth-form-img">  <img src={logo}></img></div>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="email"
              value={email}
               onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="senha"
              value={password}
               onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={handleLogin}type="submit" className="btn-btn-primary">
              Entrar
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
             <a href="#">Cadastre-se</a>
          </p>
        </div>
      </form>
    

          </C.Container>
        </C.Wrapper>
        
   )
}