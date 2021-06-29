import { makeStyles } from '@material-ui/core';
import { cartListStyle } from './CartListStyle';
import React,{useContext} from 'react';
import { CartContext } from '../../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';

const useStyles = makeStyles((theme) => cartListStyle(theme));

export const CartList = () => {
    const classes = useStyles();
    const { cart } = useContext(CartContext);

    return <section className={classes.container}>
        <div>
            {cart.map((producto,i) =>
                <CartItem key={i} producto={producto} />
            )}
        </div>
    </section>

}