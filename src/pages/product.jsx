/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.css'


function Product(props) {
    const {id} = useParams();
    // console.log('id:', id);
    
    const[products, setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:3000/data/product.json',{     
        method: 'GET'})
        .then(res => res.json()) 
        .then(data => {
            setProducts(data); 
        });
    },[])

   let product = []; 
   for(let i=0; i<products.length; i++){  // find() 메소드로 구현 생각해보기.
    if(products[i].id === Number(id)){
        product = products[i];
        break;
    }
   }
//    console.log(product);


    return (
        <div className={styles.Product}>
            <div className={styles.about}>
                <div className={styles.left}>
                    <img src={product.img} alt="상품 사진" />
                </div>
                <div className={styles.right}>
                    <div className={styles.aboutTop}>
                        <p>{product.delivery}</p>
                        <div className={styles.title}>
                            <div className={styles.titleText}>{product.name}</div>
                            <button className={styles.shareButton}></button>
                        </div>
                        <div className={styles.description}>{product.description}</div>
                    </div>
                    <div className={styles.price}>
                        <p>{product.price} 원</p>
                        <span>로그인 후, 적립 혜택이 제공됩니다.</span>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoBox}>
                            <div className={styles.boxLeft}>배송</div>
                            <div className={styles.boxRight}>
                                {product.delivery}
                                <p>
                                    23시 전 주문 시 내일 아침 7시 전 도착<br />
                                    (대구·부산·울산 샛별배송 운영시간 별도 확인)
                                </p>
                            </div>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.boxLeft}>판매자</div>
                            <div className={styles.boxRight}>{product.seller}</div>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.boxLeft}>판매자</div>
                            <div className={styles.boxRight}>{product.seller}</div>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.boxLeft}>포장타입</div>
                            <div className={styles.boxRight}>
                                {product.packaging}
                                <p>
                                    택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                                </p>
                            </div>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.boxLeft}>판매단위</div>
                            <div className={styles.boxRight}>{product.unit}</div>
                        </div>
                        <div className={styles.infoBox}>
                            <div className={styles.boxLeft}>상품선택</div>
                            <div className={styles.boxRight}>
                            <div class={styles.eaCounterBox}>
                                    <p>{product.name}</p>
                                    <div class={styles.eaCounterBoxUnder}>
                                        <div class={styles.eaButtons}>
                                            <button class={styles.minusButton}>-</button><button class={styles.eaButton}>1</button><button class={styles.plusButton}>+</button>
                                        </div>
                                        <span>6,900 원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.order}>
                        <div className={styles.orderTop}>
                            <div className={styles.priceBox}>
                                <span className={styles.priceText}>총 상품금액</span>
                                <span className={styles.priceNumber}>{product.price}</span>
                            </div>
                            <div className={styles.mileage}>
                                <span className={styles.mileageIcon}>적립</span>로그인 후, 적립 혜택 제공
                            </div>
                        </div>
                        <div className={styles.orderButtons}>
                            <button className={styles.likeNnotice}><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K" alt="like-button" /></button>
                            <button className={styles.likeNnotice}><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="notice-button" /></button>
                            <button className={styles.toShoppingCart}>장바구니 담기</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={styles.middleBarContainer}>
                <ul className={styles.middleNav}>
                        <li>
                            <a href="">상품설명</a>
                        </li>
                        <li>
                            <a href="">상세정보</a>
                        </li>
                        <li>
                            <a href="">후기</a>
                        </li>
                        <li>
                            <a href="">문의</a>
                        </li>
                    </ul>
            </nav>
            <div className={styles.detail}>
                상품 상세정보 입력칸
            </div>
        </div>
    );
}

export default Product;