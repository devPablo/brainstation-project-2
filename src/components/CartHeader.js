import { useContext } from 'react';
import { BsBag, BsX } from 'react-icons/bs';
import { CartContext } from '../store/CartContext';
import IconWrapperEvent from './IconWrapperEvent';

const CartHeader = () => {
  const { setShowCart } = useContext(CartContext);

  return (
    <div className='cart-header'>
      <BsBag className='cart-header__icon-bag' />
      <p className='cart-header__title'>Review your cart</p>
      <IconWrapperEvent
        classes='cart-header__icon-x'
        clickHandler={() => setShowCart(false)}
      >
        <BsX />
      </IconWrapperEvent>
    </div>
  );
};

export default CartHeader;
