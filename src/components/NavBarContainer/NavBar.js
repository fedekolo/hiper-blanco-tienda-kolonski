import logo from './logo-menu.png';
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
import { UserHuge } from './components/UserHuge/UserHuge';
import { Link } from 'react-router-dom';
import { MenuListComposition } from './components/MenuListComposition/MenuListComposition';

const useStyles = makeStyles((theme) => navBarStyle(theme));

const itemsMenu = ['Inicio','Categorias','Tienda','Local','Contacto'];

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
              <li><Link to={'/'}>{itemsMenu[0]}</Link></li>
              <li>
                <MenuListComposition itemsMenu={itemsMenu}>
                {itemsMenu[1]}
                </MenuListComposition>
              </li>
              <li>{itemsMenu[2]}</li>
              <li>{itemsMenu[3]}</li>
              <li>{itemsMenu[4]}</li>
            </ul>
            <UserHuge />
          </nav>;
  }
