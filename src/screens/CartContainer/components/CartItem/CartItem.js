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
            {producto!==undefined && 
            <>
            <div className={classes.info}>
                <div className={classes.img}>
                    <img src={producto.item[0].pictureUrl} alt={producto.item[0].title}/>
                </div>
                <div>
                    <h2>{producto.item[0].title}</h2>
                    <h4>{producto.item[0].description}</h4>
                    <h4>{producto.item[0].colors}</h4>
                </div>
            </div>
            <div className={classes.priceAction}>
                <h2>{producto.item[0].price}</h2>
                <h3>Hay {producto.quantity} unidad/es</h3>
                <Delete onClick={e => removeItem(producto.item[0].id)} color="disabled" className={classes.btnDelete} />
            </div>
            </>
            }       
        </article>

}

// id: "1",
// catId: "9",
// title: "Almohada",
// description: "Comoda como ninguna",
// price: "$800",
// colors: ["blanco","terracota"],
// pictureUrl: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/1/2/12652.jpg"
