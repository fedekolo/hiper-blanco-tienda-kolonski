import logo from './logo-menu.png';
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
import { UserHuge } from './components/UserHuge/UserHuge';
import { Link } from 'react-router-dom';
import { MenuListComposition } from './components/MenuListComposition/MenuListComposition';

const useStyles = makeStyles((theme) => navBarStyle(theme));

export const NavBar = () => {
    const classes = useStyles();
    
    return <nav className={classes.container}>
            <div>
              <Link to={'/'}><img src={logo} alt='Logo Hiper Blanco'/></Link>
              <div>
                <span>Hiper</span>
                <span>Blanco</span>
              </div>
            </div>
            <ul>
              <li><Link to={'/'}>Inicio</Link></li>
              <li>
                <MenuListComposition>
                  Categorias
                </MenuListComposition>
              </li>
              <li>Tienda</li>
              <li>Local</li>
              <li>Contacto</li>
            </ul>
            <UserHuge />
          </nav>;
  }
