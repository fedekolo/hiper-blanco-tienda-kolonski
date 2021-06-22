// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import "./CarrouselSwiperStyle.css";

// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

const imgSlide = {
    1: "https://d2r9epyceweg5n.cloudfront.net/stores/001/550/882/themes/gardener/slide-1615926819296-2868431222-760e0f841fd5d18fa0c3789ac929b93e1615926829-1920-1920.jpg",
    2: "https://d2r9epyceweg5n.cloudfront.net/stores/001/550/882/themes/gardener/slide-1615926900075-839270401-625016867bff84d9d41a3a72c7d17fb21615926903-1920-1920.jpg",
    3: "https://d2r9epyceweg5n.cloudfront.net/stores/001/550/882/themes/gardener/slide-1616009233356-693689265-fe0c679eb4d06054dc9aa2a1e35a9b411616009235-1920-1920.jpg"
}

export const CarrouselSwiper = () => {
  
  return (
    <>
    <Swiper navigation={true} className="mySwiper">
        <SwiperSlide><img src={imgSlide[1]} alt="Imagen slider"/></SwiperSlide>
        <SwiperSlide><img src={imgSlide[2]} alt="Imagen slider"/></SwiperSlide>
        <SwiperSlide><img src={imgSlide[3]} alt="Imagen slider"/></SwiperSlide>
    </Swiper>
    </>
  )
}