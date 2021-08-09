import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailSplit from '../components/ProductDetailSplit';
import { ProductContext } from './../store/ProductContext';

const ProductDetail = () => {
  const { category, id } = useParams();
  const { products } = useContext(ProductContext);

  const selectedProduct = products.filter(p => p.id === id)[0];

  useEffect(() => {
    document.title = `Boniv — ${selectedProduct.common}`;
  }, []);

  return (
    <div className='product-detail'>
      <ProductDetailSplit product={selectedProduct} />
    </div>
  );
};

export default ProductDetail;
