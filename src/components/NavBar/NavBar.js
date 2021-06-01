import logo from './logo-menu.png';
import './NavBar.css';

export const NavBar = () => {
    return <>
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/#">
        <img src={logo} alt="" width="25" height="30" class="d-inline-block align-text-top"/>
        <h3>Hiper Blanco</h3>
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/#">Sabanas</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/#">Acolchados</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/#">Frazadas</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/#">Cubrecamas</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/#">Toallas y Toallones</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/#">Decoración</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/#">Baño</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/#">Almohadas</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Contacto</a>
          </li>
        </ul>
      </div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
    </>;
  }
