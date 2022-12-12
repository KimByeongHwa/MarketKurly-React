/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './CartProduct.module.css'

function CartProduct(props) {

    const[products,setProducts] = useState();

    useEffect( () => {
        fetch('http://localhost:3000/data/cart.json',{ 
            method:'GET'})
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        });
    },[])

    console.log(products);


    return (
        <div className={styles.CartProduct}>
            
        </div>
    );
}

export default CartProduct;