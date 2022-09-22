import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemDetailContainerStyle } from './ItemDetailContainerStyle';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const [loader,setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch(`http://localhost:8080/productos/listar/${id}`)
        .then(res => res.json())
        .then(res => setProducto(res))
        .catch(err => console.log(err))
        .finally(() => setLoader(false));
    },[id]);

    return <section className={classes.container}>
       {loader ?
            <Loader
            type="TailSpin"
            color="var(--color-C)"
            height={100}
            width={100}
        /> :
        <ItemDetail item={producto} />
        }
    </section>

}
