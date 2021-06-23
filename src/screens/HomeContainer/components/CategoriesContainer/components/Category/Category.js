import { makeStyles } from '@material-ui/core';
import { categoryStyle } from './CategoryStyle';

const useStyles = makeStyles((theme) => categoryStyle(theme));

export const Category = ({ category }) => {
    const classes = useStyles();

    return <article className={classes.container} >
        <img src={category.pictureUrl} alt={category.name}/>
        <span>{category.name}</span>
    </article>

}
