import { makeStyles } from '@material-ui/core';
import { categoryStyle } from './CategoryStyle';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => categoryStyle(theme));

export const Category = ({ category }) => {
    const classes = useStyles();
    const [categoryState, setCategoryState] = useState(false);

    return <article className={classes.container} onClick={e => categoryState ? setCategoryState(false) : setCategoryState(true)}>
        <img src={category.pictureUrl} alt={category.name} className={categoryState ? classes.imgView : classes.imgHidden}/>
        <span>{category.name}</span>
    </article>

}
