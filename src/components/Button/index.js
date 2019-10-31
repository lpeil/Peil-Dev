import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
    position: relative;
    width: ${props => props.width ? props.width : "auto"};;
    height: 36px;
    color: #4D6C80;
    font-size: 18px;
    background-color: transparent;
    border: 1px solid #4D6C80;
    border-radius: 10px;
    outline: none;
    transition: 0.5s;

    &:hover {
        color: #ffffff;
        background-color: #4D6C80;
        border: none;
    }
`

export default class Button extends React.Component {
    render() {
        return (
            <MyButton width={this.props.width}>{this.props.text ? this.props.text : "Enviar"}</MyButton>
        )
    }
}