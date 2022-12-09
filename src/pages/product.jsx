/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.css'


function Product(props) {
    let {id} = useParams();
    console.log(id);
    console.log(props.id);

    return (
        <div className={styles.Product}>
           <p>{id}번 상품입니다.</p>
           {/* <p>상품 이름 : {props.id.name}</p> */}
        </div>
    );
}

export default Product;


// product에 모든 객체 데이터가 들어온다.
// 어떻게 url에 맞는 데이터 뽑아서 가져올건지?