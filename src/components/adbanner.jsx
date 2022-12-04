import React from 'react';
import styles from './adbanner.module.css';

function AdBanner(props) {
    return (
        <div className={styles.AdBanner}>
            <a href="">
                <img className={styles.bannerImg} src={props.src} alt="Ad Banner Image" />
            </a>
        </div>
    );
}

export default AdBanner;