import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemListStyle } from './ItemListStyle';
import { Item } from '../Item/Item';

const useStyles = makeStyles((theme) => itemListStyle(theme));

const items = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => resolve(
            [
                {
                    id: 1,
                    title: "Almohada",
                    description: "Muy linda y suave",
                    price: "$800",
                    pictureUrl: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/1/2/12652.jpg"
                },
                {
                    id: 2,
                    title: "Sabana",
                    description: "Muy linda y suave",
                    price: "$4500",
                    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_798312-MLA41192767859_032020-V.jpg"
                }
            ]
        ),2000)
    })
}

export const ItemList = () => {
    const classes = useStyles();

    const [productos,setProductos] = useState([]);

    const ejecucionPromise = () => {
        items().then(
            data => setProductos(data)
        )
    }
    useEffect(() => {
        ejecucionPromise();
    },[]);

    return <section className={classes.container}>
        {productos.map((producto,i) => 
            <Item 
                key={i}
                item={producto}
            />
        )}
    </section>

}
