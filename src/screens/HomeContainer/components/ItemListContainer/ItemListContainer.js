import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemListContainerStyle } from './ItemListContainerStyle';
import { ItemList } from './components/ItemList/ItemList';
import Loader from "react-loader-spinner";
import { useParams } from 'react-router-dom';
import { dataBase } from '../../../../Firebase/firebase';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = () => {
    const classes = useStyles();
    const { catId } = useParams();
    const [productos,setProductos] = useState([]);
    const [loader,setLoader] = useState(false);
    
    useEffect(() => {
        setLoader(true);
        const itemCollection = dataBase.collection("productos");
        const categorySelected = catId === undefined || catId === "10" ? itemCollection : itemCollection.where('catId','==',catId);

        categorySelected.get().then((doc) => {
            if(doc.size === 0) {
                setProductos(undefined);
            }
            setProductos(doc.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))

        }).catch((error) => {
            console.log("Error en la carga de productos",error);
        }).finally(() => {
            setLoader(false);
        })
        
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
