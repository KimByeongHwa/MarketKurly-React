/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header.jsx'
import ProductList from './components/productlist.jsx';
import MainBanner from './components/mainbanner.jsx';
import AdBanner from './components/adbanner.jsx';
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
        <Review />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
