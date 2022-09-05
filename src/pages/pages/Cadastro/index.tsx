import * as C from '../../../components/App.Styles'
import logo from '../../../images/logo.png'
import './styles.css'

export const Cadastro = () => {
    return(
        <C.Wrapper>
            <C.largerContainer>
            <form className='Auth-form-container'>
            <div className="Auth-form-img">  <img src={logo}></img></div>
        <h3>CADASTRO</h3>
        <div className="mb-3">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="nome"
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="email" />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="senha"
          />
        </div>
        <div className="mb-3">
          <label>Confirmar senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="confirmar senha"
          />
        </div>
        <div className="mb-3">
          <label>Unidade/Apartamento</label>
          <input
            type="password"
            className="form-control"
            placeholder="senha"
          />
          </div>
           <div className="mb-3">
          <label>Link da foto</label>
          <input
            type="password"
            className="form-control"
            placeholder="senha"
          />
          </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
            </C.largerContainer>
        </C.Wrapper>


    )
}