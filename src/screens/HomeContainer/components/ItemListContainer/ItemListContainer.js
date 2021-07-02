import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemListContainerStyle } from './ItemListContainerStyle';
import { ItemList } from './components/ItemList/ItemList';
import Loader from "react-loader-spinner";
import { useParams } from 'react-router-dom';
// import { dataBase } from '../../../../Firebase/firebase';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

const items = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => resolve(
            [
                {
                    id: "1",
                    catId: "9",
                    title: "Almohada",
                    description: "Comoda como ninguna",
                    price: "800",
                    colors: ["blanco","terracota"],
                    pictureUrl: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/1/2/12652.jpg"
                },
                {
                    id: "2",
                    catId: "1",
                    title: "Sabana",
                    description: "Muy linda y suave",
                    price: "4500",
                    colors: ["blanco","terracota"],
                    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_798312-MLA41192767859_032020-V.jpg"
                },
                {
                    id: "3",
                    catId: "2",
                    title: "Acolchado",
                    description: "Es hermoso y pachoncito",
                    price: "5200",
                    colors: ["blanco","terracota"],
                    pictureUrl: "https://arredo.vteximg.com.br/arquivos/ids/206004-1000-1000/20021U02022-AP_0.jpg"
                },
                {
                    id: "4",
                    catId: "3",
                    title: "Frazada Iglu",
                    description: "Abriga como los dioses",
                    price: "870",
                    colors: ["blanco","terracota"],
                    pictureUrl: "https://www.homecollection.com.ar/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/_/a/_a0a1244-min.jpg"
                },
                {
                    id: "5",
                    catId: "5",
                    title: "Toalla",
                    description: "Seca barbaro",
                    price: "1500",
                    colors: ["blanco","terracota"],
                    pictureUrl: "https://blancostore.com.ar/wp-content/uploads/3578-toalla.jpg"
                },
                {
                    id: "6",
                    catId: "4",
                    title: "Cubrecama",
                    description: "Te deja la cama hermosa",
                    price: "5350",
                    colors: ["blanco","terracota"],
                    pictureUrl: "https://arredo.vteximg.com.br/arquivos/ids/194488-1000-1000/21003K22755-H_0.jpg"
                },
                {
                    id: "7",
                    catId: "8",
                    title: "Repasador",
                    description: "Repasa increible",
                    price: "500",
                    colors: ["blanco","terracota"],
                    pictureUrl: "https://d2r9epyceweg5n.cloudfront.net/stores/089/625/products/repasador-fantasia-cuadros-pack-x-12-2016-detalle1-8fbc709bbf2de6819e14738530169500-1024-1024.jpg"
                },
                {
                    id: "8",
                    catId: "1",
                    title: "Sabana rayada",
                    description: "Es igual a la otra pero rayada",
                    price: "4300",
                    colors: ["blanco","terracota"],
                    pictureUrl: "http://www.sedalinne.com/blog/wp-content/uploads/2010/06/sabanas-50-50.jpg"
                },
                {
                    id: "9",
                    catId: "9",
                    title: "Almohada inteligente",
                    description: "Increiblemente sabe hablar",
                    price: "1200",
                    colors: ["blanco","terracota"],
                    pictureUrl: "https://elsaltohogar.com.ar/wp-content/uploads/2020/10/Almohada-Inteligente-Cervical.jpg"
                },
                {
                    id: "10",
                    catId: "3",
                    title: "Frazada polar",
                    description: "Te podes ir al polo sur tranquilo con esta",
                    price: "2400",
                    colors: ["blanco","terracota"],
                    pictureUrl: "https://www.homecollection.com.ar/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/_/a/_a0a1250_1.jpg"
                }
            ]
        ),2000)
    })
}

export const ItemListContainer = () => {
    const classes = useStyles();
    const { catId } = useParams();
    const [productos,setProductos] = useState([]);
    const [loader,setLoader] = useState(false);
    
    useEffect(() => {
        setLoader(true)
         return items().then(
            data => {setProductos(data)
                    setLoader(false)}
        )
    },[]);

    const filterById = productos => productos.filter(producto => producto.catId === catId);

    return <section className={classes.container}>
        { productos.length !==0 && <ItemList items={filterById(productos)} /> }
        { catId === undefined && <ItemList items={productos} /> }
        { catId === "10" && <ItemList items={productos} /> }
        {loader &&
            <Loader
            type="TailSpin"
            color="var(--color-C)"
            height={100}
            width={100}
        />
        }
    </section>

}
