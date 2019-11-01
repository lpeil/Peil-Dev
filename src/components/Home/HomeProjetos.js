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

const Cards = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: center;
`

const Card = styled.div`
    display: flex;
    position: relative;
    height: 250px;
    width: 25%;
    min-width: 350px;
    max-width: 90%;
    margin: 0 15px;
    flex-flow: row nowrap;
    border-radius: 10px;
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.5);
`

const Image = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-position: center center;
    background-size: cover;
    border-radius: 10px;
    transition: 0.4s;
`

const Infos = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    margin-left: -100%;
    opacity: 0;
`

const Header = styled.span`
    position: relative;
    font-family: 'Dosis', 'Roboto', sans-serif;
    font-size: 28px;
`

const Desc = styled.span`
    position: relative;
    font-size: 16px;
    text-align: center;

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
        this.image = [];
        this.infos = [];

        this.cardAnimation = new TimelineLite({ paused: true });
        this.cardHover = new TimelineLite({paused: true});
    }

    listenScrollEvent = e => {
        const startAnimation = document.getElementById("animationProjetos");

        const intersectionObserver = new IntersectionObserver((entries) => {
            let [entry] = entries;
            if (entry.isIntersecting) {
                setTimeout(() => this.cardAnimation.play());
            }
        });

        intersectionObserver.observe(startAnimation);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
        
        this.cardAnimation
            .staggerFrom(this.cards, 0.5, { top: 150, autoAlpha: 0, delay: 0.5 }, 0.5);

        this.cardHover
            .to(this.image, 0.5, { autoAlpha: 0, delay: 3 } )
            .to(this.infos, 0.5, { autoAlpha: 1, delay: 0.5 } );
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return(
            <Wrapper id="animationProjetos">
                <Title>Meus Projetos</Title>
                <Cards>
                    {dataArray.map((element, index) => (
                        <Card key={element.id} ref={div => this.cards[index] = div}>
                            <Image image={element.image} ref={div => this.image[index] = div} />
                            <Infos ref={div => this.infos[index] = div}>
                                <Header>
                                    {element.header}
                                </Header>
                                <Desc>
                                    {element.desc}
                                </Desc>
                                <Situation>
                                    {element.situation}
                                </Situation>
                                <Buttons>
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
                </Cards>
            </Wrapper>
        )
    }
}