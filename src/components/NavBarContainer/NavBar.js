import logo from './logo-menu.png';
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
import { UserHuge } from './components/UserHuge/UserHuge';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import React,{useEffect, useState} from 'react';

const useStyles = makeStyles((theme) => navBarStyle(theme));

export const NavBar = () => {
    const classes = useStyles();
    const [user,setUser] = useState();

    useEffect(() => {
      Axios({
        method: "POST",
        withCredentials: true,
        url: "http://localhost:8080/usuarios/sesion",
        }).then(res => res.data===false ? setUser(false) : setUser(res.data))
        .catch(err => console.log(err));
    },[]);

    return <nav className={classes.container}>
            <div>
              <Link to={'/'}><img src={logo} alt='Logo Hiper Blanco'/></Link>
              <div>
                <span>Hiper</span>
                <span>Blanco</span>
              </div>
            </div>
            <ul>
              <li>
                <Link to={'/'}>Inicio</Link>
              </li>
              <li>
                <Link to={'/store'}>Tienda</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contacto</Link>
              </li>
            </ul>
            <UserHuge user={user!==undefined && user} />
          </nav>
  }
