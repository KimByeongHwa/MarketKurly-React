/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CheckButton from '../components/CheckButton';
import RadioButton from '../components/RadioButton';

function SignUp(props) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfrim] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [idMessage, setIdMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [phoneNumberMessage, setPhoneNumberMessage] = useState('');

    const [isId, setIsId] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfrim] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPhoneNumber, setIsPhoneNumber] = useState(false);

    const onChangeId = (e) => {
        const idRegExp = /^[A-Za-z0-9]{6,16}$/;
        const currentId = e.target.value;
        setId(currentId);
        
        if (!idRegExp.test(currentId)) {
            setIdMessage('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합해주세요.');
            setIsId(false);
        } 
        else setIsId(true);

        console.log(currentId);
        console.log(isId);
    }

    const onChangePassword = (e) => {
        const passwordRegExp = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,}$/;
        const currentPassword = e.target.value;
        setPassword(currentPassword);

        if (!passwordRegExp.test(currentPassword)){
            setIsPassword(false);
            if( currentPassword.length >= 1 && currentPassword.length < 10) setPasswordMessage('최소 10자 이상 입력해주세요.');
            else setPasswordMessage('영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상을 조합해주세요.');
        }
        else setIsPassword(true);

        // console.log(currentPassword);
        // console.log(currentPassword.length);
        // console.log(isPassword);
    }

    const onChangePasswordConfirm = (e) => {
        const currentPasswordConfirm = e.target.value;
        setPasswordConfrim(currentPasswordConfirm);

        if( currentPasswordConfirm === password) setIsPasswordConfrim(true)    
        else{
            setIsPasswordConfrim(false);
            setPasswordConfirmMessage('동일한 비밀번호를 입력해주세요.')
        }

        // console.log(currentPasswordConfirm);
        // console.log(isPasswordConfirm);
    }

    const onChangeName = (e) => {
        const currentName = e.target.value;
        setName(currentName);
    }

    const onChangeEmail = (e) => {
        const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const currentEmail = e.target.value;
        setEmail(currentEmail);

        if(!emailRegExp.test(currentEmail)){
            setIsEmail(false);
            setEmailMessage('이메일 형식으로 입력해 주세요.');
        }
        else setIsEmail(true);
    }

    const onChangePhoneNumber = (e) => {
        const phoneNumberRegExp = /^[0-9]{3}[0-9]{4}[0-9]{4}/;
        const currentPhoneNumber = e.target.value;
        setPhoneNumber(currentPhoneNumber);

        if(!phoneNumberRegExp.test(currentPhoneNumber)){
            setIsPhoneNumber(false);
            setPhoneNumberMessage('휴대폰 번호를 입력해주세요.');
        }
        else setIsPhoneNumber(true);

        // console.log(currentPhoneNumber);
        // console.log(isPhoneNumber);
    }

    return (
        <SignUpSection>
            <Inner>
                <Title>회원가입</Title>
                <TopLine>
                    <Star>*</Star>필수입력사항
                </TopLine>
                <Tr>
                    <List>아이디<Star>*</Star></List>
                    <InputLabel>
                        <Input type='text' id={id} value={id} onChange={onChangeId} placeholder='아이디를 입력해주세요.'></Input>
                        {(id.length > 0) && (isId === false) && <GuideMessage>{idMessage}</GuideMessage>}
                    </InputLabel>
                    <DoubleCheckButton>중복확인</DoubleCheckButton>
                </Tr>
                <Tr>
                    <List>비밀번호<Star>*</Star></List>
                    <InputLabel>
                        <Input type='password' password={password} value={password} onChange={onChangePassword} placeholder='비밀번호를 입력해주세요.'></Input>
                        {(password.length > 0) && (isPassword === false) && <GuideMessage>{passwordMessage}</GuideMessage>}
                    </InputLabel>
                </Tr>
                <Tr>
                    <List>비밀번호 확인<Star>*</Star></List>
                    <InputLabel>
                        <Input type='password' passwordConfirm={passwordConfirm} value={passwordConfirm} onChange={onChangePasswordConfirm} placeholder='비밀번호를 한번 더 입력해주세요.'></Input>           
                        {(passwordConfirm.length > 0) && (isPasswordConfirm === false) && <GuideMessage>{passwordConfirmMessage}</GuideMessage>}
                    </InputLabel>
                </Tr>
                <Tr>
                    <List>이름<Star>*</Star></List>
                    <Input type='text' name={name} value={name} onChange={onChangeName} placeholder='이름을 입력해주세요.'></Input>
                </Tr>
                <Tr>
                    <List>이메일<Star>*</Star></List>
                    <InputLabel>
                        <Input type='email' email={email} value={email} onChange={onChangeEmail} placeholder='marketkurly@kurly.com'></Input>
                        {(email.length > 0) && (isEmail === false) && <GuideMessage>{emailMessage}</GuideMessage>}
                    </InputLabel>
                    <DoubleCheckButton>중복확인</DoubleCheckButton>
                </Tr>
                <Tr>
                    <List>휴대폰<Star>*</Star></List>
                    <InputLabel>
                        <Input type='text' phoneNumber={phoneNumber} value={phoneNumber} onChange={onChangePhoneNumber} maxLength="11" placeholder='숫자만 입력해주세요.'></Input>
                        {(phoneNumber.length > 0) && (isPhoneNumber === false) && <GuideMessage>{phoneNumberMessage}</GuideMessage>}
                    </InputLabel>
                    <DoubleCheckButton>인증번호 받기</DoubleCheckButton>
                </Tr>
                <Tr>
                    <List>주소<Star>*</Star></List>
                    <AddressContainer>
                        <Address>
                            <AddressImg src='https://res.kurly.com/pc/service/cart/2007/ico_search.svg'/>
                            <AddressSpan>주소 검색</AddressSpan>
                        </Address>
                        <SmallText>배송지에 따라 상품 정보가 달라질 수 있습니다.</SmallText>
                    </AddressContainer>
                </Tr>
                <Tr>
                    <List>성별</List>
                    <GenderContainer>
                       <RadioButton id='man' name='gender' value='man' text='남성' />
                       <RadioButton id='woman' name='gender' value='woman' text='여성'></RadioButton>
                       <RadioButton id='choiceNone' name='gender' value='choiceNone' text='선택안함'></RadioButton>
                    </GenderContainer>
                </Tr>
                <Tr>
                    <List>생년월일</List>
                    <BirthContainer>
                        <BirthDiv>
                            <BirthInput type='text' placeholder='YYYY'/>
                        </BirthDiv>
                        <Slash />
                        <BirthDiv>
                            <BirthInput type='text' placeholder='MM'/>
                        </BirthDiv>
                        <Slash />
                        <BirthDiv>
                            <BirthInput type='text' placeholder='DD'/>
                        </BirthDiv>
                    </BirthContainer>
                </Tr>
                <Tr>
                    <List>추가입력 사항</List>
                    <ExtraContainer>
                        <RadioButton id='friendEvent' name='event' value='friendEvent' text='친구초대 추천인 아이디'/>
                        <RadioButton id='othersEvent' name='event' value='othersEvent' text='참여 이벤트명' />
                    </ExtraContainer>
                </Tr>
                <BottomLine />
                <Tr>
                    <List>이용약관동의<Star>*</Star></List>
                    <AgreeContainer>
                        <AgreeAll>
                            <AgreeButtonContainer>
                                <CheckButton />
                                <AgreeStrong>전체 동의합니다.</AgreeStrong>
                            </AgreeButtonContainer>
                        </AgreeAll>
                        <AgreeSmallText>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</AgreeSmallText>
                        <AgreeTr>
                            <AgreeLabel>
                                <AgreeButtonContainer>
                                    <CheckButton />
                                </AgreeButtonContainer>
                                <Text>이용약관 동의</Text>
                                <GreySapn>(필수)</GreySapn>
                            </AgreeLabel>
                            <Terms>약관보기 &gt;</Terms>
                        </AgreeTr>
                        <AgreeTr>
                            <AgreeLabel>
                                <AgreeButtonContainer>
                                    <CheckButton />
                                </AgreeButtonContainer>
                                <Text>개인정보 수집∙이용 동의</Text>
                                <GreySapn>(필수)</GreySapn>
                            </AgreeLabel>
                            <Terms>약관보기 &gt;</Terms>
                        </AgreeTr>
                        <AgreeTr>
                            <AgreeLabel>
                                <AgreeButtonContainer>
                                    <CheckButton />
                                </AgreeButtonContainer>
                                <Text>개인정보 수집∙이용 동의</Text>
                                <GreySapn>(선택)</GreySapn>
                            </AgreeLabel>
                            <Terms>약관보기 &gt;</Terms>
                        </AgreeTr>
                        <AdAgreeTr>
                            <AgreeLabel>
                                <AgreeButtonContainer>
                                    <CheckButton />
                                </AgreeButtonContainer>
                                <Text>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</Text>
                                <GreySapn>(선택)</GreySapn>
                            </AgreeLabel>
                            <AdAgree>
                                <AdLabel>
                                    <AgreeButtonContainer>
                                        <CheckButton />
                                    </AgreeButtonContainer>
                                    SMS
                                </AdLabel>
                                <AdLabel>
                                    <AgreeButtonContainer>
                                        <CheckButton />
                                    </AgreeButtonContainer>
                                    이메일
                                </AdLabel>
                            </AdAgree>
                            <AdText>
                                    <AgreeSmallTextPurple>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</AgreeSmallTextPurple>
                                </AdText>
                        </AdAgreeTr>
                        <AgreeTr>
                            <AgreeLabel>
                                <AgreeButtonContainer>
                                    <CheckButton />
                                </AgreeButtonContainer>
                                <Text>본인은 만 14세 이상입니다.</Text>
                                <GreySapn>(필수)</GreySapn>
                            </AgreeLabel>
                        </AgreeTr>
                    </AgreeContainer>
                </Tr>
                <SingUpButtonContainer>
                    <SignUpButton><span>가입하기</span></SignUpButton>
                </SingUpButtonContainer>
            </Inner>
        </SignUpSection>
    );
}

