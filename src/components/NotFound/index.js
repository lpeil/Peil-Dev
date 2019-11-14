import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
`

const Title = styled.div`
    max-width: 50%;
    font-size: 42px;
    color: #141C3A;
    text-align: center;
    margin-bottom: 2vh;
`

const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 55px;
    color: #7510f7;
    background-color: transparent;
    border: 2px solid #7510F7;
    border-radius: 28px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        background-color: #7510F7;
        color: #fff;
    }

    @media only screen and (max-width: 768px) {
        margin: 10px 0;
    }
`

const NotFound = () => (
    <Wrapper>
        <Title>Oops! A página que você está procurando não existe.</Title>
        <Button to="/">Retornar ao Ínicio</Button>
    </Wrapper>
)

export default NotFound;