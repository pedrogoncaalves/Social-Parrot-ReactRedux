import navbarbrand from '../../images/navbarbrand.jpg';
import './styles.css'
import { Container, Navbar } from 'react-bootstrap';



export const Header = () => {
    return(
        <Navbar fixed="top" className="navbar__container" >
        <Container>
          <Navbar.Brand href="#home"><img src={navbarbrand}></img></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text color="#76BB4C">
              Olá,  <a href="#login">usuário</a>
              <button className='btn-logout'>sair</button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}