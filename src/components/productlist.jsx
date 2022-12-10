/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

function ProductList(props) {
    const [products, setProducts] = useState([]); // Q. 한번에 받아오는데 왜 useState?

    useEffect( () => {         // useEffect( function, deps) deps 생략가능 -> 생략시 리렌더링될 때마다 실행
        fetch('http://localhost:3000/data/product.json',{      // fetch(resource, option) option 생략가능
        method: 'GET'})
        .then(res => res.json()) // Q. response엔 뭐가 들어있는지?
        .then(data => {
            setProducts(data); // products에 product.json의 data가 들어간다.
        });
    } ,[])   // 렌더링될 때 한 번만 실행시키고 싶어서 deps에 빈 배열
    // console.log(products);

    // const navigate = useNavigate();
    // const toProduct = () => {
    //     navigate(`/Product/${id}`, {state: {id:state.id, img:state.img, name:state.name, price: state.price}})
    // }

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
             >
                <div className={styles.productContainer}>
                    { products.map( product => {
                        return(
                            <SwiperSlide>
                                <Link to={`/product/${product.id}`} key={product.id}>
                                <ProductCard
                                img = {product.img}
                                name = {product.name}
                                price = {product.price}
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