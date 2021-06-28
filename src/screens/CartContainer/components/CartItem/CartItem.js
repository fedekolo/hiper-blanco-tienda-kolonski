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
                <img src={producto.pictureUrl} alt={producto.title}/>
            </div>
            <div>
                <h2>{producto.title}</h2>
                <h4>{producto.description}</h4>
                <h4>{producto.colors}</h4>
            </div>
        </div>
        <div className={classes.priceAction}>
            <h2>{producto.price}</h2>
            <Delete onClick={e => removeItem(producto.id)} color="disabled" className={classes.btnDelete} />
        </div>
    </article>

}

// id: "1",
// catId: "9",
// title: "Almohada",
// description: "Comoda como ninguna",
// price: "$800",
// colors: ["blanco","terracota"],
// pictureUrl: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/1/2/12652.jpg"
