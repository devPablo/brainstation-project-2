import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
