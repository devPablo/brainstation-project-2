import { useEffect, useState } from 'react';
import PRODUCTS_LIST from './../data/PRODUCTS_LIST.json';
import Product from './Product';

const ShopProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(PRODUCTS_LIST);
  }, []);

  return (
    <div className='shop-product-list'>
      {products.map(product => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ShopProductList;
