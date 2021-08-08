import { useContext, useEffect, useState } from 'react';
import ProductCounter from './ProductCounter';
import { CartContext } from './../store/CartContext';
import CartProductItem from './CartProductItem';

const CartBody = () => {
  const { cart } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);

  const itemUpdateHandler = () => {
    if (cart.length === 1) {
      setSubTotal(cart[0].amount * cart[0].product.price);
    } else {
      const _subtotal = cart.reduce(calcSubTotal);
      setSubTotal(_subtotal);
    }
  };

  const calcSubTotal = (prev, current) => {
    return (
      prev.amount * prev.product.price + current.amount * current.product.price
    );
  };

  return (
    <div className='cart-body'>
      {cart.length > 0 && (
        <>
          <div>
            <p className='cart-body__subtotal'>
              <span className='cart-body__subtotal-title'>Subtotal: </span>$
              {subTotal}
            </p>
          </div>
          {/* Product Item */}
          {cart.map(cartItem => {
            return (
              <CartProductItem
                key={cartItem.product.id}
                cartItem={cartItem}
                onUpdate={itemUpdateHandler}
              />
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
