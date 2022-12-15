/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './CartProduct.module.css'
import CheckButton from './CheckButton';
import QuantityCounter from './QuantityCounter';
import { useRecoilState } from 'recoil';
import { cartsListState } from '../recoil/cartsList';

function CartProduct({ cart, getNowQuantity }) {
    const [cartsList, setCartsList] = useRecoilState(cartsListState);

    // console.log('cart:', cart);
    let cartProduct = [...cart];
    // console.log('cp:', cartProduct);

    const[ counterQuantity, setCounterQuantity ] = useState(1); // Q. state 값 대신 cart.quantity 사용했는데 왜 정상작동?  state,setState 지우면 렌더링X

    const PlusQuantity = () => {
        setCounterQuantity(counterQuantity => counterQuantity + 1);
        cartProduct.quantity += 1;
        getNowQuantity(cartProduct.quantity);
        console.log('cart.quantity:', cartProduct.quantity);
    }

    const MinusQuantity = () => {
        if (cart.quantity>=2) {
            setCounterQuantity(counterQuantity => counterQuantity - 1);
            cartProduct.quantity -= 1;
            getNowQuantity(cartProduct.quantity);
            console.log('cart.quantity:', cartProduct.quantity);
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