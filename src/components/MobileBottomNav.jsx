/* eslint-disable */
import React from 'react';
import styles from './MobileBottomNav.module.css';
import { AiOutlineHome, AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from "react-icons/ai"; 
import styled from 'styled-components';

function MobileBottomNav(props) {

    return (
        <div className={styles.MobileBottomNav}>
            <div className={styles.inner}>       
                    <div className={styles.IconContainer}>
                        <AiOutlineHome className='reactIcons' />
                    </div>
                    <div className={styles.IconContainer}>
                        <AiOutlineMenu className='reactIcons' />
                    </div>
                    <div className={styles.IconContainer}>
                        <AiOutlineSearch className='reactIcons' />
                    </div>
                    <div className={styles.IconContainer}>
                        <AiOutlineUser className='reactIcons' />
                    </div>
            </div>
        </div>
    );
}

export default MobileBottomNav;