/* eslint-disable */
import React from 'react';
import MobileMainBanner from '../components/MobileMainBanner';
import MobileProductList from '../components/MobileProductList';
import styled from 'styled-components';

function MobileHome(props) {
    return (
        <Inner>
            <MobileMainBanner />
            <MobileProductList title='이 상품 어때요?' />
        </Inner>
    );
}

export default MobileHome;

const Inner = styled.div`
    position: absolute;
    top: 110px;
`;

// const MobileMainBanner = styled(MainBanner)` 
//     position: absolute;
//     width: 100%;
//     margin-bottom: 0;
// `;