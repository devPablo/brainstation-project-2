import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import NotFound from './pages/NotFound';
import ProductContextProvider from './store/ProductContext';
import CartContextProvider from './store/CartContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { initialOptions } from './constants/PayPal';

ReactDOM.render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
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
    </PayPalScriptProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
