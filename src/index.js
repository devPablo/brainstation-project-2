import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import NotFound from './pages/NotFound';
import ProductContextProvider from './store/ProductContext';
import CartContextProvider from './store/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <Router>
          <Switch>
            <Route path='/404' component={NotFound} />
            <Route component={App} />
          </Switch>
        </Router>
      </CartContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
