import { makeStyles } from '@material-ui/core';
import { userHugeStyle } from './UserHugeStyle'
import { Menu } from '@material-ui/icons';
import { CartWidget } from '../CartWidget/CartWidget';
import { TemporaryDrawer } from '../TemporaryDrawer/TemporaryDrawer';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => userHugeStyle(theme));

export const UserHuge = () => {
    const classes = useStyles();

    return <div className={classes.container}>
        <TemporaryDrawer anchor='top'>
            <Menu className={classes.btnMenu} color="disabled" />
        </TemporaryDrawer>
        <Link to={'/cart'} className={classes.btnCart}>
            <CartWidget />
        </Link>
    </div>
}