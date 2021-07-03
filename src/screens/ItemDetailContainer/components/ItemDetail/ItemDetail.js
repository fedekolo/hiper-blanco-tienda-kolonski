import { makeStyles } from '@material-ui/core';
import { itemDetailStyle } from './ItemDetailStyle';
import { ItemDetailControl } from '../ItemDetailControl/ItemDetailControl';
import React,{useState,useContext} from 'react';
import { CartContext } from '../../../../context/CartContext';

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = ({ item }) => {
    const classes = useStyles();
    const [salesCount,setSalesCount] = useState(1);
    const onAdd = (quantityToAdd) => setSalesCount(quantityToAdd);
    const { addItem } = useContext(CartContext);
    const addItemAction = () => addItem(item[0],salesCount);

    return <section className={classes.container}>
        <div className={classes.img}>
            <img src={item[0].pictureUrl} alt={item[0].description}/>
        </div>
        <div className={classes.infoProduct}>
            <div>
                <h2>{item[0].title}</h2>
                <p>{item[0].description}</p>
                <span>${item[0].price}</span>
            </div>
            <div className={classes.itemDetailControl}>
                <ItemDetailControl item={item} onAdd={onAdd} addItem={addItemAction} />
            </div>
        </div>
    </section>

}
