/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { cartsListAtom } from '../recoil/cartsList';
import styles from './CartProduct.module.css'
import CheckButton from './CheckButton';
import QuantityCounter from './QuantityCounter';

// 1. e.target을 통해 현재 아이템의 id를 얻는다. => 걍 cart.id 쓰면 됨.
// 2. map을 걸어 id검사를 하고, 일치하면 setCartsList를 통해 cart.quantity 변경
function CartProduct({ cart }) {
    const [cartsList, setCartsList] = useRecoilState(cartsListAtom); 
    const [counterQuantity, setCounterQuantity ] = useState(1);

    // console.log(cart);
    const PlusQuantity = () => {
        setCounterQuantity(counterQuantity => counterQuantity + 1);
        setCartsList( prev =>{
            return prev.map( matchingCart => {
                if (matchingCart.id === cart.id){
                    return { ...cart, quantity: matchingCart.quantity + 1 };
                }
            })
        });
    }

    const MinusQuantity = () => {
        if (cart.quantity>=2) {
            setCounterQuantity(counterQuantity => counterQuantity - 1);
            setCartsList( prev =>{
                return prev.map( matchingCart => {
                    if (matchingCart.id === cart.id){
                        return { ...cart, quantity: matchingCart.quantity - 1 };
                    }
                })
            });
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