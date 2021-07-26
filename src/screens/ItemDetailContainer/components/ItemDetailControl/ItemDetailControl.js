import { makeStyles } from '@material-ui/core';
import { itemDetailControlStyle } from './ItemDetailControlStyle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { ItemCount } from '../ItemCount/ItemCount';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => itemDetailControlStyle(theme));

export const ItemDetailControl = ({ item, onAdd, addItem,setOpenAlert }) => {
    const classes = useStyles();
    const [addCart,setAddCart] = useState(true);
    const [colorSelected,setColorSelected] = useState();

    return <section className={classes.container}>
        {addCart && <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Color</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Color"
                SelectDisplayProps={item.color}
                onChange={e => setColorSelected(e.target.value)}
                defaultValue = ""
                >
                    {item.colors.map((color,i) => 
                        <MenuItem value={color} key={i}>{color}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <ItemCount stock="8" initial="1" onAdd={onAdd} />
        </div>}
        {addCart ? 
        <Button variant="contained" disableElevation onClick={e => colorSelected===undefined ? setOpenAlert(true) : setAddCart(false)} className={classes.btn}>
            Agregar al carrito
        </Button> :
        <>
        <Link to={'/cart'} className={classes.btnCompra}>
            <Button variant="contained" disableElevation onClick={e => addItem(colorSelected)}>
                Finalizar la compra
            </Button>
        </Link>
        <Button variant="contained" disableElevation onClick={e => setAddCart(true)} className={classes.btn}>
            Cancelar compra
        </Button>
        </>
        }
    </section>

}
