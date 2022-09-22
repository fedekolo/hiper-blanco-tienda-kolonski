import { makeStyles } from '@material-ui/core';
import { cartListStyle } from './CartListStyle';
import React,{useContext,useEffect,useState } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ModalOrder } from '../ModalOrder/ModalOrder';
import Axios from 'axios';
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => cartListStyle(theme));

export const CartList = ({sendOrder,loaderModal}) => {
    const classes = useStyles();
    const { cart,clearAll } = useContext(CartContext);
    const [openModal,setOpenModal] = useState(false);
    const [cartProducts, setCartProducts] = useState(cart);
    const [loader,setLoader] = useState(false);

    useEffect(() => {
        let user = false;
        setLoader(true);

        Axios({
            method: "POST",
            withCredentials: true,
            url: "http://localhost:8080/usuarios/sesion",
            }).then(res => user = res.data);
            
        if (user) {
            Axios({
                method: "POST",
                withCredentials: true,
                data: {
                    idUsuario: user.map(e => e.id)
                },
                url: "http://localhost:8080/carrito/listar",
                }).then(res => setCartProducts(res.data))
                .catch(err => console.log(err))
        } else {
            setCartProducts(cart)
        }

        setLoader(false);
    },[cartProducts]);

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
            {loader &&
                <Loader
                type="TailSpin"
                color="var(--color-C)"
                height={100}
                width={100}
            />
            }
            {
            cartProducts.length===0 ?
            <>
            <h2>No hay productos por mostrar</h2>
            <Link to="/">
                <Button variant="contained" disableElevation>
                Volver a la tienda
                </Button>
            </Link>
            </> :
            <>
            {cartProducts.map((producto,i) =>
                <CartItem key={i} producto={producto} />
            )}
            <h2>Precio total: ${totalPrice}</h2>
            <div>
                <Button variant="contained" size="large" disableRipple onClick={e => setOpenModal(true)}>
                    Enviar orden
                </Button>
                <Button variant="outlined" disableElevation onClick={e => clearAll()}>
                    Limpiar carrito
                </Button>
            </div>
            </>
            }
        </div>
        <ModalOrder openModal={openModal} setOpenModal={setOpenModal} sendOrderAction={sendOrderAction} loaderModal={loaderModal} />
    </section>
}
