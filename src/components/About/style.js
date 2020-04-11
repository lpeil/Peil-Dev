import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 10vh 0;

    background-color: var(--color2);
    background: var(--gradient1);
`

export const Title = styled.h1`
    color: var(--color3);
    font-family: 'Gotu', sans-serif;
`

export const Content = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;
    
    width: 100%;
    margin-top: 50px;
`

export const ProfileImageBack = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 350px;
    min-width: 300px;
    margin: 0 15px;

    border-radius: 5px;

    background: var(--gradient2);
    box-shadow: 3px 3px 10px 1px rgba(0,0,0,0.25);
`

export const ProfileImage = styled.img`
    position: absolute;
    
    height: 115%;
    width: auto;
    bottom: 0;

    border-radius: 5px;
`

export const ProfileDescription = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    
    min-width: 300px;
    max-width: 550px;
    margin: 0 15px;

    color: var(--color3);
    font-size: 14px;

    & p {
        text-align: justify;
    }

    & a {
        color: var(--color3);
    }
`