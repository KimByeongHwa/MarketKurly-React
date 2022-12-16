/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function RadioButton(props) {
    const [select, setSelect] = useState('choiceNone')

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelect(value);
        console.log('selected');
      };

    return (
        <RadioLabel>
            <RadioInput 
            // type='radio'
            // name={props.name}
            // value={props.value}
            // checked={select === props.value}
            // onChange={ event => handleSelectChange(event) }
            />
            <RadioCircle>
                {/* <RadioInnerCircle /> */}
            </RadioCircle>
            <RadioText>{props.text}</RadioText>
    </RadioLabel>
    );
}

export default RadioButton;

const RadioLabel = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px 0px 9px;
    font-size: 14px;
`

const RadioText = styled.span`
    position: relative;
    margin-left: 12px;
`

const RadioInput = styled.input`
    box-sizing: border-box;
    padding: 0;
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0px, 0px, 0px, 0px);
`

const RadioCircle = styled.span`
    min-width: 24px;
    min-height: 24px;
    display: inline-block;
    position: relative;
    border-radius: 50%;
    background-color: white;
    border: 1px solid rgb(221, 221, 221);

    &:checked{
        width: 10px;
        height: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
`

// const RadioInnerCircle = styled.div`
//     width: 10px;
//     height: 10px;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     border-radius: 50%;
// `