export default SignUp;

const SignUpSection = styled.div`
    margin: 50px 0 60px;
    position: relative;
`

const Inner = styled.div`
    width: 640px;
    margin: 0 auto;
`

const Title = styled.div`
    margin-bottom: 50px;
    font-size: 28px;
    line-height: 35px;
    font-weight: 500;
    text-align: center;
    letter-spacing: -1px;
    color: rgb(51, 51, 51);
`

const TopLine = styled.div`
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(51, 51, 51);
    font-size: 12px;
    color: rgb(102, 102, 102);
    line-height: 17px;
    text-align: right;
`

const Star = styled.span`
    color: rgb(238, 106, 123);
`

const Tr = styled.div`
    display: inline-flex;
    width: 100%;
    padding: 10px 20px;
`

const List = styled.span`
    width: 139px;
    padding-top: 12px;
    font-weight: 500;
    color: rgb(51, 51, 51);
`

const InputLabel = styled.div`

`
const Input = styled.input`
    width: 335px;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${props => props.inputColor || 'rgb(51, 51, 51)'};
    outline: none;
    box-sizing: border-box;

    &:focus{
        border-color: black;
    }
`

const GuideMessage = styled.p`
    font-size: 13px;
    color: rgb(240, 63, 64);
    padding: 10px 0px;
`

