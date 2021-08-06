import { Suspense } from 'react';
import { Link } from 'react-router-dom';

const Product = props => {
  const { product } = props;

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Link to={`/shop/${product.category}/${product.id}`} className='product'>
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
      </Link>
    </Suspense>
  );
};

export default Product;
