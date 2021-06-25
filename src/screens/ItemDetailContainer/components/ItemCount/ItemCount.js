import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = ({ stock, initial, onAdd }) => {
    const classes = useStyles();
    const [contador,setContador] = useState(parseInt(initial));

    const sumarCantidad = () => {
        contador<stock ? setContador(contador + 1) : setContador(contador);
        
    }

    const restarCantidad = () => {
        contador>initial ? setContador(contador - 1) : setContador(contador);
    }

    return <article>
        
        <ButtonGroup className={classes.container} variant="text" aria-label="text primary button group">
            <Button onClick={e => sumarCantidad() && onAdd(contador)}>+</Button>
            <Button>{contador}</Button>
            <Button onClick={e => restarCantidad() && onAdd(contador)}>-</Button>
        </ButtonGroup>

    </article>
}