import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { categoriesContainerStyle } from './CategoriesContainerStyle';
import { CategoryList } from './components/CategoryList/CategoryList';

const useStyles = makeStyles((theme) => categoriesContainerStyle(theme));

const categoriesInfo = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => resolve(
            [
                {
                    id: "1",
                    name: "Sabanas",
                    pictureUrl: "https://laopinion.com/wp-content/uploads/sites/3/2019/01/91zijmopzil._sx679_-e1548511712859.jpg"
                },
                {
                    id: "2",
                    name: "Acolchados",
                    pictureUrl: "https://metroblanc.com.ar/wp-content/uploads/2021/03/dobby-blanco.jpg"
                },
                {
                    id: "3",
                    name: "Frazadas",
                    pictureUrl: "https://www.homecollection.com.ar/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/_/a/_a0a1244-min.jpg"
                },
                {
                    id: "4",
                    name: "Cubrecamas",
                    pictureUrl: "https://www.sueniolandia.com.ar/wp-content/uploads/2016/12/FS3530-PRAGA.jpg"
                },
                {
                    id: "5",
                    name: "Toallas y toallones",
                    pictureUrl: "https://www.wossen.com.ar/wp-content/uploads/2017/07/680-OPTIMA-1024x750.jpg"
                },
                {
                    id: "6",
                    name: "Decoracion",
                    pictureUrl: "https://i.blogs.es/014f11/textiles_13/450_1000.jpg"
                },
                {
                    id: "7",
                    name: "Baño",
                    pictureUrl: "https://dv4x1avoocs0.cloudfront.net/media/blog/572-20190903001224-yyqh1kix13462r0y5x90.jpg"
                },
                {
                    id: "8",
                    name: "Cocina",
                    pictureUrl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/515/953/products/art-9661-420d23aec43d070b3415406924902651-640-0.jpg"
                },
                {
                    id: "9",
                    name: "Almohadas",
                    pictureUrl: "https://as01.epimg.net/showroom/imagenes/2020/02/24/portada/1582552168_364525_1582552715_noticia_normal_recorte1.jpg"
                },
                {
                    id: "10",
                    name: "Quitar filtro",
                    pictureUrl: "https://as01.epimg.net/showroom/imagenes/2020/02/24/portada/1582552168_364525_1582552715_noticia_normal_recorte1.jpg"
                }
            ]
        ),2000)
    })
}

export const CategoriesContainer = () => {
    const classes = useStyles();
    const [categories,setCategories] = useState([]);
    
    useEffect(() => {
        categoriesInfo().then(
            data => setCategories(data)
        )
    },[]);

    return <section className={classes.container}>
        <CategoryList categories={categories} />
    </section>

}
