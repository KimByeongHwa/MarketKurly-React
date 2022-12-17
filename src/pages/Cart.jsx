/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import CheckButton from '../components/CheckButton';
import CartProduct from '../components/CartProduct';
import styles from './Cart.module.css'
import styled from 'styled-components'
import { useRecoilState } from 'recoil';
import { cartsListAtom } from '../recoil/cartsList';

function Cart( props ) {
    const [cartsList, setCartsList] = useRecoilState(cartsListAtom);
    
    const [nowQuantity, setNowQuantity] = useState();

    const getNowQuantity = (changedQuantity) => {
        setNowQuantity(changedQuantity);
    }

    const sumPrice = cartsList.reduce((accumulator, cart) => {
        // console.log('acc:', accumulator);
        // console.log('cart.price:', cart.price);
        // console.log('cart.quantity', cart.quantity);
        // console.log('1result:', cart.price*cart.quantity);   // cart.quantity 를 state값으로 정의해서 자식에서 변화된 값을 가져와야함. 이를 상단에 있는 getNowQuantity로 구현하였음.
        return accumulator + (cart.price*cart.quantity);
    },0)

    // console.log(cart);
    

    return (
        <div className={styles.Cart}>
            <div className={styles.Top}><h2>장바구니</h2></div>
            <div className={styles.Body}>
                <div className={styles.List}>
                    <div className={styles.listLine}>
                        <input type="checkbox" id="chk" />
                        <label for="chk"></label>
                        전체 선택 <Bar /> 선택삭제
                    </div>
                    <div className={styles.listBody}>
                        <div className={styles.productType}>
                            <div className={styles.productTypeTitle}>
                                <span className={styles.coldTypeImg}></span>
                                냉장 상품
                            </div>
                            <div className={styles.typeCloseButton}>
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="접기" />
                            </div>
                        </div>
                        {cartsList
                            .filter(cart => cart.keep === 'cold')
                            .map((cart) => {
                                return <CartProduct cart={cart} getNowQuantity={getNowQuantity} />
                            })
                        }
                        <div className={styles.productType}>
                            <div className={styles.productTypeTitle}>
                                <span className={styles.freezeTypeImg}></span>
                                냉동 상품
                            </div>
                            <div className={styles.typeCloseButton}>
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="접기" />
                            </div>
                        </div>
                        {cartsList
                            .filter(cart => cart.keep === 'freeze')
                            .map((cart) => {
                                return <CartProduct cart={cart} getNowQuantity={getNowQuantity} />
                            })
                        }
                        <div className={styles.productType}>
                            <div className={styles.productTypeTitle}>
                                <span className={styles.normalTypeImg}></span>
                                상온 상품
                            </div>
                            <div className={styles.typeCloseButton}>
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="접기" />
                            </div>
                        </div>
                        {cartsList
                            .filter(cart => cart.keep === 'normal')
                            .map((cart) => {
                                return <CartProduct cart={cart} getNowQuantity={getNowQuantity} />
                            })
                        }
                    </div>
                    <div className={styles.listLine}>
                        <input type="checkbox" id="chk" />
                        <label for="chk"></label>
                        전체 선택 <Bar /> 선택삭제
                    </div>
                </div>
                <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <div className={styles.modalTop}>
                            <div className={styles.addressTitle}>
                                배송지
                            </div>
                            <div className={styles.addressContainer}>
                                <div className={styles.address}> 서울시 양천구 -</div>
                                <div className={styles.deliveryType}>샛별배송</div>
                                <button className={styles.changeAddressButton}>배송지 변경</button>
                            </div>
                        </div>
                        <div className={styles.modalMiddle}>
                            <div className={styles.productPriceContainer}>
                                <span className={styles.guideSpan}>상품금액</span>
                                <span className={styles.paymentSpan}>{sumPrice.toLocaleString('ko-KR')} 원</span>
                            </div>
                            <div className={styles.discountContainer}>
                                <span className={styles.guideSpan}>상품할인금액</span>
                                <span className={styles.paymentSpan}>0 원</span>
                            </div>
                            <div className={styles.deliveryFeeContainer}>
                                <span className={styles.guideSpan}>배송비</span>
                                <span className={styles.paymentSpan}>0 원</span>
                            </div>
                            <div className={styles.sumPaymentContainer}>
                                <span className={styles.guideSpan}>결제예정금액</span>
                                <span className={styles.sumPaymentSpan}>{sumPrice.toLocaleString('ko-KR')} 원</span>
                            </div>
                        </div>
                        <div className={styles.modalBottom}>
                            <button className={styles.orderButton}>주문하기</button>
                            <ul className={styles.orderNotice}>
                                <li>·[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
                                <li>·[마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Bar = styled.div`
    width: 1px;
    height: 13px;
    margin: 0px 21px;
    background-color: rgb(217, 217, 217);
`

export default Cart;