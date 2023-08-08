/* eslint-disable */
import React from 'react';
import styles from './MobileReview.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

function MobileReview(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/review.json', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

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
        >
          <div className={styles.listContainer}>
            {reviews.map((review) => {
              return (
                <SwiperSlide>
                  <a className={styles.imgContainer}>
                    <img src={review.url} alt='Review Image' />
                  </a>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      <div className={styles.bottom}>
        <p>더 많은 고객 후기가 궁금하다면?</p>
        <a href='https://www.instagram.com/marketkurly_regram/'>@marketkurly_regram</a>
      </div>
    </div>
  );
}

export default MobileReview;
