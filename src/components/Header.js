import { useContext, useEffect } from 'react';
import { CartContext } from '../store/CartContext';
import CartModal from './CartModal';
import Nav from './Nav';

const Header = () => {
  const { showCart } = useContext(CartContext);

  return (
    <header>
      <Nav />
      {showCart && <CartModal />}
    </header>
  );
};

export default Header;
