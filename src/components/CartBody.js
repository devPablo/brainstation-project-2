import { useContext } from 'react';
import { CartContext } from './../store/CartContext';
import CartProductItem from './CartProductItem';
import { formatter } from './../utils/FormatCurrency';

const CartBody = () => {
  const { cart, subTotal } = useContext(CartContext);

  return (
    <div className='cart-body'>
      {cart.length > 0 && (
        <>
          <div>
            <p className='cart-body__subtotal'>
              <span className='cart-body__subtotal-title'>Subtotal: </span>
              {formatter.format(subTotal)}
            </p>
          </div>
          {/* Product Item */}
          {cart.map(cartItem => {
            return (
              <CartProductItem key={cartItem.product.id} cartItem={cartItem} />
            );
          })}
        </>
      )}
      {cart.length <= 0 && (
        <div className='cart-body__empty'>
          <p className='cart-body__empty-title'>Your cart is empty</p>
          <p className='cart-body__empty-subtitle'>
            Start by adding products to your cart
          </p>
        </div>
      )}
    </div>
  );
};

export default CartBody;
