/* eslint-disable */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home.jsx'
import BeautyHome from './pages/BeautyHome.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SiginIn.jsx';
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Mobile, PC } from './mediaquery/MediaQuery.jsx';
import MobileHeader from './components/MobileHeader.jsx';
import MobileBottomNav from './components/MobileBottomNav.jsx';
import MobileHome from './pages/MobileHome.jsx';
import MobileFooter from './components/MobileFooter.jsx';

function App() {

  return (
    <>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
      <ScrollToTop />
      <PC>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/BeautyHome' element={<BeautyHome />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Product/:id' element={<Product />} />
        </Routes>
        <Footer />
      </PC>
      <Mobile>
        <MobileHeader />
          <Routes>
            <Route path='/' element={<MobileHome />} />
            <Route path='/BeautyHome' element={<BeautyHome />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Product/:id' element={<Product />} />
          </Routes>
        <MobileFooter />
        <MobileBottomNav />
      </Mobile>
      </BrowserRouter>
    </>
  );
}


// Q. GlobalStyle에서 html element 말고 사용자 정의태그는 사용 불가능한지?
const GlobalStyle = createGlobalStyle`
    html{
      height: 100%;
    }

    body{
        font-family: 'Noto Sans KR', 'malgun gothic', AppleGothic, dotum, sans-serif;
        font-size: 14px;
        color: #333;
        line-height: 1.15;
        height: 100%;
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
        font-family: 'Noto Sans KR', 'malgun gothic', AppleGothic, dotum, sans-serif;
    } 

    input{
        font-family: 'Noto Sans KR', 'malgun gothic', AppleGothic, dotum, sans-serif;
        color: #333;
    }
    `

export default App;
