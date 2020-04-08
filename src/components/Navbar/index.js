import React, { useState, useEffect } from 'react';
import windowScrollPosition from '@rehooks/window-scroll-position'

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

import {
    Wrapper,
    Links,
    NavbarLink,
    NavLogo,
    NavMobile,
    MobileMenu
} from './style';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [hold, setHold] = useState(false);
    const position = windowScrollPosition();

    useEffect(() => {
        if(position.y > 0) {
            setHold(true);
        } else {
            setHold(false);
        }
    }, [position, hold])

    const closeOnClick = () => {
        setMenu(false);
    }

    const MobileLinks = () => (
        <>
            <NavbarLink href="#home">Início</NavbarLink>
            <NavbarLink href="#about">Sobre Mim</NavbarLink>
            <NavbarLink href="#projects">Projetos</NavbarLink>
            <NavbarLink href="#contact">Contato</NavbarLink>
        </>
    );

    return (
        <>
            <Wrapper Hold={hold && !menu}>
                <NavLogo href="#home">
                    <LogoIcon />
                </NavLogo>
                <NavMobile onClick={() => setMenu(!menu)}>
                    <MenuIcon />
                </NavMobile>
                <Links>
                    {MobileLinks()}
                </Links>
            </Wrapper>
            <MobileMenu onClick={closeOnClick} Open={menu}>
                {MobileLinks()}
            </MobileMenu>
        </>
    )
}

export default Navbar;
