import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemDetailContainerStyle } from './ItemDetailContainerStyle';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

const getItem = () => {
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

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getItem().then(
            data => setProductos(data)
        )
    },[]);

    useEffect(() => {},[id]);

    const filterById = productos => productos.filter(producto => producto.id === id);

    return <section className={classes.container}>
       <ItemDetail item={filterById(productos)} />
    </section>

}
