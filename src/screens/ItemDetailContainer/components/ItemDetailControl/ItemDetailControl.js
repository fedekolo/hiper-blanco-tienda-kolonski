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

export const ItemDetailControl = ({ item, onAdd, addItem }) => {
    const classes = useStyles();
    const [addCart,setAddCart] = useState(true);

    return <section className={classes.container}>
        {addCart && <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Color</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={item.colors}
                label="Color"
                >
                    {item.colors.map((color,i) => 
                        <MenuItem value={color} key={i}>{color}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <ItemCount stock="8" initial="1" onAdd={onAdd} />
        </div>}
        {addCart ? 
        <Button variant="contained" disableElevation onClick={e => setAddCart(false)} className={classes.btn}>
            Agregar al carrito
        </Button> :
        <>
        <Link to={'/cart'}>
            <Button variant="contained" disableElevation onClick={e => addItem()} className={classes.btn}>
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
