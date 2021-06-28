import { makeStyles } from '@material-ui/core';
import { cartContainerStyle } from './CartContainerStyle';
import { CartList } from './components/CartList/CartList';

const useStyles = makeStyles((theme) => cartContainerStyle(theme));

export const CartContainer = () => {
    const classes = useStyles();

     return <section className={classes.container}>
         <CartList />
     </section>
}
