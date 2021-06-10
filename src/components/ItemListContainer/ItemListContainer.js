import { makeStyles } from '@material-ui/core';
import { itemListContainerStyle } from './ItemListContainerStyle';
import { ItemCount } from '../ItemCount/ItemCount'

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = ({ mensaje }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        <h3>{mensaje}</h3>
        <ItemCount stock="8" initial="0" />
    </section>

}
