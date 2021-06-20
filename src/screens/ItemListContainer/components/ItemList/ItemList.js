import { makeStyles } from '@material-ui/core';
import { itemListStyle } from './ItemListStyle';
import { Item } from '../Item/Item';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => itemListStyle(theme));

export const ItemList = ({ items }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        {items.map((producto,i) => 
            <Link to={`/tienda/${producto.id}`}>
                <Item 
                    key={i}
                    item={producto}
                />
            </Link>
        )}
    </section>

}
