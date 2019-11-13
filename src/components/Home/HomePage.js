import React from 'react';
import styled from 'styled-components';
import { TimelineLite } from "gsap/all";

import PerfilPhoto from '../../assets/sobre/perfil-photo.jpg';
import HomeBackground from '../../assets/home-bg.svg';

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: -75px;
    background-color: #fff;
    background-image: url(${HomeBackground});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 35%;
    z-index: 1;

    @media only screen and (max-width: 768px) {
        background-size: 90%;
    }
`

const HomeInfos = styled.div`
    display: flex;
    margin-top: -10vh;
    flex-flow: column wrap;
    align-items: center;
`

const Title = styled.span`
    position: relative;
    font-size: 75px;
    font-family: 'Dosis', serif;
    text-align: center;
    color: #141C3A;
    @media only screen and (max-width: 768px) {
        font-size: 50px;
    }

`

const Subtitle = styled.span`
    position: relative;
    margin: 5vh;
    font-size: 24px;
    text-align: center;
    color: #141C3A;
    @media only screen and (max-width: 768px) {
        font-size: 16px;
    }
`

const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${PerfilPhoto});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    @media only screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        
        this.textEnter = new TimelineLite({ paused:false });

		this.content = null;
		this.name = null;
        this.desc = null;
        this.photo = null;
	}


	componentDidMount(){
		this.textEnter
            .set(this.content, { autoAlpha: 1, delay: 0.5 })
			.from(this.name, 0.5, { left: 200, autoAlpha: 0 })
			.from(this.desc, 1, { left: -200, autoAlpha: 0 }, "-=0.25")
			.from(this.photo, 1, { scale: 0, autoAlpha: 0 }, "-=0.25")
	}
    
    render() {
        return(
            <Wrapper>
                <HomeInfos ref={ div => this.content = div }>
                    <Title ref={ span => this.name = span }>Desenvolvedor Web</Title>
                    <Subtitle ref={ span => this.desc = span}>Bla bla bla, e uma frase genérica sobre programação super legal</Subtitle>
                    <Photo ref={ span => this.photo = span}/>
                </HomeInfos>
            </Wrapper>
    )}
}