const DoubleCheckButton = styled.button`
    font-weight: 500;
    font-size: 14px;
    width: 120px;
    margin-left: 8px;
    padding: 0px 10px;
    height: 44px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
    font-weight: 700;
    font-size: 14px;
`

const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Address = styled.button`
    padding: 0px 10px;
    width: 335px;
    height: 44px;
    border-radius: 4px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
    display: flex;
    justify-content: center;
    align-items: center;
`

const AddressImg = styled.img`

`

const AddressSpan = styled.span`
    font-size: 14px;
    font-weight: 700;
`

const SmallText = styled.span`
    display: block;
    margin-top: 10px;
    font-size: 12px;
    line-height: 18px;
    color: rgb(102, 102, 102);
`
const Text = styled.span`
    font-size: 14px;
    position: relative;
    color: #333;
    // margin-left: 12px;
`

const GenderContainer = styled.div`
    display: flex;
    width: 335px;
    justify-content: space-between;
    flex-direction: row;
`

const BirthContainer = styled.div`
    width: 335px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 3px;
    padding-left: 15px;
`

const BirthInput = styled.input`
    border: none;
    width: 100%;
    height: 40px;
    padding: 0px 11px 1px 35px;
    font-weight: 400;
    font-size: 16px;
    line-height: 38px;
    color: rgb(51, 51, 51);
    box-sizing: border-box;

    &:focus{
        outline: none;
    }
`
const BirthDiv = styled.div`

`

