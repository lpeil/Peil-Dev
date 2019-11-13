import React from 'react';
import styled from 'styled-components';

import { dataArray } from "../Projetos/data";
import Footer from "../Footer";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5vh 0;

    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        height: auto;
        width: 80%;
    }
`

const Image = styled.div`
    width: 40%;
    height: 300px;
    background-image: url(${props => props.image});
    background-position: center center;
    background-size: cover;
    
    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 350px;
    }
`

const Infos = styled.div`
    display: flex;
    width: 60%;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 768px) {
        width: 98%;
        padding: 1%;
        text-align: justify;
    }
`

const Desc = styled.span`
    font-size: 18px;
    margin: 2vh 0;
`

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    margin: 2vh 0;
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
    }
`

export default class Projeto extends React.Component {     
    render() {
        const id = this.props.match.params.id;

        return (
            <>
                <Wrapper>
                    {dataArray.filter(element => element.id === id).map((element, index) => (
                        <Card key={index}>
                            <Image image={element.image} />
                            <Infos>
                                <Desc>
                                    {element.fullText}
                                </Desc>
                                <Button href={element.externalLink}>
                                    {element.externalLinkName}
                                </Button>
                            </Infos>
                        </Card>
                    ))}
                </Wrapper>
                <Footer/>
            </>
        )
    }
}