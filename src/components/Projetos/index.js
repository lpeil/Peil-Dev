import React from 'react';
import styled from 'styled-components';

import { dataArray } from "../Projetos/data";
import Footer from "../Footer";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
`

const Card = styled.div`
    width: 70%;
    height: 300px;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    border-radius: 10px;
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.5);
    margin: 5vh 0;

    &:nth-child(even) {
        flex-flow: row-reverse wrap;
    }
`

const Image = styled.div`
    width: 40%;
    height: auto;
    min-width: 300px;
    background-image: url(${props => props.image});
    background-position: center center;
    background-size: cover;
`

const Infos = styled.div`
    display: flex;
    width: 56%;
    padding: 2%;
    flex-flow: column nowrap;
    justify-content: space-evenly;
`

const Header = styled.span`
    font-size: 42px;
    font-family: 'Dosis', 'Roboto', sans-serif;
`

const Desc = styled.span`
    font-size: 18px;
`

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    margin-right: 10px;
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

export default class Projetos extends React.Component {     
    render() {
        return (
            <>
                <Wrapper>
                    {dataArray.map((element, index) => (
                        <Card key={index}>
                            <Image image={element.image} />
                            <Infos>
                                <Header>
                                    {element.header}
                                </Header>
                                <Desc>
                                    {element.desc}
                                </Desc>
                                <Button href={element.externalLink}>
                                    {element.externalLinkName}
                                </Button>
                            </Infos>
                        </Card>
                    ))}
                </Wrapper>
                <Footer />
            </>
        )
    }
}