import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar   from './components/Navbar';
import Home     from './components/Home';
import Projetos from './components/Projetos';
import Sobre    from './components/Sobre';
import Contato  from './components/Contato';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact={true} path="/"          component={Home} />
        <Route exact={true} path="/projetos"  component={Projetos} />
        <Route exact={true} path="/sobre"     component={Sobre} />
        <Route exact={true} path="/contato"   component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
