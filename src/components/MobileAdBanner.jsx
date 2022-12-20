/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MobileAdBanner(props) {
    return (
        <Ad>
           <img src="https://product-image.kurly.com/banner/random-band/pc/img/05348841-3458-402a-849c-f58206a4d627.jpg" alt="" />
        </Ad>
    );
}

export default MobileAdBanner;

const Ad = styled(Link)`
    width: 100vw;
    padding-bottom: 20px;
    
    img{
        width: 100%;
        margin: 0 auto;
    }
`