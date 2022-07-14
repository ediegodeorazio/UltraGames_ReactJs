import './NavBar.css';

function NavBar() {
    return ( 
      <div className = "NavBar">
        <header>
            <h1 className = "titulo"> Ultra Games<span> Tienda de juegos </span> </h1> 
        </header> 
        <div className = "nav-bg">
          <nav className = "navegacionPrincipal contenedor">
            <a href="##">Inicio</a> 
            <a href="##">Sobre nosotros</a>
            <a href="##">Clientes</a>
            <a href="##">Contacto</a>
          </nav>
        </div>
      </div>);
  }


export default NavBar;