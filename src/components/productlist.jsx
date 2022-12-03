/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ProductCard from './productcard';
import styles from './productlist.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

function ProductList(props) {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/data/product.json',{
        method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setProducts(data); // products에 product.json의 data가 들어간다.
            });
    } ,[])
    console.log(products);

    return (
        <div className={styles.ProductList}>
            <div className={styles.titleLine}>
                <span className={styles.title}>{props.title}</span>
            </div>

            <Swiper
                slidesPerView={4}
                slidesPerGroup={4}
                spaceBetween={18}
                navigation={true}
                modules={[Navigation]}
                className='mySwiper'
             >
                <div className={styles.productContainer}>
                    { products.map( product =>{
                        return(
                            <SwiperSlide>
                                <ProductCard 
                                img = {product.img}
                                name = {product.name}
                                price = {product.price}
                                />
                            </SwiperSlide>
                        );
                    })}               
                </div>
            </Swiper>            
        </div>
    );
}

export default ProductList;

// const StlyedSwiper = styled(swiper)`
//     modules: [Navigation],
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }, 
//     slidesPerView: 3,
//     slidesPerGroup: 3,
//     spaceBetween: 18
// `