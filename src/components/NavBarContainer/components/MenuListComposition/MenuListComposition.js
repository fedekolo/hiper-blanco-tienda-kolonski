import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AccountCircle, KeyboardArrowDown } from '@material-ui/icons';
import Axios from "axios";
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menuList: {
    display: 'flex',
    width: 'auto',
    borderBottom: '3px var(--color-A) solid',
    borderTop: '3px var(--color-A) solid',
    '&:hover': {
        borderBottom: '3px var(--color-C) solid',
        cursor: 'pointer'                      
    }
}
}));

export const MenuListComposition = ({ user }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const getUserName = () => {
    if(user) {
      return user.map(e => e.nombre);
    } else {
      return 'Usuario';
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

const logout = () => {  
  Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:8080/usuarios/cerrarsesion",
    }).catch(err => console.log(err))
  Swal.fire({
    position: 'top',
    icon: 'success',
    title: `Hasta luego ${user.map(e => e.nombre)}!`,
    showConfirmButton: false,
    timer: 2000
  })
  .then(() => window.location.replace("/"))
}

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.menuList}
      >
        <AccountCircle/>
        <span>{getUserName()}</span>
        <KeyboardArrowDown/>
      </div>
      <div>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    { !user && <MenuItem onClick={handleClose}><Link to={'/singin'}>Iniciar Sesión</Link></MenuItem> }
                    { !user && <MenuItem onClick={handleClose}><Link to={'/singup'}>Registrarse</Link></MenuItem> }
                    { user && <MenuItem onClick={handleClose}><Link to={'/profile'}>Perfil</Link></MenuItem> }
                    { user && <MenuItem onClick={handleClose}><Link to={'/orders'}>Compras</Link></MenuItem> }
                    { user && <MenuItem onClick={e=>logout()}>Cerrar Sesión</MenuItem> }
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}