import React from 'react';
import styled from 'styled-components';
import { TimelineLite } from "gsap/all";

import PerfilPhoto from '../../assets/sobre/perfil-photo.jpg';
import HomeBackground from '../../assets/home-bg.svg';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin-top: -75px;
    background-color: #fff;
    background-image: url(${HomeBackground});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 35%;
    z-index: 1;
`

const HomeInfos = styled.div`
    display: flex;
    margin: 100px;
    flex-flow: column wrap;
    align-items: center;
`

const Title = styled.span`
    position: relative;
    font-size: 75px;
    font-family: 'Dosis', serif;
    color: #141C3A;
`

const Subtitle = styled.span`
    position: relative;
    margin: 5vh;
    font-size: 24px;
    color: #141C3A;
`

const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${PerfilPhoto});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
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
                    <Subtitle ref={ span => this.desc = span}>Eu sou programador Back-end e Front-end, e adoro isso</Subtitle>
                    <Photo ref={ span => this.photo = span}/>
                </HomeInfos>
            </Wrapper>
    )}
}
