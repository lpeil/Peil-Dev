import React from 'react';
import styled from 'styled-components';
import { TimelineLite } from "gsap/all";

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10vh 0;
`

const Title = styled.span`
    position: relative;
    font-family: 'Dosis', 'Roboto', sans-serif;
    font-size: 46px;
`

const SubTitle = styled.span`
    position: relative;
    font-size: 24px;
    margin: 1vh 0;
`

const Button = styled.button`
    position: relative;
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

export default class HomeSobre extends React.Component {
    constructor(props){
		super(props);

		this.cardContato = new TimelineLite({ paused:true });

        this.content = null;
        this.title = null;
        this.subtitle = null;
        this.button = null;
    }

    listenScrollEvent = e => {
        const startAnimation = document.getElementById("animationContato");

        const intersectionObserver = new IntersectionObserver((entries) => {
            let [entry] = entries;
            if (entry.isIntersecting) {
                setTimeout(() => this.cardContato.play());
            }  else {
                setTimeout(() => this.cardContato.restart());
            }
        });

        intersectionObserver.observe(startAnimation);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
        
		this.cardContato
            .set(this.content, { autoAlpha: 1, delay: 0.5 })
			.from(this.title, 0.5, { left: 100, autoAlpha: 0 })
			.from(this.subtitle, 0.5, { right: 100, autoAlpha: 0 })
            .from(this.button, 0.25, { top: 100, autoAlpha: 0 })
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return(
            <Wrapper ref={div => this.content = div} id="animationContato">
                <Title ref={span => this.title = span}>
                    Tem interesse no meu trabalho?
                </Title>
                <SubTitle ref={span => this.subtitle = span}>
                    Entre em contato para conversarmos
                </SubTitle>
                <a href="mailto:contato@peil.dev">
                    <Button ref={button => this.button = button}>contato@peil.dev</Button>
                </a>
            </Wrapper>
        )
    }
}