/* eslint-disable */
import React from 'react';
import styles from './MobileReview.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import { useState } from 'react';
import { useEffect } from 'react';

function MobileReview(props) {
    const[reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/data/review.json',{    
        method: 'GET'})                                  
            .then(response => response.json())        
            .then(data => { setReviews(data) })
    }, [])

    return (
        <div className={styles.MobileReview}>
            <div className={styles.top}>
                <span>인스타그램 고객 후기</span>
                <p>더 많은 고객 후기가 궁금하다면?</p>
            </div>
            <div className={styles.list}> 
                <Swiper
                slidesPerView={3}
                slidesPerGroup={3}
                spaceBetween={5}
                modules={[Navigation, Pagination]}
                navigation={true}
                // observer={true}
                >
                    <div className={styles.listContainer}>
                        {reviews.map( review => {     // Q 왜 함수 js처럼 그냥 쓰면 안되고 {reviews.map()} 같이 감싸줘야하는지, map() 구문분석 해보기
                            return(                              // Q. Slide 내부에 왜 a태그 말고 div로 쓰면 개발자모드 보면 반영 안되는지
                                <SwiperSlide>          
                                    <a className={styles.imgContainer}> 
                                        <img src={review.img} alt="Review Image" /> 
                                    </a>
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </Swiper>
            </div>
            <div className={styles.bottom}>
                <p>더 많은 고객 후기가 궁금하다면?</p>
                <a href="https://www.instagram.com/marketkurly_regram/">@marketkurly_regram</a>
            </div>
        </div>
    );
}

export default MobileReview;