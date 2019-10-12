import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {
  return(
    <BrowserRouter>
      <switch>
        <route path="/" component={Login} />
        <route path="/dashboard" component={Dashboard} />
        <route path="/new" component={New} />
      </switch>
    </BrowserRouter>
  );
}