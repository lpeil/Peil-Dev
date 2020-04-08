import React from 'react';

import { Container } from './style';

import InitialPage from '../InitialPage';
import About       from '../About';

const Home = () => {
    return (
       <Container>
            <InitialPage />
            <About />
       </Container>
    )
}

export default Home;
