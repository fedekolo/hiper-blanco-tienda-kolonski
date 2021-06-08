import logo from './logo-menu.png';
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
import { UserWidget } from '../UserWidget/UserWidget';

const useStyles = makeStyles((theme) => navBarStyle(theme));

export const NavBar = () => {
    const classes = useStyles();
    
    return <nav className={classes.container}>
            <div>
              <img src={logo} alt='Logo Hiper Blanco'/>
              <div>
                <span>Hiper</span>
                <span>Blanco</span>
              </div>
            </div>
            <ul>
              <li>Inicio</li>
              <li>Categorias</li>
              <li>Tienda</li>
              <li>Local</li>
              <li>Contacto</li>
            </ul>
            <UserWidget />
          </nav>;
  }
