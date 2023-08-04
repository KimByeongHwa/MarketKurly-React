/* eslint-disable */
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.css';

function SignIn(props) {
    const getUsers = async () => {
        const result = await axios({
          method: "GET",
          url: "http://localhost:3000/data/user.json"
        })
        console.log(result.data);
      }
      
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    }
    // useEffect( () => {console.log('inputId:', inputId);}, [inputId])

    const handleInputPw = (e) => {
        setInputPw(e.target.value); 
    }
    // useEffect( () => {console.log('inputPw:', inputPw);}, [inputPw])

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log('clicked login button');
    }

    return (
        <div className={styles.SingIn}>
            <div className={styles.signinTitle}>
                로그인
            </div>
            <div className={styles.signInForm}>
                <form>
                    <input type="text" placeholder="아이디를 입력해주세요." onInput={handleInputId} />
                    <input type="text" placeholder="비밀번호를 입력해주세요." onInput={handleInputPw} />
                </form>
                <div className={styles.finder}>
                    <Link to ='/'>아이디 찾기</Link>
                    <span></span>
                    <Link to ='/'>비밀번호 찾기</Link>
                </div>
                <div className={styles.signButton}>
                    <button className={styles.signInButton} onClick={getUsers}>
                        로그인
                    </button>
                    <button className={styles.signUpButton}>
                        <Link to='/SignUp'>회원가입</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;