/* eslint-disable */
import React, { useState } from 'react';
import styles from './QuantityCounter.module.css'

function QuantityCounter({ count, getCount, carts, cart, }) {    // props로 product:${id}의 quantitiy를 가져왔다.

    // console.log('propsQuantity:',quantity);
    // const initialQuantity = props.quantity;
    // console.log('initialQuantity:',initialQuantity)

    const[ counterQuantity, setCounterQuantity ] = useState(1);

    const PlusQuantity = () => {
        setCounterQuantity( counterQuantity + 1);
        getCount(count => count + 1);
    }

    const MinusQuantity = () => {
        if (counterQuantity>=2) {
            setCounterQuantity(counterQuantity - 1);
            getCount(count => count - 1);
        }
        else return;
    }

    // console.log(carts);
    // console.log(cart);
    // console.log(cart.quantity);
    // console.log(cart.length);

    // const result = carts.length >=1 ? cart.quantity : count;  // 상품 상세페이지(Product)에서 cart(장바구니 해당 상품의 객체)를 못읽음

    const resultQuntity = () => {
        if(carts.length >= 1 ){
            return cart.quantity;
        }
        else return count;
    }
   
    return (
        <div className={styles.QuantityCounter}>
            <button class={styles.minusButton} onClick={MinusQuantity}>-</button>
            <button class={styles.quantityButton}>{count}</button>
            <button class={styles.plusButton} onClick={PlusQuantity}>+</button>          
        </div>
    );
}

export default QuantityCounter;