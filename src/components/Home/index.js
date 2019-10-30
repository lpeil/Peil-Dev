import React from 'react';
import styled from 'styled-components';
import { TimelineLite } from "gsap/all";


import HomeBackground from '../../assets/home-background.jpg';


const HomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    margin-top: -75px;
    background-image: url(${HomeBackground});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
`

const HomeInfos = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`

const Name = styled.span`
    position: relative;
    font-size: 75px;
    font-family: 'Roboto-Slab', serif;
`

const Description = styled.span`
    position: relative;
    font-size: 33px;
`

const Space = styled.div`
    height: 125vh;
    width: 100%;
`

export default class Home extends React.Component {
    constructor(props){
        super(props);
        
        this.textEnter = new TimelineLite({ paused:false });

		this.content = null;
		this.name = null;
		this.desc = null;
	}


	componentDidMount(){
		this.textEnter
            .set(this.content, { autoAlpha: 1 })
			.from(this.name, 0.5, { left: 200, autoAlpha: 0 })
			.from(this.desc, 1, { left: -200, autoAlpha: 0 }, "-=0.25")
	}
    
    render() {
        return(
            <>
                <HomePage>
                    <HomeInfos ref={ div => this.content = div }>
                        <Name ref={ span => this.name = span }>Luan Peil</Name>
                        <Description ref={ span => this.desc = span}>Desenvolvedor Web</Description>
                    </HomeInfos>
                </HomePage>
                <Space></Space>
            </> 
    )}
}
