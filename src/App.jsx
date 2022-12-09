/* eslint-disable */
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/home.jsx'
import BeautyHome from './pages/beautyhome.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import SignUp from './pages/signup.jsx';
import SignIn from './pages/siginin.jsx';
import Product from './pages/product.jsx';


function App() {

  return (
    <>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beautyhome' element={<BeautyHome />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}


// Q. GlobalStyle에서 html element 말고 사용자 정의태그는 사용 불가능한지?
const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Noto Sans KR', 'malgun gothic', AppleGothic, dotum, sans-serif;
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
        font-family: 'Noto Sans KR', 'malgun gothic', AppleGothic, dotum, sans-serif;
    } 

    input{
        font-family: 'Noto Sans KR', 'malgun gothic', AppleGothic, dotum, sans-serif;
        color: #333;
    }
    `

export default App;
