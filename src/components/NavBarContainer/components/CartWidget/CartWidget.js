import { makeStyles } from '@material-ui/core';
import { cartWidgetStyle } from './CartWidgetStyle'
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = () => {
    const classes = useStyles();

    return <div className={classes.container}>
        <ShoppingCart className={classes.btn} color="disabled" />
    </div>
}