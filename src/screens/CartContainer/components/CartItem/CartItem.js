import { makeStyles } from '@material-ui/core';
import { cartItemStyle } from './CartItemStyle';
import React,{useContext} from 'react';
import { CartContext } from '../../../../context/CartContext';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => cartItemStyle(theme));

export const CartItem = ({ producto }) => {
    const classes = useStyles();
    const { removeItem } = useContext(CartContext);

    return <article className={classes.container}>
            <div className={classes.info}>
                <div className={classes.img}>
                    <img src={producto.item.pictureUrl} alt={producto.item.title}/>
                </div>
                <div className={classes.infoDetail}>
                    <h2>{producto.item.title}</h2>
                    <h4>{producto.item.description}</h4>
                    <h4>Color: {producto.color}</h4>
                </div>
            </div>
            <div className={classes.priceAction}>
                <h2>$ {producto.item.price} c/u</h2>
                <h3>Hay {producto.quantity} {producto.quantity>1 ? "unidades" : "unidad"}</h3>
                <Delete onClick={e => removeItem(producto.item.id)} color="disabled" className={classes.btnDelete} />
            </div>
        </article>

}