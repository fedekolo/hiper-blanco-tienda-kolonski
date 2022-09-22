import { makeStyles } from '@material-ui/core';
import { userHugeStyle } from './UserHugeStyle'
import { Menu } from '@material-ui/icons';
import { CartWidget } from '../CartWidget/CartWidget';
import { TemporaryDrawer } from '../TemporaryDrawer/TemporaryDrawer';
import { Link } from 'react-router-dom';
import { MenuListComposition } from '../MenuListComposition/MenuListComposition';

const useStyles = makeStyles((theme) => userHugeStyle(theme));

export const UserHuge = ({user}) => {
    const classes = useStyles();

    return <div className={classes.container}>  
        <TemporaryDrawer anchor='top' user={user}>
            <Menu className={classes.btnMenu} color="disabled" />
        </TemporaryDrawer>
        <Link to={'/cart'} className={classes.btnCart}>
            <CartWidget />
        </Link>
        <MenuListComposition user={user} />
    </div>
}