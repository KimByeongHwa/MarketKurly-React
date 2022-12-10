/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ModeChanger.module.css';


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

    const toMarketMode = () => {
        if(!isMarketActive){
            changeMarketActive();
            changeBeautyActive();
        }
        else return;
    }
    
    const toBeautyMode = () => {
        if(!isBeautyActive){
            changeMarketActive();
            changeBeautyActive();
        }
        else return
    }
        

    return (
        <div className={styles.ModeChanger}>
            <Link to='/'>
            <button 
            className={isMarketActive ? styles.marketActived : styles.marketMode} 
            onClick={toMarketMode}>
                마켓컬리
            </button>
            </Link>
            <Link to='BeautyHome'>
            <button 
            className={isBeautyActive ? styles.beautyActived : styles.beautyMode} 
            onClick={toBeautyMode}>
                뷰티컬리
            </button>
            </Link>
        </div>
    );
}

export default ModeChanger;