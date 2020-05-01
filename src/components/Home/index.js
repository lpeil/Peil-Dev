import React from 'react';

import { Container } from './style';

import InitialPage from '../InitialPage';
import About       from '../About';
import Projects    from '../Projects';

const Home = () => {
    return (
       <Container>
            <InitialPage />
            <About />
            <Projects />
       </Container>
    )
}

export default Home;
