import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: transparent;
    z-index: 1;
`

const FakeSpace = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    z-index: -1;
`

const Logo = styled.div`
    font-size: 24px;
`

const LinksWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`

const NavLink = styled(Link)`
    margin: 0 10px;
`

const Navbar = () => (
    <>
        <Wrapper>
            <Logo>Luan Peil</Logo>
            <LinksWrapper>
                <NavLink to="/">ÍNICIO</NavLink>
                <NavLink to="/projetos">PROJETOS</NavLink>
                <NavLink to="/sobre">SOBRE</NavLink>
                <NavLink to="/contato">CONTATO</NavLink>
            </LinksWrapper>
        </Wrapper>
        <FakeSpace></FakeSpace>
    </>
)

export default Navbar;