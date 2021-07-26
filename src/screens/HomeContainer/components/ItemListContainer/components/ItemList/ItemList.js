import { makeStyles } from '@material-ui/core';
import { itemListStyle } from './ItemListStyle';
import { Item } from '../Item/Item';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => itemListStyle(theme));

export const ItemList = ({ items }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        {
            items===undefined ?
            <h1>No hay productos para mostrar</h1> :
            items.map((producto,i) => 
                <Link to={`/item/${producto.id}`} key={i}>
                    <Item 
                        key={i}
                        item={producto}
                    />
                </Link> 
            )
        }
    </section>

}
