import React from 'react';

import {
    ProfileTitle,
    ProfileSubtitle
} from './data';

import {
    HomeInitial as Wrapper,
    HomeProfileImage,
    HomeProfileTitle,
    HomeProfileSubtitle
} from './style';

const HomeInitial = () => {
    return (
        <Wrapper>
            <HomeProfileTitle>{ProfileTitle}</HomeProfileTitle>
            <HomeProfileSubtitle>{ProfileSubtitle}</HomeProfileSubtitle>
            <HomeProfileImage />
        </Wrapper>
    )
}

export default HomeInitial;
