import React from 'react';

import HomePage     from './HomePage';
import HomeSobre    from './HomeSobre';
import HomeProjetos from './HomeProjetos';
import Footer  from '../Footer';


export default class Home extends React.Component {  
    render() {
        return(
            <>
                <HomePage />
                <HomeSobre />
                <HomeProjetos />
                <Footer />
            </> 
    )}
}
