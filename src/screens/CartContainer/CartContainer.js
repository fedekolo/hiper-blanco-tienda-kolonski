import { makeStyles } from '@material-ui/core';
import { cartContainerStyle } from './CartContainerStyle';
// import React,{useContext} from 'react';
// import { CartContext } from '../../context/CartContext';

const useStyles = makeStyles((theme) => cartContainerStyle(theme));

export const CartContainer = () => {
    const classes = useStyles();
    // const { cart } = useContext(CartContext);

     return <section className={classes.container}>
         <h1>Holis</h1>
     </section>
}
