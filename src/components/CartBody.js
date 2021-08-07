import { useContext } from 'react';
import ProductCounter from './ProductCounter';
import { CartContext } from './../store/CartContext';
import CartProductItem from './CartProductItem';

const CartBody = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='cart-body'>
      <div>
        <p className='cart-body__subtotal'><span className='cart-body__subtotal-title'>Subtotal: </span>$200</p>
      </div>
      {/* Product Item */}
      {cart.map(cartItem => {
        return (
          <CartProductItem key={cartItem.product.id} cartItem={cartItem} />
        );
      })}
    </div>
  );
};

export default CartBody;
