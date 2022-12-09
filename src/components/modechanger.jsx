/* eslint-disable */
import React from 'react';
import { useState } from 'react';
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
            <button 
            className={isMarketActive ? styles.marketActived : styles.marketMode} 
            onClick={modeHandler}>
            마켓컬리
            </button>
            <button 
            className={isBeautyActive ? styles.beautyActived : styles.beautyMode} 
            onClick={modeHandler}>
            뷰티컬리
            </button>
        </div>
    );
}

export default ModeChanger;