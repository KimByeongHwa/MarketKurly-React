/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileProductCard from './MobileProductCard';
import styles from './MobileProductList.module.css';
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
            setProducts(data); 
        });
    } ,[])  

    return (
        <div className={styles.MobileProductList}>
            <div className={styles.titleLine}>
                <span className={styles.title}>{props.title}</span>
            </div>

            <Swiper
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
             >
                <div className={styles.productContainer}>
                    { products.map( product => {
                        return(
                            <SwiperSlide >
                                <Link to={`/product/${product.id}`} key={product.id}>
                                <MobileProductCard
                                    img = {product.img}
                                    name = {product.name}
                                    description = {product.description}
                                    price = {product.price.toLocaleString('ko-KR')}
                                />
                                </Link>
                            </SwiperSlide>
                        );
                    })}               
                </div>
            </Swiper>            
        </div>
    );
}

export default ProductList;

