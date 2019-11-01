import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 75px;
    background-color: transparent;
    z-index: 2;
    transition: 0.4s;
`

const FakeSpace = styled.div`
    position: relative;
    width: 100%;
    height: 75px;
    z-index: -1;
`

const Logo = styled.div`
    font-size: 32px;
    font-family: 'Roboto Slab', serif;
    color: #7510F7;
`

const LinksWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
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

export default class Navbar extends React.Component {
    state = {
        backgroundColor: 'transparent'
    }
    
    listenScrollEvent = e => {
        if (window.scrollY > 100) {
            this.setState({backgroundColor: '#ffffff'})
        } else {
            this.setState({backgroundColor: 'transparent'})
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    
    render() {
        return(
            <>
                <Wrapper style={{color: this.state.color, backgroundColor: this.state.backgroundColor}}>
                    <Logo>  Peil</Logo>
                    <LinksWrapper>
                        <MenuLink to="/" exact activeClassName="active">ÍNICIO</MenuLink>
                        <MenuLink to="/projetos" activeClassName="active">PROJETOS</MenuLink>
                        <MenuLink to="/sobre" activeClassName="active">SOBRE</MenuLink>
                        <MenuLink to="/contato" activeClassName="active">CONTATO</MenuLink>
                    </LinksWrapper>
                </Wrapper>
                <FakeSpace></FakeSpace>
            </>
        )
    }
}