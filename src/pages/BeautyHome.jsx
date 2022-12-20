/* eslint-disable */
import React from 'react';
import styles from './BeautyHome.module.css';
import { PC, Mobile } from '../mediaquery/MediaQuery';

function BeautyHome(props) {
    return (
        <div className={styles.BeautyHome}>
            <PC>
                <div className={styles.PCBeautyHome}>
                    <div className={styles.Ready}>
                        상품 준비 중입니다.
                    </div>
                </div>
            </PC>
            <Mobile>
                <div className={styles.MobileBeautyHome}>
                    <div className={styles.Ready}>
                        상품 준비 중입니다.
                    </div>
                </div>
            </Mobile>
        </div>
    );
}

export default BeautyHome;