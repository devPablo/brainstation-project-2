import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import CartProductCounter from './CartProductCounter';

const CartProductItem = props => {
  const { cartItem } = props;
  const { addItem } = useContext(CartContext);

  const updateValue = val => {
    const _updatedCartItem = cartItem;
    _updatedCartItem.amount = val;
    addItem(_updatedCartItem, true);
  };

  return (
    <div className='cart-product-item'>
      <div className='cart-product-item__section cart-product-item__section--image'>
        <img
          src={require(`./../assets/${cartItem.product.image}`).default}
          className='cart-product-item__image'
        />
      </div>
      <div className='cart-product-item__section cart-product-item__section--content'>
        <p className='cart-product-item__detail'>{`${cartItem.product.category} — ${cartItem.product.common} — ${cartItem.product.color}`}</p>
        <CartProductCounter
          onUpdate={updateValue}
          initValue={cartItem.amount}
        />
        <p className='cart-product-item__price'>{`$${cartItem.product.price}`}</p>
      </div>
    </div>
  );
};

export default CartProductItem;
