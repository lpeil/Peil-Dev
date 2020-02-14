import React from 'react';

import {
    AboutTitle,
    AboutSubtitle
} from './data';

import {
    HomeAbout as Wrapper,
    HomeAboutTitle,
    HomeAboutSubtitle
} from './style';

const HomeAbout = () => {
    return (
        <Wrapper>
            <HomeAboutTitle>{AboutTitle}</HomeAboutTitle>
            <HomeAboutSubtitle>{AboutSubtitle}</HomeAboutSubtitle>
        </Wrapper>
    )
}

export default HomeAbout;
