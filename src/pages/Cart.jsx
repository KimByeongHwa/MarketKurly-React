import React from 'react';
import QuantityCounter from '../components/QuantityCounter';
import styles from './Cart.module.css'

function Cart(props) {
    return (
        <div className={styles.Cart}>
            장바구니 페이지 입니다.
            <QuantityCounter />
        </div>
    );
}

export default Cart;