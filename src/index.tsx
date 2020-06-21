import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import { ThemeProvider } from './state/themeContext';
import { TimerProvider } from './state/timerContext';

ReactDOM.render(
  <React.StrictMode>
    <TimerProvider>
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
    </TimerProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
