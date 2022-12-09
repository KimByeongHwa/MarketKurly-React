/* eslint-disable */
import React from 'react';
import styles from './footer.module.css';

function Footer(props) {
    return (
        <div className={styles.Footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.top_left}>
                        <div className={styles.callCenter}>
                            <h2>고객행복센터</h2>
                            <span className={styles.number}>1644-1107</span>
                            월~토요일 오전 7시 - 오후 6시
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.box}>
                                <button>카카오톡 문의</button>
                                <p>
                                    월~토요일｜오전 7시 - 오후 6시<br />
                                    일/공휴일｜오전 7시 - 오후 1시
                                </p>
                            </div>
                            <div className={styles.box}>
                                <button>1:1 문의</button>
                                <p>
                                365일<br />
                                고객센터 운영시간에 순차적으로 답변드리겠습니다.
                                </p>
                            </div>
                            <div className={styles.box}>
                                <button>대량주문 문의</button>
                                <p>
                                월~금요일｜오전 9시 - 오후 6시<br />
                                점심시간 ｜낮 12시 - 오후 1시
                                </p>
                            </div>
                            <div className={styles.email}>
                                <p>
                                비회원 문의 : <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a><br />
                                비회원 대량주문 문의 : <a href="mailto:kurlygift@kurlycorp.com">kurlygift@kurlycorp.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.top_right}>
                        <ul className={styles.list}>
                            <li>컬리소개</li>
                            <li>컬리소개영상</li>
                            <li>인재채용</li>
                            <li>이용약관</li>
                            <li>개인정보처리방침</li>
                            <li>이용안내</li>
                        </ul>
                        <div class={styles.about}>
                            법인명 (상호) : 주식회사 컬리｜사업자등록번호 : 261-81-23567 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no=">사업자정보 확인</a><br />
                            통신판매업 : 제 2018-서울강남-01646 호｜ 개인정보보호책임자 : 이원준<br />
                            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)｜ 대표이사 : 김슬아<br />
                            입점문의 :<a href="https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform?usp=sf_link">입점문의하기</a>
                            ｜제휴문의 :<a href="mailto:business@kurlycorp.com">business@kurlycorp.com</a><br />
                            채용문의 :<a href="mailto:recruit@kurlycorp.com">recruit@kurlycorp.com</a><br />
                            팩스: 070 - 7500 - 6098
                        </div>
                        <div className={styles.sns}>
                        <ul class={styles.icons}>
                            <a href="https://instagram.com/marketkurly">
                                <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="instagram" />
                            </a>
                            <a href="https://www.facebook.com/marketkurly">
                                <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="facebook" />
                            </a>
                            <a href="https://blog.naver.com/marketkurly">
                                <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="blog_naver" />
                            </a>
                            <a href="https://m.post.naver.com/marketkurly">
                                <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="post_naver" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg">
                                <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="youtube" />
                            </a>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.certification}>
                        <img src="https://res.kurly.com/pc/ico/2208/logo_isms.svg" alt="certification_img" />
                        <p>
                            [인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영
                            <br />
                            (심사받지 않은 물리적 인프라 제외)
                            <br />
                            [유효기간] 2022.01.19 ~ 2025.01.18
                        </p>
                    </div>
                    <div className={styles.certification}>
                        <img src="https://res.kurly.com/pc/ico/2208/logo_privacy.svg" alt="certification_img" />
                        <p>
                            개인정보보호 우수 웹사이트 ·
                            <br />
                            개인정보처리시스템 인증 (ePRIVACY PLUS)
                        </p>
                    </div>
                    <div className={styles.certification}>
                        <img src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg" alt="certification_img" />
                        <p>
                            토스페이먼츠 구매안전(에스크로)
                            <br />
                            서비스를 이용하실 수 있습니다.
                        </p>
                    </div>
                    <div className={styles.certification}>
                        <img src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg" alt="certification_img" />
                        <p>
                            고객님이 현금으로 결제한 금액에 대해 우리은행과
                            <br />
                            채무지급보증 계약을 체결하여 안전거래를 보장하고
                            <br />
                            있습니다.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                    <span>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</span>
                    <br />
                    <span>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</span>
                    <br />
                    <p className={styles.reserved}>© KURLY CORP. ALL RIGHTS RESERVED</p>
                </div>
        </div>
    );
}

export default Footer