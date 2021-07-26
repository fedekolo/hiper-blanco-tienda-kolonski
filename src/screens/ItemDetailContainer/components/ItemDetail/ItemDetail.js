import { makeStyles } from '@material-ui/core';
import { itemDetailStyle } from './ItemDetailStyle';
import { ItemDetailControl } from '../ItemDetailControl/ItemDetailControl';
import React,{useState,useContext} from 'react';
import { CartContext } from '../../../../context/CartContext';
import productNoFind from '../../images/productNoFind.svg';
import { ErrorAlert } from '../../../../components/ErrorAlert/ErrorAlert';

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = ({ item }) => {
    const classes = useStyles();
    const [salesCount,setSalesCount] = useState(1);
    const onAdd = (quantityToAdd) => setSalesCount(quantityToAdd);
    const [openAlert,setOpenAlert] = useState(false);
    const { addItem } = useContext(CartContext);
    const addItemAction = (color) => addItem(item,color,salesCount)

    return <section className={classes.container}>
        {
            item.id===undefined ?
            <div className={classes.noFind}>
                <img src={productNoFind} alt="Producto no encontrado" /> 
                <h1>Producto no encontrado!</h1>
            </div> :
            <>
                <div className={classes.img}>
                    <img src={item.pictureUrl} alt={item.description}/>
                </div>
                <div className={classes.infoProduct}>
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <span>${item.price}</span>
                    </div>
                    <div className={classes.itemDetailControl}>
                        <ItemDetailControl item={item} onAdd={onAdd} addItem={addItemAction} setOpenAlert={setOpenAlert} />
                        <ErrorAlert openAlert={openAlert} setOpenAlert={setOpenAlert} message="No se ha seleccionado ningún color" />
                    </div>
                </div>
            </> 
        }
    </section>

}
