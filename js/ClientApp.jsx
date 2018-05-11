import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import depts from './Departments';
import Department from './Department';

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={depts} />
      <Route exact path="/department/:name" component={Department} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));
