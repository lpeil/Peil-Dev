import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TimelineLite } from "gsap/all";

import { dataArray } from "../Projetos/data";

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10vh 0;
`

const Title = styled.span`
    margin-bottom: 5vh;
    color:  #141C3A;
    font-family: 'Dosis', 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: bold;
`

const Card = styled.div`
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    width: 90%;
    height: 200px;
    margin: 5vh 0;
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.5);

    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        height: auto;
    }
`

const Image = styled.div`
    position: relative;
    width: 20%;
    height: 100%;
    background-image: url(${props => props.image});
    background-position: center center;
    background-size: cover;

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 250px;
    }
`

const Infos = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 80%;
    height: 80%;
    padding: 20px;

    @media only screen and (max-width: 768px) {
        align-items: center;
        width: 85%;
    }
`

const Header = styled.span`
    position: relative;
    font-family: 'Dosis', 'Roboto', sans-serif;
    font-size: 28px;
`

const Desc = styled.span`
    position: relative;
    font-size: 16px;

    @media only screen and (max-width: 768px) {
        text-align: justify;
        margin: 10px 0;
    }
`

const Situation = styled.span`
    position: relative;
    font-size: 14px;
`

const Buttons = styled.span`
    position: relative;
    display: flex;
    flex-flow: row nowrap;

    @media only screen and (max-width: 768px) {
        flex-flow: column nowrap;
        margin: 10px;
    }
`

const Button = styled.button`
    position: relative;
    width: 150px;
    height: 36px;
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
        border: none;
    }

    @media only screen and (max-width: 768px) {
        margin-top: 10px;
        margin-right: 0;
    }
`

export default class HomeSobre extends React.Component {
    constructor(props){
        super(props);
        
        this.cards = [];
        this.photo = [];
        this.header = [];
        this.desc = [];
        this.situation = [];
        this.buttons = [];

        this.cardAnimation = new TimelineLite({ paused: true });
    }

    listenScrollEvent = e => {
        const startAnimation = document.getElementById("animationProjetos");

        const intersectionObserver = new IntersectionObserver((entries) => {
            let [entry] = entries;
            if (entry.isIntersecting) {
                setTimeout(() => this.cardAnimation.play());
            } else {
                setTimeout(() => this.cardAnimation.restart());
            }
        });

        intersectionObserver.observe(startAnimation);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
        
        this.cardAnimation
        .from(this.cards, 0.5, { top: 150, autoAlpha: 0, delay: 0.5 })
        .from(this.photo, 0.5, { right: 150, autoAlpha: 0 })
        .from(this.header, 0.5, { left: 150, autoAlpha: 0 })
        .from(this.desc, 0.5, { left: 150, autoAlpha: 0 })
        .from(this.situation, 0.5, { left: 150, autoAlpha: 0 })
        .from(this.buttons, 0.5, { scale: 0, autoAlpha: 0 })

    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return(
            <Wrapper id="animationProjetos">
                <Title>Meus Projetos</Title>
                {dataArray.map((element, index) => (
                    <Card key={element.id} ref={div => this.cards[index] = div}>
                        <Image image={element.image} ref={div => this.photo[index] = div}/>
                        <Infos>
                            <Header ref={span => this.header[index] = span}>
                                {element.header}
                            </Header>
                            <Desc ref={span => this.desc[index] = span}>
                                {element.desc}
                            </Desc>
                            <Situation ref={span => this.situation[index] = span}>
                                {element.situation}
                            </Situation>
                            <Buttons ref={span => this.buttons[index] = span}>
                                <Link to={element.intenalLink}>
                                    <Button>Ver Mais</Button>
                                </Link>
                                <a href={element.externalLink}>
                                    <Button>{element.externalLinkName}</Button>
                                </a>
                            </Buttons>
                        </Infos>
                    </Card>
                ))}
            </Wrapper>
        )
    }
}