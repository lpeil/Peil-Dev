import React from 'react';

import HomePage     from './HomePage';
//import HomeSobre    from './HomeSobre';
import HomeProjetos from './HomeProjetos';
//import HomeContato  from './HomeContato';


export default class Home extends React.Component {  
    render() {
        return(
            <>
                <HomePage />
                <HomeProjetos />
            </> 
    )}
}
