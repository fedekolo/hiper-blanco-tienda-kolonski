import { makeStyles } from '@material-ui/core';
import { cartWidgetStyle } from './CartWidgetStyle'
import { ShoppingCart } from '@material-ui/icons';
import React,{useContext} from 'react';
import { CartContext } from '../../../../context/CartContext';

const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = () => {
    const classes = useStyles();
    const { cart } = useContext(CartContext);

    let totalProducts = 0;
    cart.map((producto) =>
            totalProducts = totalProducts + producto.quantity
        )

    return <div className={classes.container}>
        {cart.length>0 && 
        <>
        <ShoppingCart className={classes.btn} color="disabled" />
        <div className={totalProducts>9 ? classes.highProducts : classes.fewProducts}>{totalProducts}</div>
        </>
        }
    </div>
}