import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemDetailContainerStyle } from './ItemDetailContainerStyle';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from "react-loader-spinner";
import { dataBase } from '../../Firebase/firebase';

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const [loader,setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        const itemCollection = dataBase.collection("productos");
        const item = itemCollection.doc(id);

        item.get().then((doc) => {
            if(!doc.exists) {
                setProducto({id: undefined});
                return;
            }
            setProducto({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log("Error en la carga del producto",error);
        }).finally(() => {
            setLoader(false);
        })
        
    },[id]);

    return <section className={classes.container}>
       {producto.length!==0 && <ItemDetail item={producto} />}
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
