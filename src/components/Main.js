import { Switch, Route, Redirect } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';

import Home from './../pages/Home';
import Shop from './../pages/Shop';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/shop' component={Shop}></Route>
        <Route path='/shop/:category/:id' component={ProductDetail}></Route>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
