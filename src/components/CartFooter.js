import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import ActionButton from './ActionButton';

const CartFooter = () => {
  const { cart } = useContext(CartContext);

  const show = () => {
    console.log(cart);
  };

  return (
    <div className='cart-footer'>
      <ActionButton
        toLink='/checkout'
        content='checkout'
        classes='cart-footer__checkout'
        clickHandler={show}
      />
    </div>
  );
};

export default CartFooter;
