import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import { ThemeProvider } from './themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
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
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
