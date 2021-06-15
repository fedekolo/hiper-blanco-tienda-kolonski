import { makeStyles } from '@material-ui/core';
import { itemListStyle } from './ItemListStyle';
import { Item } from '../Item/Item';

const useStyles = makeStyles((theme) => itemListStyle(theme));

export const ItemList = ({ items }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        {items.map((producto,i) => 
            <Item 
                key={i}
                item={producto}
            />
        )}
    </section>

}
