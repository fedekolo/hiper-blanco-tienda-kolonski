import { makeStyles } from '@material-ui/core';
import { cartListStyle } from './CartListStyle';
import React,{useContext} from 'react';
import { CartContext } from '../../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => cartListStyle(theme));

export const CartList = () => {
    const classes = useStyles();
    const { cart } = useContext(CartContext);
    
    let totalPrice = 0;
    cart.map((producto) =>
            totalPrice = totalPrice + parseInt(producto.item.price)*producto.quantity
        )

    return <section className={classes.container}>
        <h1>CARRITO DE COMPRAS</h1>
        <div>
            {
            cart.length===0 ?
            <>
            <h2>No hay productos por mostrar</h2>
            <Link to="/">
                <Button variant="contained" disableElevation>
                Volver a la tienda
                </Button>
            </Link>
            </> :
            <>
            {cart.map((producto,i) =>
                <CartItem key={i} producto={producto} />
            )}
            <h2>Precio total: ${totalPrice}</h2>
            </>
            }
        </div>
    </section>

}
