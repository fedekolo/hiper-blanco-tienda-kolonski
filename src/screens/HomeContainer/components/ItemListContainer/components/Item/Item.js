import { makeStyles } from '@material-ui/core';
import { itemStyle } from './ItemStyle';

const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = ({ item }) => {
    const classes = useStyles();

    return <article className={classes.container}>
        <img src={item.foto} alt={item.descripcion}/>
        <div>
            <h3>{item.nombre}</h3>
            <span>${item.precio}</span>
        </div>
    </article>

}
