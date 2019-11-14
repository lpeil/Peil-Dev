import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import MenuIcon from '../../assets/icons/menu.svg';
import LogoIcon from '../../assets/logo.svg';

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    max-width: 100%;
    height: 75px;
    top: 0;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    z-index: 2;
    transition: 0.75s;
`

const FakeSpace = styled.div`
    position: relative;
    width: 100%;
    height: 75px;
    z-index: -1;
`

const Logo = styled(NavLink)`
    height: 75px;
    width: 100px;
    background-image: url(${LogoIcon});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`

const LinksWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`

const MenuLink = styled(NavLink)`
    position:relative;
    margin: 0 10px;
    color: #7510F7;
    font-size: 18px;
    border: 0;
    border-bottom: 2px solid transparent;
    transition: color 0.25s;
    transition: all 0.5s;

    &:after {
        content:" ";
        width: 0px;
        position: absolute;
        transition: all 0.5s;
        bottom: -1px;
        left: -1px;
        border-bottom: 2px solid #7510F7;
    }

    &:hover:after {
        width: 100%;
    }

    &.active:after {
        width: 100%;
    }
`

const MenuMobileIcon = styled.div`
    display: none;
    position: absolute;
    width: 30px;
    height: 30px;
    right: 15px;
    background-image: url(${MenuIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        display: flex;
    }
`

export default class Navbar extends React.Component {
    state = {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    }
    
    listenScrollEvent = e => {
        if (window.scrollY > 10) {
            this.setState({backgroundColor: '#ffffff'})
            this.setState({boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.25)'})
        } else {
            this.setState({backgroundColor: 'transparent'})
            this.setState({boxShadow: 'none'})
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    
    render() {
        return(
            <>
                <Wrapper style={{
                    backgroundColor: this.state.backgroundColor,
                    boxShadow: this.state.boxShadow
                }}>
                    <Logo to="/" />
                    <LinksWrapper>
                        <MenuLink to="/" exact activeClassName="active">ÍNICIO</MenuLink>
                        <MenuLink to="/projetos" activeClassName="active">PROJETOS</MenuLink>
                        <MenuLink to="/contato" activeClassName="active">CONTATO</MenuLink>
                    </LinksWrapper>
                    <MenuMobileIcon />
                </Wrapper>
                <FakeSpace></FakeSpace>
            </>
        )
    }
}