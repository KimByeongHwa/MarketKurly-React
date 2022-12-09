/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './modechanger.module.css';


function ModeChanger(props) {
    const[isMarketActive, setisMarketActive] = useState(true);
    const[isBeautyActive, setIsBeautyActive] = useState(false);
  
    const changeMarketActive = () => {
        setisMarketActive(!isMarketActive);
        // console.log('Market Mode Clicked');
    }
    const changeBeautyActive = () => {
        setIsBeautyActive(!isBeautyActive);
        // console.log('Beauty Mode Clicked');
    }

    const modeHandler = () => {
            changeMarketActive();
            changeBeautyActive();
    }
        

    return (
        <div className={styles.ModeChanger}>
            <Link to='/'>
            <button 
            className={isMarketActive ? styles.marketActived : styles.marketMode} 
            onClick={modeHandler}>
                마켓컬리
            </button>
            </Link>
            <Link to='beautyhome'>
            <button 
            className={isBeautyActive ? styles.beautyActived : styles.beautyMode} 
            onClick={modeHandler}>
                뷰티컬리
            </button>
            </Link>
        </div>
    );
}

export default ModeChanger;