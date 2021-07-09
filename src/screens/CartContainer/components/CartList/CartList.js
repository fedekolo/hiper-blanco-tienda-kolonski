import { makeStyles } from '@material-ui/core';
import { cartListStyle } from './CartListStyle';
import React,{useContext,useState} from 'react';
import { CartContext } from '../../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => cartListStyle(theme));

export const CartList = ({sendOrder}) => {
    const classes = useStyles();
    const { cart } = useContext(CartContext);
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    
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
            <div>
                <input placeholder="Nombre" onChange={e => setName(e.target.value)}></input>
                <input placeholder="Telefono" onChange={e => setPhone(e.target.value)}></input>
                <input placeholder="Mail" onChange={e => setEmail(e.target.value)}></input>
                <Button variant="contained" disableElevation onClick={e => sendOrder(name,phone,email,cart,totalPrice)}>
                    Enviar orden
                </Button>
            </div>
            </>
            }
        </div>
    </section>

}
