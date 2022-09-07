import { FormEvent, useState } from 'react';
import * as C from '../App.Styles';
import logo from '../../images/logo.png';
import './styles.css';
import cadastroUsuario from '../../services/config/cadastroUser';

export const CadastroUsuario = () => {

  const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmSenha, setConfirmSenha] = useState<string>("");
    const [apartment, setApartment] = useState<string>("");
    const [userphoto, setUserphoto] = useState<string>("");

    const cadastro = async (event: FormEvent) => {
      event.preventDefault();

      const payload = {
        name,
        email,
        password,
        apartment,
        userphoto
      }
      try {
        const response = await cadastroUsuario(payload)
        if(response.status !== 201) {
          return alert("Ocorreu um erro!")
        }
        alert("Cadastro efetuado com sucesso!")
      } catch (error) {
        alert("Ocorreu um erro!")
        
      }

    } 

    return(
        <C.Wrapper>
            <C.largerContainer>
            <form className='Auth-form-container' onSubmit={cadastro}>
            <div className="Auth-form-img">  <img src={logo}></img></div>
        <h3>CADASTRO</h3>
        <div className="mb-3">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="nome"
            value={name} onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="email" value={email} 
          onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="senha"
            value={password} onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Confirmar senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="confirmar senha"
            value={confirmSenha} onChange={(event) => setConfirmSenha(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Unidade/Apartamento</label>
          <input
            type="text"
            className="form-control"
            placeholder="unidade"
            value={apartment} onChange={(event) => setApartment(event.target.value)}
          />
          </div>
           <div className="mb-3">
          <label>Link da foto</label>
          <input
            type="text"
            className="form-control"
            placeholder="link da foto"
            value={userphoto} onChange={(event) => setUserphoto(event.target.value)}
          />
          </div>
        <div className="d-grid">
          <button type="submit" className="btn-btn-primary">
            
            Entre
          </button>
        </div>
        
      </form>
            </C.largerContainer>
        </C.Wrapper>


    )
}