/* eslint-disable */
import React from 'react';
import MobileMainBanner from '../components/MobileMainBanner';
import MobileProductList from '../components/MobileProductList';
import MobileAdBanner from '../components/MobileAdBanner';
import MobileTimeSale from '../components/MobileTimeSale';
import MobileReview from '../components/MobileReview';
import styled from 'styled-components';

function MobileHome(props) {
    return (
        <Inner>
            <MobileMainBanner />
            <MobileProductList title='이 상품 어때요?' />
            <MobileAdBanner src='https://product-image.kurly.com/banner/random-band/pc/img/05348841-3458-402a-849c-f58206a4d627.jpg'/>
            <MobileTimeSale 
                saleTitle="일일특가" 
                saleDescription="24시간 한정 특가" 
                src="https://product-image.kurly.com/product/image/0ef7d689-39f7-4479-b388-7ac330de083a.jpg"
                productDescription="베테랑의 대표메뉴를 집에서"
                productName="전주 베테랑 칼국수 2개입"
                saleRate={30}
                originalPrice={11600}
            />
            <MobileAdBanner src='https://product-image.kurly.com/banner/random-band/pc/img/9399801d-588c-47cb-8edd-cffceb1a814c.jpg' />
            <MobileReview />
        </Inner>
    );
}

export default MobileHome;

const Inner = styled.div`
    position: relative;
    margin-top: 110px;
`;

// const MobileMainBanner = styled(MainBanner)` 
//     position: absolute;
//     width: 100%;
//     margin-bottom: 0;
// `;