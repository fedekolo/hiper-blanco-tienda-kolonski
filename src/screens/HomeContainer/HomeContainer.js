import React, {useEffect,useState} from 'react';
import { homeContainerStyle } from './HomeContainerStyle';
import { makeStyles } from '@material-ui/core';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CategoriesContainer } from './components/CategoriesContainer/CategoriesContainer';
import { CarrouselSwiper } from './components/CarrouselSwiper/CarrouselSwiper';
import { FooterContainer } from './components/FooterContainer/FooterContainer';

const useStyles = makeStyles((theme) => homeContainerStyle(theme));

export const HomeContainer = () => {
    const classes = useStyles();
    const [items,setItems] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await fetch('http://localhost:8080/productos/listar')
        .then(res => res.json())
        .then(res => setItems(res))
        .catch(err => console.log(err));
    }

    console.log(items)

    return <div className={classes.container} id={'inicio'}>
        <CarrouselSwiper />
        <CategoriesContainer />
        <ItemListContainer />
        <FooterContainer />        
    </div>
}