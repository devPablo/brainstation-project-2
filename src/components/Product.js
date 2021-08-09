import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ActionButtonEvent from './ActionButtonEvent';
import { CartContext } from './../store/CartContext';

const Product = props => {
  const { product } = props;
  const history = useHistory();
  const { cart, addItem, setShowCart } = useContext(CartContext);

  const selectProduct = () => {
    history.push(`/shop/${product.category}/${product.id}`);
  };

  const addToCart = () => {
    const _item = { product, amount: 1 };
    addItem(_item);
    setShowCart(true);
    console.log(cart);
  };

  return (
    <div className='product-wrapper'>
      <div className='product' onClick={selectProduct}>
        <div className='product__image-wrapper'>
          <img
            className='product__image'
            src={require(`./../assets/${product.image}`).default}
          />
        </div>
        <div className='product__content-wrapper'>
          <p className='product__category'>{product.category}</p>
          <p className='product__common-color'>
            {product.common} — {product.color}
          </p>
          <p className='product__price'>${product.price}</p>
        </div>
      </div>
      <ActionButtonEvent
        clickHandler={addToCart}
        content='add to cart'
        classes='product-wrapper__add'
      />
    </div>
  );
};

export default Product;
