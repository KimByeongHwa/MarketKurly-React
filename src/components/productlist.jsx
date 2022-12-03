/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ProductCard from './productcard';
import styles from './productlist.module.css'

function ProductList(props) {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/data/product.json',{
        method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setProducts(data); // products에 product.json의 data가 들어간다.
            });
    } ,[])
    // console.log(products);

    return (
        <div className={styles.ProductList}>
            <div className={styles.titleLine}>
                <span className={styles.title}>{props.title}</span>
            </div>

            <div className={styles.productContainer}>
                { products.map( product =>{
                    return(
                        <ProductCard 
                        img = {product.img}
                        name = {product.name}
                        price = {product.price}
                        />
                    );
                })}
            </div>            
        </div>
    );
}

export default ProductList;