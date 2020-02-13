import React, { useState } from 'react';

import {
    Wrapper,
    FakeSpace,
    Links,
    NavbarLink,
    NavLogo,
    NavMobile
} from './style';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const closeOnClick = () => {
        setMenu(false);
    }

    return (
        <>
            <Wrapper>
                <NavLogo to="/" />
                <NavMobile onClick={() => setMenu(!menu)} />
                <Links onClick={closeOnClick} Open={menu}>
                    <NavbarLink activeClassName="active" to="/">Início</NavbarLink>
                    <NavbarLink activeClassName="active" to="/contact">Contato</NavbarLink>
                    <NavbarLink activeClassName="active" to="/projects">Projetos</NavbarLink>
                </Links>
            </Wrapper>
            <FakeSpace />
        </>
    )
}

export default Navbar;
