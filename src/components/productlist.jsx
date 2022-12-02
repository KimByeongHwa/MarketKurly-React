/* eslint-disable */
import React from 'react';
import styles from './productlist.module.css'

function ProductList(props) {
    // const props = {title, productImg, productName, productPrice};

    return (
        <div className={styles.ProductList}>
            <div className={styles.titleLine}>
                <span className={styles.title}>{props.title}</span>
            </div>

            
            <div className={styles.ProductLine}></div>
        </div>
    );
}

export default ProductList;