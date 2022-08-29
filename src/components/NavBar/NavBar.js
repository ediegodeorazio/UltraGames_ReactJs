import './NavBar.css';
import CartWidget from '../Cart/CartWidget';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return (
    <div className='navPrincipal'>
      <div className='navBarMain'>
        <Navbar expand="lg">
          <Container>
            {/* LOGO */}
            <Navbar.Brand>
              <NavLink to="/"><img className="imgLogo" src='https://i.ibb.co/9T7f0b0/icon-page.png' alt='logo' /></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* NavBar Links */}
            <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-center'>
              <Nav className="linksMenu">
                <NavLink to='/'><button className='btnBatman'><span>Inicio</span></button></NavLink>
                {/* Links Desplegables */}
                <NavDropdown title={<button className='btnBatman'><span>Juegos</span></button>} id="basic-nav-dropdown">
                  <div className='subMenu'>
                    <NavLink className='linkSubMenu' to='/juegos/online'>Online</NavLink>
                    <NavLink className='linkSubMenu' to='/juegos/offline'>Offline</NavLink>
                  </div>
                </NavDropdown>
                <NavLink to='*'><button className='btnBatman'><span>Acerca de</span></button></NavLink>
                <NavLink to='*'><button className='btnBatman'><span>Contacto</span></button></NavLink>
              </Nav>
            </Navbar.Collapse>
            <NavLink to="cart" className='cartLink'><CartWidget /></NavLink>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}


export default NavBar;
