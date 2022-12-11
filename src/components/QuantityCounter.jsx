/* eslint-disable */
import React, { useState } from 'react';
import styles from './QuantityCounter.module.css'

function QuantityCounter({ quantity, getQuantity}) {    // props로 product:${id}의 quantitiy를 가져왔다.

    console.log('propsQuantity:',quantity);
    // const initialQuantity = props.quantity;
    // console.log('initialQuantity:',initialQuantity)

    const[ childQuantity, setChildQuantity ] = useState(1);

    const PlusQuantity = () => {
        setChildQuantity( childQuantity + 1);
        getQuantity(quantity + 1);
    }

    const MinusQuantity = () => {
        if (childQuantity>=2) {
            setChildQuantity(childQuantity - 1);
            getQuantity(quantity - 1);
        }
        else return;
    }

    return (
        <div className={styles.QuantityCounter}>
            <button class={styles.minusButton} onClick={MinusQuantity}>-</button>
            <button class={styles.quantityButton}>{childQuantity}</button>
            <button class={styles.plusButton} onClick={PlusQuantity}>+</button>          
        </div>
    );
}

export default QuantityCounter;