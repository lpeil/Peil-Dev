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

    return (
        <>
            <Wrapper>
                <NavLogo to="/" />
                <NavMobile onClick={() => setMenu(!menu)} />
                <Links Open={menu}>
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