const Slash = styled.span`
    &::after{
        content: "/";
        font-size: 14px;
        color: rgb(204, 204, 204);
        text-align: center;
        line-height: 40px;
    }
`

const ExtraContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 335px;
    height: 44px;
`

const BottomLine = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid rgb(51, 51, 51);
`

const AgreeContainer = styled.div`
    position: relative;
    left: -3px
`

const AgreeAll = styled.div`
    align-items: flex-start;
    flex-direction: column;
    padding-top: 12px;
`

const AgreeStrong = styled.strong`
    line-height: normal;
    color: rgb(51, 51, 51);
    font-weight: 500;
    font-size: 18px;
`

const AgreeButtonContainer = styled.label`
    display: flex;
    // display: inline-block;
    // width: 24px;
    // height: 24px;
    // margin-right: 12px;
`

const AgreeSmallText = styled.span`
    font-size: 12px;
    color: rgb(102, 102, 102);
    padding-top: 4px;
    padding-left: 36px;
`
const AgreeTr = styled.span`
    display: flex;
    padding: 8px 0px;
    justify-content: space-between;
    align-items: center;
`
const AgreeLabel = styled.label`
    display: flex;
    align-items: center;
`

const GreySapn = styled.span`
    padding-left: 5px;
    color: rgb(153, 153, 153);
`

const Terms = styled.div`
    padding-right: 22px;
    color: rgb(95, 0, 128);
    letter-spacing: 0px;
`

const AdAgreeTr = styled.div`
    display: flex;
    padding: 8px 0px;
    flex-direction: column;
`
const AdAgree = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 24px;
`

const AdLabel = styled.label`
    padding: 14px 80px 9px 0px;
    position: relative;
    display: flex;
    align-items: center;
    vertical-align: top;
    line-height: normal;
    color: rgb(51, 51, 51);
    font-size: 14px;
`
const AdText = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 24px;
`

const AgreeSmallTextPurple = styled(AgreeSmallText)`
    margin-left: 42px;
    padding-left: 16px;
    padding-top: 0px;
    background: url(https://res.kurly.com/pc/service/common/2006/ico_sub_dot.svg) 0px 0px / 16px 20px no-repeat;
    font-size: 12px;
    color: rgb(95, 0, 128);
    line-height: 18px;
    letter-spacing: -0.5px; 
`

const SingUpButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid rgb(247, 247, 247);
    padding: 40px 0px;
`

const SignUpButton = styled.button`
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 240px;
    height: 56px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: 0px none;

    span{
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
    }
`