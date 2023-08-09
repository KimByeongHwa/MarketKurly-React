# MarketKurly-React
마켓컬리 클론 웹사이트입니다.

<br>
<br>
<br>

## 📚 사용 라이브러리
- recoil
- swiper
- sweetalert2
- react-respoinsive

<br>
<br>
<br>

## 📦 주요 구현 기능
### 1. 회원가입 유효성 검사
: useState를 이용하여 사용자가 입력한 input 값이 설정한 조건에 부합하는지 확인

<br>

  ![image](https://github.com/KimByeongHwa/MarketKurly-React/assets/97048179/c2aed7b3-2c4f-49e1-8cd2-e5c2e4e49c24)
    
<br>
<br>

### 2. 장바구니
: 장바구니를 관리할 배열 `cartsList` 선언하여 Recoil을 통해 관리

#### 2-1. 상품 추가
: 상품을 추가하면 장바구니에 해당 상품이 추가됨과 동시에, 상단 헤더의 장바구니 상품 갯수가 변경
  
![장바구니추가](https://github.com/KimByeongHwa/MarketKurly-React/assets/97048179/b1a6381d-d5b0-44bc-8a73-281646bb18c2)
    
<br>

#### 2-2. 상품 분류
: 상품의 보관 방법을 3가지로 분류하여, 보관 방법 별로 렌더링

<img width="960" alt="장바구니" src="https://github.com/KimByeongHwa/MarketKurly-React/assets/97048179/70499c60-3796-4dd6-acea-b4ba8f897c66">

<br>
<br>

#### 2-3. 상품 삭제
: 장바구니 페이지 내에서 삭제 버튼을 클릭 시, 장바구니 배열 `cartsList`에서 해당 상품의 data가 삭제

![장바구니삭제](https://github.com/KimByeongHwa/MarketKurly-React/assets/97048179/d675d1fc-59b9-4719-a929-4dacab8949db)

<br>
<br>

### 3. 그 외 기능들

#### 3-1. 특가 카운트
: `Date` 객체를 `useState`와 함께 사용하여 특가의 남은 시간이 실시간으로 렌더링

![일일특가](https://github.com/KimByeongHwa/MarketKurly-React/assets/97048179/0d8e26dc-6d70-43a7-9f05-53d89325b6a9)

<br>

#### 3-2. 홈화면 반응형 적용
: `react-responsive`의 `useMediaQuery`를 이용하여 화면이 설정한 크기 이하로 작아지면 `<Mobile />`로 변환

![반응형](https://github.com/KimByeongHwa/MarketKurly-React/assets/97048179/643113df-c614-41f8-a10e-c4e42756597b)

<br>

#### 3-3. Data 렌더링
: `fetch`를 통해 json 파일에 접근하여 이미지와 상품 데이터를 가져왔고, `swiper`를 활용하여 배너 및 상품 리스트 렌더링

![swiper](https://github.com/KimByeongHwa/MarketKurly-React/assets/97048179/996d85e5-7486-4f92-b3a8-55eabebd683c)

 <br>
 <br>
 <br>

## 🎮 설치 및 실행 가이드
- 개발 환경
  - node  v18.16.0
  - npm  v9.5.1
    
<br>

- 실행 방법
    - 프로젝트 clone 
      
      ```
        $ git clone https://github.com/KimByeongHwa/MarketKurly-React.git
        $ cd MarketKurly-React
      ```
    - 프로젝트 실행

       ```
        $ npm i
        $ npm start
      ```
