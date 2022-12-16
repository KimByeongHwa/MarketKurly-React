/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './CartProduct.module.css'
import CheckButton from './CheckButton';
import QuantityCounter from './QuantityCounter';
import { useRecoilState } from 'recoil';
import { cartsListState } from '../recoil/cartsList';
import { useParams } from 'react-router-dom';


function CartProduct({ cart, getNowQuantity}) {
    const [cartsList, setCartsList] = useRecoilState(cartsListState);
    
    console.log('cartList:', cartsList)
    console.log('cart:', cart);
    
    // const cartProduct = ([ ...cart]);
    // const cartProduct = cartsList.filter( (el) => el.id === cart.id)[0];

    // let iterableCart = cart[Symbol.iterator];
    // console.log('iterableCart:', iterableCart);

    // let testCart = [...iterableCart];
    // console.log(testCart);

    // console.log('cartProduct:', cartProduct);
    
    

    const[ counterQuantity, setCounterQuantity ] = useState(1);

    const PlusQuantity = () => {
        setCounterQuantity(counterQuantity => counterQuantity + 1);
        cart.quantity += 1;
        getNowQuantity(cart.quantity);
        console.log('cart.quantity:', cart.quantity);
    }

    const MinusQuantity = () => {
        if (cart.quantity>=2) {
            setCounterQuantity(counterQuantity => counterQuantity - 1);
            cart.quantity -= 1;
            getNowQuantity(cart.quantity);
            console.log('cart.quantity:', cart.quantity);
        }
        else return;
    }

    const removeFromCart = (id) => {
        setCartsList(cartsList.filter( (el) => el.id !== cart.id ));
        // console.log('remove!');
    }
    // console.log('carts:', carts);

    return (
        <div className={styles.CartProduct}>
            <CheckButton />
            <div className={styles.imgContainer}>
                <img src={cart.img} alt="상품 사진" />
            </div>
            <div className={styles.title}>
                <p className={styles.name}>{cart.name}</p>
                <p className={styles.description}>{cart.description}</p>
            </div>
            {/* <QuantityCounter /> */}
            <div className={styles.QuantityCounter}>
                <button class={styles.minusButton} onClick={MinusQuantity}>-</button>
                <button class={styles.quantityButton}>{cart.quantity}</button>
                <button class={styles.plusButton} onClick={PlusQuantity}>+</button>          
            </div>
            <div className={styles.price}>{((cart.price)*(cart.quantity)).toLocaleString('ko-KR')} 원</div>
            <div className={styles.xButtonContainer}>
                <span className={styles.xButton} onClick={removeFromCart}></span>
            </div>
        </div>
    );
}

export default CartProduct;