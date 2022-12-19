/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function RadioButton( props ) {
    const [select, setSelect] = useState('choiceNone')

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelect(value);
        console.log('selected');
      };

    return (
        <Wrapper>
            <StyledButton 
                type='radio'
                id={props.id}
                name={props.name}
                value={props.value}
                defaultChecked={props.defaultChecked}
            />
            <StyledLabel htmlFor={props.id}>{props.text}</StyledLabel>
        </Wrapper>
    );
}

export default RadioButton;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px 0px 9px;
    font-size: 14px;
`

const StyledButton = styled.input`
    appearance: none;
    min-width: 24px;
    min-height: 24px;
    display: inline-block;
    position: relative;
    border-radius: 50%;
    background-color: white;
    border: 1px solid rgb(221, 221, 221);

    &:checked{
        content: "";
        min-width: 24px;
        min-height: 24px;
        display: inline-block;
        position: relative;
        border-radius: 50%;
        background-color: rgb(95, 0, 128);
        border: none;

        ::after{
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background-color: white;
        }
    }
`

const StyledLabel = styled.label`
    position: relative;
    margin-left: 12px;
`

// const RadioCircle = styled.span`
//     min-width: 24px;
//     min-height: 24px;
//     display: inline-block;
//     position: relative;
//     border-radius: 50%;
//     background-color: white;
//     border: 1px solid rgb(221, 221, 221);

//     &:checked{
//         width: 10px;
//         height: 10px;
//         position: absolute;
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%);
//         border-radius: 50%;
//     }
// `

// const RadioInnerCircle = styled.div`
//     width: 10px;
//     height: 10px;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     border-radius: 50%;
// `