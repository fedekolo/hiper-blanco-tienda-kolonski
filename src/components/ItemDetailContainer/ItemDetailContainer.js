import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemDetailContainerStyle } from './ItemDetailContainerStyle';
import { ItemDetail } from '../ItemDetail/ItemDetail';

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

const getItem = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => resolve(
                {
                    id: 1,
                    title: "Almohada",
                    description: "Muy linda y suave",
                    price: "$800",
                    pictureUrl: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/1/2/12652.jpg"
                }
        ),2000)
    })
}

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getItem().then(
            data => setProducto(data)
        )
    },[]);

    return <section className={classes.container}>
       <ItemDetail item={producto} />
    </section>

}
