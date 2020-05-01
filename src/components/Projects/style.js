import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    padding: 10vh 0;

    background-color: var(--color3);
`

export const Title = styled.h1`
    color: var(--color1);
    font-family: 'Gotu', sans-serif;
`

export const ProjectsContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    max-width: 1024px;
`

export const ProjectCard = styled.div`
    width: 250px;
    height: 150px;
    margin: 25px;

    &:hover section {
        transform: rotateY(180deg);
    }
`

export const ProjectCardInside = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #fff;
    box-shadow: 0 20px 30px -16px rgba(9,9,16,.2);

    transition: transform 0.6s;
    transform-style: preserve-3d;
`

export const ProjectCardFront = styled.div`
    position: absolute;
    
    width: 100%;
    height: 100%;

    background-image: url(${props => props.Image});
    background-size: cover;
    background-position: center;
`

export const ProjectCardBack = styled.div`
    position: absolute;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    background-color: #fff;
    transform: rotateY(180deg);
`

export const ProjectCardTitle = styled.h4`
    margin: 15px 0;
    
    color: var(--color1);
`

export const ProjectCardDescription = styled.span`
    max-width: 90%;
    
    color: var(--color1);
    text-align: center;
    font-size: 12px;
`

export const ProjectCardLanguages = styled.span`
    max-width: 90%;
    margin: 15px 0;
    
    color: var(--color1);
    text-align: center;
`