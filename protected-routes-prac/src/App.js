import React from 'react';
import LandingPage from './Components/LandingPage.js'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import AppLayout from './Components/AppLayout.js';
import ProtectedRouter from './Components/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component={LandingPage} />
        <ProtectedRouter exact path ="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>

    </div>
  );
}

export default App;
