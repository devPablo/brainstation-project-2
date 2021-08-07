import { useContext, useEffect } from 'react';
import { CartContext } from '../store/CartContext';
import CartBody from './CartBody';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';

const CartModal = () => {
  const { showCart, setShowCart } = useContext(CartContext);

  useEffect(() => {
    const cartOverlay = document.getElementById('js-cart-modal-overlay');
    if (cartOverlay !== null) {
      cartOverlay.addEventListener('click', () => {
        if (showCart) setShowCart(false);
      });
    }

    return () => {
      if (cartOverlay !== null) {
        cartOverlay.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <>
      <div id='js-cart-modal-overlay' className='cart-modal-overlay'></div>
      <div className='cart-modal'>
        <CartHeader />
        <CartBody />
        <CartFooter />
      </div>
    </>
  );
};

export default CartModal;
