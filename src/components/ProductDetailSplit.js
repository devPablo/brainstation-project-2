import { useContext, useState } from 'react';
import { CartContext } from '../store/CartContext';
import ProductCounter from './ProductCounter';

import ActionButtonEvent from './../components/ActionButtonEvent';

const ProductDetailSplit = props => {
  const { product } = props;
  const { cart, addItem } = useContext(CartContext);
  const [itemAmount, setItemAmount] = useState(1);

  const addToCart = () => {
    const _item = { product, amount: itemAmount };
    addItem(_item);
  };

  const productCounterHandler = counter => {
    setItemAmount(counter);
  };

  return (
    <div className='product-detail-split'>
      <div className='product-detail-split__section'>
        <img
          src={require(`./../assets/${product.image}`).default}
          className='product-detail-split__img'
        />
      </div>
      <div className='product-detail-split__section'>
        <div className='product-detail-split__content-wrapper'>
          <p className='product-detail-split__category'>{product.category}</p>
          <p className='product-detail-split__common-color'>
            {product.common} • {product.color}
          </p>
          <p className='product-detail-split__price'>${product.price}</p>
          <p className='product-detail-split__description'>
            {product.description}
          </p>
          <div className='product-detail-split__action-wrapper'>
            <ProductCounter onUpdate={productCounterHandler} />
            <ActionButtonEvent
              type='button'
              content='add to cart'
              clickHandler={addToCart}
              classes='product-detail-split__btn-add'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSplit;
