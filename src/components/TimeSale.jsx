/* eslint-disable */
import React from 'react';
import styles from './TimeSale.module.css';
import Timer from './Timer.jsx'
import { useState, useEffect } from 'react';

function TimeSale(props) {
    let commaResultPrice =(Math.round((props.originalPrice) *((100-props.saleRate)/100))).toLocaleString('ko-KR');
    let commaOriginalPrice = (props.originalPrice).toLocaleString('ko-KR');

    return (
        <div className={styles.TimeSale}>
            <div className={styles.left}>
                <h2 className={styles.saleTitle}>{props.saleTitle} </h2>
                <h3 className={styles.saleDescription}>{props.saleDescription} </h3>
                <div className={styles.timer}>
                    <Timer />
                </div>
                <p className={styles.text} style={{margin:"32px 0 0 0"}}>망설이면 늦어요!</p>
            </div>
            <div className={styles.right}>
                <a href="">
                <div className={styles.imgContainer}>
                    <img src={props.src} alt="특가상품 이미지" />
                    <div className={styles.sticker}>
                        <span>일일특가</span>
                    </div>
                    <button className={styles.cartButton}>
                        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==' alt="쇼핑카트 이미지" />
                    </button>
                </div>
                </a>
                <div className={styles.productInfo}>
                    <p className={styles.productDescription}> {props.productDescription} </p>
                    <h2 className={styles.productName}> {props.productName} </h2>
                    <div className={styles.priceCounter}>
                        <span className={styles.saleRate}> {(props.saleRate)}% </span>
                        <span className={styles.resultPrice}> {commaResultPrice} 원 </span>
                        <span className={styles.originalPrice}> {commaOriginalPrice} 원 </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeSale;