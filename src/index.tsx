import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/about'></Route>
        <Route path='/contributors'></Route>
        <Route path='/github'></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
