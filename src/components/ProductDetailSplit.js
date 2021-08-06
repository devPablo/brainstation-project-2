import ProductCounter from './ProductCounter';

const { default: ActionButtonEvent } = require('./ActionButtonEvent');

const ProductDetailSplit = props => {
  const { product } = props;

  const addToCart = () => {
    console.log(`${product.id} added to cart`);
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
            <ProductCounter />
            <ActionButtonEvent
              type='button'
              content='add to cart'
              toLink='/shop'
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
