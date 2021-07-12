import { makeStyles } from '@material-ui/core';
import { cartListStyle } from './CartListStyle';
import React,{useContext,useState} from 'react';
import { CartContext } from '../../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ModalOrder } from '../ModalOrder/ModalOrder';

const useStyles = makeStyles((theme) => cartListStyle(theme));

export const CartList = ({sendOrder,closeModal}) => {
    const classes = useStyles();
    const { cart,clearAll } = useContext(CartContext);
    const [openModal,setOpenModal] = useState(false);
    
    let totalPrice = 0;
    cart.map((producto) =>
            totalPrice = totalPrice + parseInt(producto.item.price)*producto.quantity
        )
    
    const sendOrderAction = (name,phone,email) => {
        sendOrder(name,phone,email,cart,totalPrice);
        setOpenModal(false);
        clearAll();
    }

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
                <Button variant="contained" disableElevation onClick={e => setOpenModal(true)}>
                    Enviar orden
                </Button>
            </div>
            </>
            }
        </div>
        <ModalOrder openModal={openModal} setOpenModal={setOpenModal} sendOrderAction={sendOrderAction} />
    </section>
}
