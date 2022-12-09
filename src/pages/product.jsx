/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Product(props) {
    let {id} = useParams();
    const [product, setProduct] = useState();

    // useEffect( () => {
    //     fetch(`http://localhost:3000/product/${params.id}`,{
    //     method: 'GET'})
    //     .then(res => res.json())
    //     .then(data => { 
    //         setProduct(data)
    //     });
    // },[])

    // console.log(product);

    return (
        <div>
            {product[id].name}
        </div>
    );
}

export default Product;