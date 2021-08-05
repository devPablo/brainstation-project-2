import ShopFilterList from '../components/ShopFilterList';
import ShopProductList from '../components/ShopProductList';

const Shop = () => {
  return (
    <div className='shop'>
      <ShopFilterList />
      <ShopProductList />
    </div>
  );
};

export default Shop;
