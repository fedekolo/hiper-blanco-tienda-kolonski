import { makeStyles } from '@material-ui/core';
import { itemDetailStyle } from './ItemDetailStyle';

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = ({ item }) => {
    const classes = useStyles();

    return <article className={classes.container}>
        <img src={item.pictureUrl} alt={item.description}/>
        <h3>{item.title}</h3>
        <span>{item.price}</span>
    </article>

}
