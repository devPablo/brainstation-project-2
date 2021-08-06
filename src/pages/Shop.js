import { useState } from 'react';
import ShopFilterList from '../components/ShopFilterList';
import ShopProductList from '../components/ShopProductList';

const Shop = () => {
  const [categoryFilters, setCategoryFilters] = useState([]);

  const categoryFilterHandler = categories => {
    setCategoryFilters(categories);
  };

  return (
    <div className='shop'>
      <ShopFilterList updateCategories={categoryFilterHandler} />
      <ShopProductList categoriesToFilter={categoryFilters} />
    </div>
  );
};

export default Shop;
