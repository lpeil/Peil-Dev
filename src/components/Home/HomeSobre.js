import React from 'react';
import styled from 'styled-components';
import { dataArray } from "../Sobre/data";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    justify-content: center;
    background-color: #7510F7;
`

const Apresentention = styled.div`
    width: 40%;
    min-width: 300px;
    max-width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`

const Title = styled.span`
    font-size: 32px;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`

const SubTitle = styled.span`
    font-size: 18px;
    text-align: justify;
`

const Cards = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;
    margin-top: -20vh;

    @media only screen and (max-width: 740px) {
        flex-flow: column wrap;
        align-items: center;
    }
`

const Card = styled.div`
    display: flex;
    max-width: 25vw;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;

    &:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-left: 1px solid #ccc;
    }

    &:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    
    & div, & span {
        margin: 15px 0;
    }

    @media only screen and (max-width: 740px) {
        border: 1px solid #ccc;
        border-top: 0;
        min-width: 50%;
        max-width: 60%;

        
        &:first-child {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 0;
            border-top: 1px solid #ccc;
        }

        &:last-child {
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            border-top-right-radius: 0px;
        }
    }
`

const Icon = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${props => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Head = styled.span`
    color: #141C3A;
    font-size: 24px;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
    text-align: center;
`

const Description = styled.span`
    color: #000;
    line-height: 25px;
    font-size: 16px;
    text-align: center;
`

const SubHead = styled.span`
    color: #7510F7;
    font-size: 20px;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
`

const Linguages = styled.span`
    color: #000;
    font-size: 16px;
    text-align: center;
`

const DevTools = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const Tool = styled.span`
    color: #000;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    margin: 0!important;
`

export default class HomeSobre extends React.Component {
    render() {
        return(
            <>
                <Wrapper>
                    <Apresentention>
                        <Title>Opa, sou o Luan Peil, seja bem vindo.</Title>
                        <SubTitle>Sou programador a 4 anos, e atualmente estudo Sistemas para a Internet, tenho conhecimento em desenvolvimento web tanto back-end, tanto front-end, e algumas habilidades com Linux e desenvolvimento de games e mobile.</SubTitle>
                    </Apresentention>
                </Wrapper>
                <Cards>
                    {dataArray.map((element, index) =>
                        <Card key={index}>
                            <Icon image={element.icon}/>
                            <Head>{element.head}</Head>
                            <Description>{element.description}</Description>
                            <SubHead>{element.linguagenssubhead}</SubHead>
                            <Linguages>{element.linguages}</Linguages>
                            <DevTools>
                                <SubHead>{element.devtoolsubhead}</SubHead>
                                {element.tools.map((tool, key) => 
                                    <Tool key={key}>{tool}</Tool>
                                )}
                            </DevTools>
                        </Card>
                    )}
                </Cards>
            </>
        )
    }
}
