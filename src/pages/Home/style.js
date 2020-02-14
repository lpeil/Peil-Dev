import styled, { keyframes } from 'styled-components';

import BackgroundImage from '../../assets/home-bg.svg';
import ProfileImage from '../../assets/sobre/perfil-photo.jpg';

export const HomeInitial = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100vh;

    background-image: url(${BackgroundImage});
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 25%;

    @media only screen and (max-width: 756px) {
        background-size: 75%;
    }
`

export const HomeProfileImage = styled.div`
    width: 150px;
    height: 150px;
    max-height: 50vw; 
    max-width: 50%;

    border-radius: 50%;
    background-image: url(${ProfileImage});
    background-position: center left;
    background-repeat: no-repeat;
    background-size: cover;
`

export const HomeProfileTitle = styled.h1`
    font-size: 36px;
    text-align: center;
    color: var(--color1);

    margin: 0;
`

export const HomeProfileSubtitle = styled.h2`
    font-size: 20px;
    text-align: center;
    color: var(--color1);

    margin: 10px 0 20px 0;
`

export const HomeAbout = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40vh;
    padding-bottom: 20vh;

    background-color: var(--color2);
`

export const HomeAboutTitle = styled.h1`
    text-align: center;
    font-size: 24px;
    color: #fff;

    max-width: 90%;
`

export const HomeAboutSubtitle = styled.h4`
    text-align: justify;
    font-size: 18px;
    color: #fff;

    width: 450px;
    max-width: 90%;
`