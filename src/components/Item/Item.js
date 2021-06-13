import { makeStyles } from '@material-ui/core';
import { itemStyle } from './ItemStyle';

const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = ({ item }) => {
    const classes = useStyles();

    return <article className={classes.container}>
        <img src={item.pictureUrl} alt={item.description}/>
        <h3>{item.title}</h3>
        <span>{item.price}</span>
    </article>

}
