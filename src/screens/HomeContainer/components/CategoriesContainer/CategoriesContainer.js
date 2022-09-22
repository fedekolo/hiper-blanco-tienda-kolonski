import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { categoriesContainerStyle } from './CategoriesContainerStyle';
import { CategoryList } from './components/CategoryList/CategoryList';

const useStyles = makeStyles((theme) => categoriesContainerStyle(theme));

export const CategoriesContainer = () => {
    const classes = useStyles();
    const [categories,setCategories] = useState([]);

    // conexion con base de datos
    useEffect(() => {
        fetch('http://localhost:8080/productos/categorias')
        .then(res => res.json())
        .then(res => setCategories(res))
        .catch(err => console.log(err))
    },[]);

    return <section className={classes.container}>
        <CategoryList categories={categories} />
    </section>

}
