import React from 'react';
import styled from 'styled-components';

import HomeBackground from '../../assets/home-background.jpg';


const HomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    margin-top: -50px;
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
    font-size: 75px;
    font-family: 'Roboto-Slab', serif;
`

const Description = styled.span`
    font-size: 33px;
`

const Space = styled.div`
    height: 125vh;
    width: 100%;
`

const Home = () => (
    <>
        <HomePage>
            <HomeInfos>
                <Name>Luan Peil</Name>
                <Description>Desenvolvedor Web</Description>
            </HomeInfos>
        </HomePage>
        <Space></Space>
    </>
)

export default Home;