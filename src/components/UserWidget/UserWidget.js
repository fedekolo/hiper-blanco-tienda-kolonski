import { makeStyles } from '@material-ui/core';
import { userWidgetStyle } from './UserWidgetStyle'
import { Search, AccountCircle, ShoppingCart, Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme) => userWidgetStyle(theme));

export const UserWidget = () => {
    const classes = useStyles();

    return <div className={classes.container}>
        <Menu className={classes.btnMenu} color="disabled" />
        <Search className={classes.btn} color="disabled" />
        <AccountCircle className={classes.btn} color="disabled" />
        <ShoppingCart className={classes.btn} color="disabled" />
    </div>
}