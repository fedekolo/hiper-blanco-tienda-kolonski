import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => itemCountStyle(theme));


export const ItemCount = ({ stock, initial }) => {
    const classes = useStyles();
    const [contador,setContador] = useState(parseInt(initial));

    const sumarCantidad = () => {
        contador<stock ? setContador(contador + 1) : setContador(contador);
    }

    const restarCantidad = () => {
        contador>0 ? setContador(contador - 1) : setContador(contador);
    }

    return <article>
        
        <ButtonGroup className={classes.container} variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={e => sumarCantidad()}>+</Button>
            <span>{contador}</span>
            <Button onClick={e => restarCantidad()}>-</Button>
        </ButtonGroup>

    </article>
}