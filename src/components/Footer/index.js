import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IconGithub   from '../../assets/icons/github.svg'
import IconLinkedin from '../../assets/icons/linkedin.svg'
import IconTwitter  from '../../assets/icons/twitter.svg'
import IconMail     from '../../assets/icons/mail.svg'
import LogoReact    from '../../assets/icons/react-logo.png'

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
    padding-top: 10vh;
    background-color: #7510F7;
    color: #fff;
    z-index: -1;
`

const Logo = styled.span`
    font-size: 44px;
    font-family: 'Roboto Slab', serif;
    margin: 5vh;
`

const Title = styled.span`
    font-size: 24px;
    text-align: center;
`

const SocialLinks = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 5vh;
`

const Icon = styled.a`
    width: 40px;
    height: 40px;
    margin: 0 5px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50%;

    &:hover {
        background-color: #fff;
    }

    &:hover div {
        filter: invert(16%) sepia(62%) saturate(6024%) hue-rotate(264deg) brightness(93%) contrast(109%);
    } 
`

const IconImage = styled.div`
    content: " ";
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-size: 50%;
    background-position: center center;
    background-repeat: no-repeat;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    font-size: 14px;
`

const InfoImage = styled.div`
    height: 40px;
    width: 90px;
    background-image: url(${LogoReact});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`

const Contact = styled.div`
    display: flex;
    width: 90%;
    height: 20vh;
    margin: 0 5% -10vh 5%;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: #141C3A;
    border-radius: 10px;
    color: #fff;
`

const Head = styled.span`
    font-size: 32px;
    font-weight: bold;
    font-family: 'Dosis', sans-serif;
`

const Description = styled.span`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
`

const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 55px;
    color: #fff;
    background-color: transparent;
    border: 2px solid #7510F7;
    border-radius: 28px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        background-color: #7510F7;
    }
`

export default class Navbar extends React.Component {
    render() {
        return(
            <>
                <Contact>
                    <Head>Vamos Trabalhar?</Head>
                    <Description>Interessado em meu trabalho?<br/>Me chame para conversar.</Description>
                    <Button>Enviar Mensagem</Button>
                </Contact>
                <Wrapper>
                    <Logo>Peil</Logo>
                    <Title>Programando, debugando<br />e aprendendo</Title>
                    <SocialLinks>
                        <Icon href="#"><IconImage image={IconGithub} /></Icon>
                        <Icon href="#"><IconImage image={IconLinkedin} /></Icon>
                        <Icon href="#"><IconImage image={IconTwitter} /></Icon>
                        <Icon href="#"><IconImage image={IconMail} /></Icon>
                    </SocialLinks>
                    <Info>Feito com <InfoImage /></Info>
                </Wrapper>
            </>
        )
    }
}