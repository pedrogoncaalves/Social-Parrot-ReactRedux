import * as C from './App.Styles'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles.css'
import logo from '../../../images/logo.png'

export const Login = () => {
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
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="senha"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn-btn-primary">
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