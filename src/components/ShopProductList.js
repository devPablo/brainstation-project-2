import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductContext } from '../store/ProductContext';
import Pagination from './Pagination';
import Product from './Product';

const ShopProductList = props => {
  const { categoriesToFilter } = props;

  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const history = useHistory();

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;

  // Filter
  let currentProducts = [];
  let amountPages = 1;
  if (categoriesToFilter.length > 0) {
    let currentProductsFiltered = products.filter(_p =>
      categoriesToFilter.includes(_p.category)
    );
    console.log(currentProductsFiltered);
    currentProducts = currentProductsFiltered.slice(
      indexFirstProduct,
      indexLastProduct
    );
    amountPages = Math.ceil(currentProductsFiltered.length / productsPerPage);
  } else {
    currentProducts = products.slice(indexFirstProduct, indexLastProduct);
    amountPages = Math.ceil(products.length / productsPerPage);
  }

  if (currentPage > amountPages && amountPages > 0) {
    history.push('?page=1');
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('page')) {
      setCurrentPage(searchParams.get('page'));
    }
  }, [window.location.search]);

  return (
    <div className='shop-product-list'>
      <div className='shop-product-list__products'>
        {currentProducts.map(product => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <div className='shop-product-list__pagination'>
        <Pagination pages={amountPages} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default ShopProductList;
