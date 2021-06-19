import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemListContainerStyle } from './ItemListContainerStyle';
import { ItemList } from '../ItemList/ItemList';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

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

export const ItemListContainer = () => {
    const classes = useStyles();

    const [productos,setProductos] = useState([]);
    
    useEffect(() => {
        items().then(
            data => setProductos(data)
        )
    },[]);

    return <section className={classes.container}>
        <ItemList items={productos} />
    </section>

}
