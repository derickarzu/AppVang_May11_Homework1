import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Departments from './Departments';
import Department from './Department';

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Departments} />
      <Route exact path="/department" component={Department} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById('app'));
