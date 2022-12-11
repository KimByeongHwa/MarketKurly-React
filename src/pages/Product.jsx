/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuantityCounter from '../components/QuantityCounter';
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
   for(let i=0; i<products.length; i++){  // find() 메소드로 구현 생각해보기. 아래 링크 => find 구현영상
    if(products[i].id === Number(id)){    // https://www.youtube.com/watch?v=m7NNIDKd8sc 
        product = products[i];
        break;
    }
   }
//    console.log(product);

    const commaPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    console.log('원본q:',product.quantity);

    const[quantity, setQuantity] = useState(1);

    const getQuantity = (quantity) => {    // 자식으로부터 받아온 quantity를 setQuantity에 저장
        setQuantity(quantity);             // 위에 quantitiy랑 다른거임. 자식으로부터 받아온 인자 quantity
    }

    console.log('get 이후 quantity:', quantity);

    product.quantity = quantity; // Q. 가격계산 시 작동은 정상적으로 되나 개발자콘솔에서는 수량이 한개 깎여서 나옴.


    return (
        <div className={styles.Product}>
            <div className={styles.about}>
                <div className={styles.left}>
                    <img src={product.img} alt="상품 사진" />
                </div>
                <div className={styles.right}>
                    <div className={styles.aboutTop}>
                        <p>{product.delivery}</p>
                        <div className={styles.aboutTitle}>
                            <div className={styles.titleText}>{product.name}</div>
                            <button className={styles.shareButton}></button>
                        </div>
                        <div className={styles.description}>{product.description}</div>
                    </div>
                    <div className={styles.price}>
                        <p>{commaPrice(+(product.price)*(product.quantity))} 원</p>
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
                            <div class={styles.quantityCounterBox}> 
                                    <p>{product.name}</p>  
                                    <div class={styles.quantityCounterBoxUnder}> 
                                        <QuantityCounter quantity={quantity} getQuantity={getQuantity}/>
                                        <span>{commaPrice(+(product.price)*(product.quantity))} 원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.order}>
                        <div className={styles.orderTop}>
                            <div className={styles.priceBox}>
                                <span className={styles.priceText}>총 상품금액</span>
                                <span className={styles.priceNumber}>{commaPrice(+(product.price)*(product.quantity))}</span>
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
                <div className={styles.detailTitle}>
                    <span>{product.description}</span>
                    <p>{product.name}</p>
                </div>
                <div className={styles.detailDescription}>
                    상품 상세설명 상품 상세설명 상품 상세설명 상품 상세설명 상품 상세설명
                    상품 상세설명 상품 상세설명 상품 상세설명 상품 상세설명 상품 상세설명
                    상품 상세설명 상품 상세설명 상품 상세설명 상품 상세설명 상품 상세설명
                    상품 상세설명 상품 상세설명 상품 상세설명 상품 상세설명 상품 상세설명
                </div>
                <div className={styles.checkPoint}>
                    <h3 className={styles.detailH3}>Kurly's Check Point</h3>
                        체크포인트 텍스트
                </div>
                <div className={styles.pick}>
                    <h3 className={styles.detailH3}>Kurly's Pick</h3>
                    픽 텍스트
                </div>
                <div className={styles.tip}>
                    <span className={styles.tipTitle}>Kurly's Tip</span>
                    <div className={styles.tipBox}>
                        <div className={styles.tipContents}>
                            <div className={styles.tipText}>
                                <p> 팁 박스 입니다.</p>
                                <span className={styles.tipSpan}> ・팁 박스 입니다.</span><br />
                                <span className={styles.tipSpan}> ・팁 박스 입니다. </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.noticeInfo}>
                    <h3>상품고시정보</h3>
                    <div className={styles.infoTable}>
                        <ul className={styles.tableTr}>
                            <li>품명 및 모델명</li>
                            <li>상품설명및상품이미지참조</li>
                            <li>법에 의한 인증·허가 등을 받았음을 확인할 수 있는 경우 그에 대한 사항</li>
                            <li>상품설명및상품이미지참조</li>
                        </ul>
                        <ul className={styles.tableTr}>
                            <li>제조국 또는 원산지</li>
                            <li>상품설명및상품이미지참조</li>
                            <li>제조자, 수입품의 경우 수입자를 함께 표기</li>
                            <li>상품설명및상품이미지참조</li>
                        </ul>
                        <ul className={styles.tableTr}>
                            <li>A/S 책임자와 전화번호 또는 소비자상담 관련 전화번호</li>
                            <li>마켓컬리 고객행복센터 (1644-1107)</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.sellerInfo}>
                    <h3>판매자정보</h3>
                    <ul>
                        <li>판매자</li>
                        <li>컬리</li>
                    </ul>
                </div>
                <div className={styles.whyKurly}>
                    <h3>WHY KURLY</h3>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <div className={styles.cardImgContainer}>
                                <img src="https://res.kurly.com/pc/ico/1910/01_check.svg" alt="card-img" />
                            </div>
                            <span className={styles.cardTitle}>깐깐한 상품위원회</span>
                            <p>
                                나와 내 가족이 먹고 쓸 상품을 고르는<br />
                                마음으로 매주 상품을 직접 먹어보고,<br />
                                경험해보고 성분, 맛, 안정성 등 다각도의<br />
                                기준을 통과한 상품만을 판매합니다.<br />
                                <span>(온라인 기준 / 자사몰, 직구 제외)</span>
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardImgContainer}>
                                <img src="https://res.kurly.com/pc/ico/1910/02_only.svg" alt="card-img" />
                            </div>
                            <span className={styles.cardTitle}>차별화된 Kurly Only 상품</span>
                            <p>
                                전국 각지와 해외의 훌륭한 생산자가<br />
                                믿고 선택하는 파트너, 마켓컬리.<br />
                                3천여 개가 넘는 컬리 단독 브랜드, 스펙의<br />
                                Kurly Only 상품을 믿고 만나보세요.<br />
                                <span>(온라인 기준 / 자사몰, 직구 제외)</span>
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardImgContainer}>
                                <img src="https://res.kurly.com/pc/ico/1910/03_cold.svg" alt="card-img" />
                            </div>
                            <span className={styles.cardTitle}>신선한 풀콜드체인 배송</span>
                            <p>
                                온라인 업계 최초로 산지에서 문 앞까지<br />
                                상온, 냉장, 냉동 상품을 분리 포장 후<br />
                                최적의 온도를 유지하는 냉장 배송 시스템,<br />
                                풀콜드체인으로 상품을 신선하게 전해드립니다.<br />
                                <span>(온라인 기준 / 자사몰, 직구 제외)</span>
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardImgContainer}>
                                <img src="https://res.kurly.com/pc/ico/1910/04_price.svg" alt="card-img" />
                            </div>
                            <span className={styles.cardTitle}>고객, 생산자를 위한 최선의 가격</span>
                            <p>
                                매주 대형 마트와 주요 온라인 마트의 가격<br />
                                변동 상황을 확인해 신선식품은 품질을<br />
                                타협하지 않는 선에서 최선의 가격으로,<br />
                                가공식품은 언제나 합리적인 가격으로<br />
                                정기 조정합니다.<br />
                                <span>(온라인 기준 / 자사몰, 직구 제외)</span>
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardImgContainer}>
                                <img src="https://res.kurly.com/pc/ico/1910/05_eco.svg" alt="card-img" />
                            </div>
                            <span className={styles.cardTitle}>환경을 생각하는 지속 가능한 유통</span>
                            <p>
                                친환경 포장재부터 생산자가 상품에만<br />
                                집중할 수 있는 직매입 유통구조까지,<br />
                                지속 가능한 유통을 고민하며 컬리를 있게<br />
                                하는 모든 환경(생산자, 커뮤니티, 직원)이<br />
                                더 나아질 수 있도록 노력합니다.<br />
                                <span>(온라인 기준 / 자사몰, 직구 제외)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.customerCenter}>
                    <div className={styles.centerTop}>
                        <h3>고객행복센터</h3>
                        <p>
                            궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?<br />
                            <span>문제가 되는 부분을 사진으로 찍어 아래 중 편하신 방법으로 접수해 주시면 빠르게 도와드리겠습니다.</span>
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.call}>
                            <span>전화 문의</span>
                            <p>
                                월~토요일 오전 7시 - 오후 6시
                            </p>
                        </div>
                        <div className={styles.kakao}>
                            <span>카카오톡 문의</span>
                            <p>
                                월~토요일 오전 7시 - 오후 6시<br />
                                일/공휴일 오전 7시 - 오후 1시
                            </p>
                                카카오톡에서<br />
                                대화창에 문의 및 불편사항을<br />
                                남겨주세요.
                        </div>
                        <div className={styles.hompage}>
                            <span>홈페이지 문의</span>
                            <p>
                                365일<br />
                                로그인&gt;마이컬리&gt;1:1문의
                            </p>
                                고객센터 운영 시간에 순차적으로<br />
                                답변해드리겠습니다.
                        </div>
                    </div>
                    <div className={styles.return}>     
                        <div className={styles.returnBox}>
                            <strong className={styles.returnStrong}>교환 및 환불 안내</strong>
                            <span>교환 및 환불이 필요하신 경우 고객행복센터로 문의해주세요.</span>
                        </div>                              
                        <div className={styles.case}>
                            <div className={styles.caseLeft}>
                                <strong className={styles.caseStrong}>01. 상품에 문제가 있는 경우</strong>
                            </div>
                            <div className={styles.caseRight}>
                                <p>받으신 상품이 표시·광고 내용 또는 계약 내용과 다른 경우에는 상품을 받은 날부터 3개월 이내,</p>
                                ※ 배송 상품에 문제가 있는 것으로 확인되면 배송비는 컬리가 부담합니다.
                            </div>
                        </div>
                        <div className={styles.case}>
                            <div className={styles.caseLeft}>
                            <strong className={styles.caseStrong}>02. 단순변심, 주문 착오의 경우</strong>
                            </div>
                            <div className={styles.caseRight}>
                                <strong className={styles.rightStrong}>신선 / 냉장 / 냉동 식품</strong>
                                재판매가 불가한 상품의 특성상, 단순 변심, 주문 착오 시 교환 및 반품이 어려운 점 양해 부탁드립니다.<br />
                                <strong className={styles.rightStrong2}>유통기한 30일 이상 식품 (신선 / 냉장 / 냉동 제외) & 기타 상품</strong>
                                상품을 받은 날부터 7일 이내에 고객행복센터로 문의해주세요.<br /><br />
                                ※ 단순 변심으로 인한 배송 상품 교환 또는 환불의 경우 고객님께서 배송비 6,000원을 부담하셔야 합니다.<br />
                                (주문건 배송비를 결제하셨을 경우 3,000원)
                            </div>
                        </div>          
                        <div className={styles.case}>
                            <div className={styles.caseLeft}>
                            <strong className={styles.caseStrong}>03. 교환·반품이 불가한 경우</strong>
                            </div>
                            <div className={styles.caseRight}>
                                다음에 해당하는 교환·환불 신청은 처리가 어려울 수 있으니 양해 부탁드립니다.<br /><br />
                                ·고객님의 책임 있는 사유로 상품이 멸실되거나 훼손된 경우<br />
                                ·(단, 상품의 내용을 확인하기 위해 포장 등을 훼손한 경우는 제외)<br />
                                ·고객님의 사용 또는 일부 소비로 상품의 가치가 감소한 경우<br />
                                ·시간이 지나 다시 판매하기 곤란할 정도로 상품의 가치가 감소한 경우<br />
                                ·복제가 가능한 상품의 포장이 훼손된 경우<br />
                                ·고객님의 주문에 따라 개별적으로 생산되는 상품의 제작이 이미 진행된 경우
                            </div>
                        </div>
                    </div>
                    <div className={styles.cancel}>
                        <div className={styles.cancelBox}>
                            <strong className={styles.cancelStrong}>주문 취소 안내</strong>
                            <div className={styles.cancelBoxRight}>
                                - [주문완료] 상태일 경우에만 주문 취소 가능합니다.<br />
                                - [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.
                            </div>                           
                        </div>        
                        <div className={styles.case}>
                        <div className={styles.caseLeft}>
                            <strong className={styles.caseStrong}>01. 상품에 문제가 있는 경우</strong>
                        </div>
                        <div className={styles.caseRight}>
                                <p>
                                    - [배송준비중] 부터는 취소가 불가하니, 반품으로 진행해주세요. (상품에 따라 반품이 불가할 수 있습니다.)<br />
                                    - 주문마감 시간에 임박할수록 취소 가능 시간이 짧아질 수 있습니다.<br />
                                    - 비회원은 App 또는 모바일 웹사이트에서 [마이컬리 비회원 주문조회 페이지] 에서 취소가 가능합니다.<br />
                                    - 일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.<br />
                                    - 주문상품의 부분취소는 불가능합니다. 전체 주문 취소 후 다시 구매 해주세요.
                                </p>                                
                            </div>
                        </div>
                        <div className={styles.case}>
                            <div className={styles.caseLeft}>
                                <strong className={styles.caseStrong}>결제 승인 취소 / 환불 관련</strong>
                            </div>
                            <div className={styles.caseRight}>
                                <p>
                                    - 카드 환불은 카드사 정책에 따르며, 자세한 사항은 카드사에 문의해주세요.<br />
                                    - 결제 취소 시, 사용하신 적립금과 쿠폰도 모두 복원됩니다.
                                </p>                               
                            </div>
                        </div>
                    </div>
                    <div className={styles.delivery}>
                        <div className={styles.deliveryBox}>
                            <strong className={styles.deliveryStrong}>배송관련 안내</strong>
                            <div className={styles.deliveryBoxRight}>
                                배송 과정 중 기상 악화 및 도로교통 상황에 따라 부득이하게 지연 배송이 발생될 수 있습니다.
                            </div>         
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    );
}

export default Product;