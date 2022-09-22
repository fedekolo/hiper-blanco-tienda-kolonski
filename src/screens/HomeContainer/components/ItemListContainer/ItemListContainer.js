import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemListContainerStyle } from './ItemListContainerStyle';
import { ItemList } from './components/ItemList/ItemList';
import Loader from "react-loader-spinner";
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = () => {
    const classes = useStyles();
    const { catId } = useParams();
    const [productos,setProductos] = useState([]);
    const [loader,setLoader] = useState(false);
    
    // conexion con base de datos
    useEffect(() => {
        setLoader(true);

        if(catId === undefined) {
            fetch('http://localhost:8080/productos/listar')
            .then(async res => await res.json())
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => setLoader(false));
        } else {
            fetch(`http://localhost:8080/productos/categoria/${catId}`)
            .then(res => res.json())
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => setLoader(false));
        }
    },[catId]);

    return <section className={classes.container} id={'tienda'}>
        {loader &&
            <Loader
            type="TailSpin"
            color="var(--color-C)"
            height={100}
            width={100}
        />
        }
        <ItemList items={productos} />
    </section>

}
