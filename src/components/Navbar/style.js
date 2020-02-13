import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom';

import LogoImg  from '../../assets/logo.svg';
import MenuIcon from '../../assets/icons/menu.svg';

export const Wrapper = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    max-width: 100vw;
    height: 75px;

    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);

    @media screen and (max-width: 576px) {
        justify-content: space-between;
    }
`

export const FakeSpace = styled.div`
    width: 90vw;
    height: 75px;
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 120px);
    max-width: 300px;

    @media screen and (max-width: 576px) {
        position: fixed;
        flex-flow: column;
        align-items: center;
        justify-content: flex-start;

        height: calc(100vh - 75px);
        width: 100vw;
        max-width: 100vw;
        top: 75px;
        right: ${props => props.Open ? 0 : "-110vw"};
        
        background-color: #fff;
        box-shadow: -2px 2px 2px 0px rgba(0,0,0,0.2);
        transition: 0.25s;
    }
`

export const NavbarLink = styled(NavLink)`
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    justify-content: center;

    color: var(--color2);
    font-size: 18px;
    text-decoration: none;

    &:after {
        position: absolute;
        content: " ";

        width: 0;
        left: 0;
        right: 0;
        bottom: -5px;

        border-bottom: 2px solid var(--color2);
        pointer-events: none;
        transition: 0.25s;
    }

    &.active:after {
        width: 100%;
    }

    &:hover:after {
        width: 100%;
    }

    @media screen and (max-width: 576px) {
        margin: 5px 0;

        font-size: 18px;

        &.active {
            font-weight: bold;
        }

        &:after {
            display: none;
        }
    }
`

export const NavLogo = styled(Link)`
    width: 70px;
    height: 70px;

    background-image: url(${LogoImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 576px) {
        margin-left: 15px;
    }
`

export const NavMobile = styled.div `
    display: none;

    width: 70px;
    height: 70px;
    margin-right: 15px;

    @media screen and (max-width: 576px) {
        display: flex;

        background-image: url(${MenuIcon});
        background-size: 40%;
        background-position: center;
        background-repeat: no-repeat;
    }
`