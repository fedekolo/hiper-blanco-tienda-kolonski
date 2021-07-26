import logo from './logo-menu.png';
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
import { UserHuge } from './components/UserHuge/UserHuge';
import { Link } from 'react-router-dom';
import { MenuListComposition } from './components/MenuListComposition/MenuListComposition';
import ScrollTo from "react-scroll-into-view";

const useStyles = makeStyles((theme) => navBarStyle(theme));

const itemsMenu = ['Inicio','Categorias','Tienda','Local','Contacto'];

export const NavBar = ({ isInicio }) => {
    const classes = useStyles();
    
    return <nav className={classes.container}>
            <div>
              <Link to={'/'}><img src={logo} alt='Logo Hiper Blanco'/></Link>
              <div>
                <span>Hiper</span>
                <span>Blanco</span>
              </div>
            </div>
              {
                isInicio ?
                  <ul>
                    <li>
                      <ScrollTo selector={'#inicio'}>
                        {itemsMenu[0]}
                      </ScrollTo>
                    </li>
                    <li>
                      <MenuListComposition itemsMenu={itemsMenu}>
                        {itemsMenu[1]}
                      </MenuListComposition>
                    </li>
                    <li>
                      <ScrollTo selector={'#tienda'}>
                        {itemsMenu[2]}
                      </ScrollTo>
                    </li>
                    <li>
                      <ScrollTo selector={'#footer'}>
                        {itemsMenu[3]}
                      </ScrollTo>
                    </li>
                    <li>
                      <ScrollTo selector={'#footer'}>
                        {itemsMenu[4]}
                      </ScrollTo>
                    </li>
                  </ul> :
                  <ul>
                    <li>
                      <Link to={'/'}>{itemsMenu[0]}</Link>
                    </li>
                    <li>
                      <MenuListComposition itemsMenu={itemsMenu}>
                        {itemsMenu[1]}
                      </MenuListComposition>
                    </li>
                    <li>
                      <Link to={'/'}>{itemsMenu[2]}</Link>
                    </li>
                    <li>
                      <Link to={'/'}>{itemsMenu[3]}</Link>
                    </li>
                    <li>
                      <Link to={'/'}>{itemsMenu[4]}</Link>
                    </li>
                  </ul>
              }
            <UserHuge />
          </nav>;
  }
