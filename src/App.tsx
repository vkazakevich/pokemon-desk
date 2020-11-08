import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/pokedex" component={PokedexPage} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
