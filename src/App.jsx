/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header.jsx'
import ProductList from './components/productlist.jsx';
import MainBanner from './components/mainbanner.jsx';
import AdBanner from './components/adbanner.jsx';
import TimeSale from './components/timesale.jsx';
import Review from './components/review.jsx';
import Footer from './components/footer.jsx';


// Q. GlobalStyle에서 html element 말고 사용자 정의태그는 사용 불가능한지?
const GlobalStyle = createGlobalStyle`
    body{
        font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
        font-size: 14px;
        color: #333;
        line-height: 1.15;
    }

    a{
        text-decoration: none;
        color: #333;
    } 

    button{
        padding: 0;
        margin: 0;        
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
    } 

    input{
        font-family: "Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif;
        color: #333;
    }
    `


function App() {

  return (
    <>
    <Reset />
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <MainBanner />
        <ProductList title="이 상품 어때요?" />
        <AdBanner src="https://product-image.kurly.com/banner/random-band/pc/img/05348841-3458-402a-849c-f58206a4d627.jpg" />
        <TimeSale 
          saleTitle="일일특가" 
          saleDescription="24시간 한정 특가" 
          src="https://product-image.kurly.com/product/image/0ef7d689-39f7-4479-b388-7ac330de083a.jpg"
          productDescription="베테랑의 대표메뉴를 집에서"
          productName="전주 베테랑 칼국수 2개입"
          saleRate={30}
          originalPrice={11600}
          />
        <AdBanner src="https://product-image.kurly.com/banner/random-band/pc/img/9399801d-588c-47cb-8edd-cffceb1a814c.jpg" />
        <Review />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
