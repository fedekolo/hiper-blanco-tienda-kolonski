import { makeStyles } from '@material-ui/core';
import { itemDetailStyle } from './ItemDetailStyle';
import { ItemDetailControl } from '../ItemDetailControl/ItemDetailControl';

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = ({ item }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        <div className={classes.img}>
            <img src={item.pictureUrl} alt={item.description}/>
        </div>
        <div className={classes.infoProduct}>
            <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span>{item.price}</span>
            </div>
            <div className={classes.itemDetailControl}>
                <ItemDetailControl item={item} />
            </div>
        </div>
    </section>

}
