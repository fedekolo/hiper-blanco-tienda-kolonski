import { makeStyles } from '@material-ui/core';
import { itemListContainerStyle } from './ItemListContainerStyle';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = () => {
    const classes = useStyles();

    return <section className={classes.container}>
        <h3>Aqui va la tienda</h3>
    </section>

}
