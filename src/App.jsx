/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header.jsx'
import ProductList from './components/productlist.jsx';
import ProductCard from './components/productcard.jsx';

// 궁금한 점 : GlobalStyle에서 html element 말고 사용자 정의태그는 사용 불가능한지?
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
        <ProductCard name="소갈비" price="500" />
        {/* <ProductList /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
