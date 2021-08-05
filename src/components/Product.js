const Product = props => {
  const { product } = props;

  return (
    <div className='product'>
      <div className='product__image-wrapper'>
        <img
          className='product__image'
          src={require(`./../assets/${product.image}`).default}
        />
      </div>
      <div className='product__content-wrapper'>
        <p className='product__category'>{product.category}</p>
        <p className='product__common-color'>{product.common} — {product.color}</p>
        <p className='product__price'>${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
