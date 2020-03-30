import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '~/pages/Home';

import Routes from './Routes';

export default function Router() {
  return (
    <Switch>
      <Routes path="/" exact component={Home} />
      {/* Rota não encontrada */}
      <Routes path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}
