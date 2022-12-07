/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './signin.module.css';

function SignIn(props) {
    return (
        <div className={styles.SingIn}>
            <div className={styles.signinTitle}>
                로그인
            </div>
            <div className={styles.signInForm}>
                <form>
                    <input type="text" placeholder="아이디를 입력해주세요." />
                    <input type="text" placeholder="비밀번호를 입력해주세요." />
                </form>
                <div className={styles.finder}>
                    <Link to ='/'>아이디 찾기</Link>
                    <span></span>
                    <Link to ='/'>비밀번호 찾기</Link>
                </div>
                <div className={styles.signButton}>
                    <button className={styles.signInButton}>
                        로그인
                    </button>
                    <button className={styles.signUpButton}>
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;