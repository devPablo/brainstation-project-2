import CartProductCounter from './CartProductCounter';

const CartProductItem = props => {
  const { cartItem } = props;

  const updateValue = val => {
    console.log(val);
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
        <CartProductCounter onUpdate={updateValue} />
        <p className='cart-product-item__price'>{`$${cartItem.product.price}`}</p>
      </div>
    </div>
  );
};

export default CartProductItem;
