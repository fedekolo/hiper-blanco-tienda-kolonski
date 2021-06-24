import { makeStyles } from '@material-ui/core';
import { userHugeStyle } from './UserHugeStyle'
import { Search, AccountCircle, Menu } from '@material-ui/icons';
import { CartWidget } from '../CartWidget/CartWidget';
import { TemporaryDrawer } from '../TemporaryDrawer/TemporaryDrawer';

const useStyles = makeStyles((theme) => userHugeStyle(theme));

export const UserHuge = () => {
    const classes = useStyles();

    return <div className={classes.container}>
        <TemporaryDrawer anchor='top'>
            <Menu className={classes.btnMenu} color="disabled" />
        </TemporaryDrawer>
        <Search className={classes.btn} color="disabled" />
        <AccountCircle className={classes.btn} color="disabled" />
        <CartWidget />        
    </div>
}