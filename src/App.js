import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar   from './components/Navbar';
import Home     from './components/Home';
import Projetos from './components/Projetos';
import Projeto  from './components/Projetos/projeto';
import Contato  from './components/Contato';

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 auto;
  width: 100%;
  z-index: 0;

  &:after {
    content: " ";
    display: block;
    margin-top: var(--space);
    height: 0;
    visibility: hidden;
  }
`

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Content>    
          <Navbar />
          <Switch>
            <Route exact={true} path="/"             component={Home} />
            <Route exact={true} path="/projetos/"    component={Projetos} />
            <Route exact={true} path="/projetos/:id" component={Projeto} />
            <Route exact={true} path="/contato"      component={Contato} />
          </Switch>
          </Content>
      </BrowserRouter>
    );
  }
}

