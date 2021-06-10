import { makeStyles } from '@material-ui/core';
import { userHugeStyle } from './UserHugeStyle'
import { Search, AccountCircle, Menu } from '@material-ui/icons';
import { CartWidget } from '../CartWidget/CartWidget'

const useStyles = makeStyles((theme) => userHugeStyle(theme));

export const UserHuge = () => {
    const classes = useStyles();

    return <div className={classes.container}>
        <Menu className={classes.btnMenu} color="disabled" />
        <Search className={classes.btn} color="disabled" />
        <AccountCircle className={classes.btn} color="disabled" />
        <CartWidget />        
    </div>
}