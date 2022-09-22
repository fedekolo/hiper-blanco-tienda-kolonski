import { homeContainerStyle } from './HomeContainerStyle';
import { makeStyles } from '@material-ui/core';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CategoriesContainer } from './components/CategoriesContainer/CategoriesContainer';
import { CarrouselSwiper } from './components/CarrouselSwiper/CarrouselSwiper';
import { FooterContainer } from './components/FooterContainer/FooterContainer';

const useStyles = makeStyles((theme) => homeContainerStyle(theme));

export const HomeContainer = () => {
    const classes = useStyles();

    return <div className={classes.container} id={'inicio'}>
        <CarrouselSwiper />
        <CategoriesContainer />
        <ItemListContainer />
        <FooterContainer />        
    </div>
}