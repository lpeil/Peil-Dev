import React, { useState, useEffect } from 'react';
import windowScrollPosition from '@rehooks/window-scroll-position'

import {
    Wrapper,
    Links,
    NavbarLink,
    NavLogo,
    NavMobile
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

    return (
        <Wrapper Hold={hold}>
            <NavLogo to="/" />
            <NavMobile onClick={() => setMenu(!menu)} />
            <Links onClick={closeOnClick} Open={menu}>
                <NavbarLink activeClassName="active" to="/">Início</NavbarLink>
                <NavbarLink activeClassName="active" to="/contact">Contato</NavbarLink>
                <NavbarLink activeClassName="active" to="/projects">Projetos</NavbarLink>
            </Links>
        </Wrapper>
    )
}

export default Navbar;
