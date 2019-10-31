import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #4d6c80;
    color: #fff;
    z-index: 1;
`

const MenuLinks = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 50%;
    padding: 2vh 0 5vh 0;
    border-bottom: 1px solid #ffffff;
`

const Copyright = styled.span`
    font-size: 18px;
    margin: 3vh 0;
`

const Submenu = styled.span`
    display: flex;
    flex-flow: column nowrap;
    width: auto;
    max-width: 33%;
`

const Title = styled.span`
    width: 100%;
    margin: 5px 0;
    font-family: 'Dosis', 'Roboto', sans-serif;
    font-size: 18px;
    text-align: center;
`

const Infos = styled.span`
    font-size: 16px;
    margin: 5px 0;
`

export default class Navbar extends React.Component {
    render() {
        return(
            <Wrapper>
                <MenuLinks>
                    <Submenu>
                        <Title>LINKS</Title>
                        <Infos>
                            <Link to="/">Início</Link>
                        </Infos>
                        <Infos>
                            <Link to="/sobre">Sobre</Link>
                        </Infos>
                        <Infos>
                            <Link to="/contato">Contato</Link>
                        </Infos>
                        <Infos>
                            <Link to="/projetos">Projetos</Link>
                        </Infos>
                    </Submenu>
                    <Submenu>
                        <Title>LUAN PEIL</Title>
                        <Infos>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam nec nibh at accumsan. Donec ante urna, cursus congue dui vel, commodo accumsan massa.</Infos>
                    </Submenu>
                    <Submenu>
                        <Title>Contato</Title>
                        <Infos>(53) 99182-2922</Infos>
                        <Infos>contato@peil.dev</Infos>
                        <Infos>Pelotas (RS)</Infos>
                    </Submenu>
                </MenuLinks>
                <Copyright>
                    Copyright 2019 - Peil Dev
                </Copyright>
            </Wrapper>
        )
    }
}