import styled from 'styled-components'

export const Wrapper = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    max-width: 100vw;
    height: 75px;

    background: rgba(233, 235, 230, 0.75);
    backdrop-filter: blur(3px);
    box-shadow: ${props => props.Hold ? "var(--boxShadow)" : "none"};
    z-index: 1;

    @media screen and (max-width: 576px) {
        justify-content: space-between;
    }
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 160px);
    max-width: 350px;

    @media screen and (max-width: 576px) {
        display: none;
    }
`

export const NavbarLink = styled.a`
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    justify-content: center;

    color: var(--color1);
    font-size: 18px;
    text-decoration: none;

    &:after {
        position: absolute;
        content: " ";

        width: 0;
        left: 0;
        right: 0;
        bottom: -5px;

        border-bottom: 2px solid var(--color1);
        pointer-events: none;
        transition: 0.25s;
    }

    &:hover:after {
        width: 100%;
    }

    @media screen and (max-width: 576px) {
        margin: 10px 0;

        font-size: 24px;

        &:after {
            display: none;
        }
    }
`

export const NavLogo = styled.a`
    width: 75px;
    height: 75px;

    & svg {
        height: 90%;
        width: 90%;
    }

    & path, g {
        fill: var(--color1);
        stroke: var(--color1);
    }

    @media screen and (max-width: 576px) {
        margin-left: 15px;
    }
`

export const NavMobile = styled.div`
    display: none;
    align-items: center;
    justify-content: center;

    width: 70px;
    height: 70px;
    margin-right: 15px;

    & svg {
        width: 40%;
        height: 40%;
        margin: 0;
    }

    & path {
        fill: var(--color1);
        stroke: var(--color1);
    }

    @media screen and (max-width: 576px) {
        display: flex;
    }
`

export const MobileMenu = styled.div`
    position: fixed;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;

    height: calc(100vh - 75px);
    width: 100%;
    max-width: 100vw;
    top: 75px;
    right: ${props => props.Open ? 0 : "-101vw"};
        
    background-color: rgba(233, 235, 230, 0.75);
    backdrop-filter: blur(3px);
    box-shadow: -2px 2px 2px 0px rgba(0,0,0,0.2);
    transition: 0.4s;
    z-index: 1;
`