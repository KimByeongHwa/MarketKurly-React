import React from 'react';
import styles from './mainbanner.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import { useState } from 'react';
import { useEffect } from 'react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MainBanner(img, alt) {
    const [Images, setImages] = useState([]);
    
    useEffect( () => {
        fetch('http://localhost:3000/data/mainbanner.json',{
        method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setImages(data); // Images에 product.json의 data가 들어간다.
            });
    } ,[])
    console.log(Images);

    return (
        <div className={styles.MainBanner}>
            <Swiper
                modules={[ Pagination, Navigation, Autoplay]}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                loopedSlides = {1} // loop duplicate - 마지막 img에서 넘어갈 때 자연스럽게
                speed={500}
            >
           
                {Images.map( image => {
                    return(
                        <SwiperSlide>
                            <div className={styles.bannerContainer}>
                                <img src={image.src}/>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default MainBanner;