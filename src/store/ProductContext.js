import { createContext, useEffect, useState } from 'react';
import PRODUCTS_LIST from './../data/PRODUCTS_LIST.json';

const defaultData = {
  products: [],
  setProducts: () => {},
};

export const ProductContext = createContext(defaultData);

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultData.products);

  useEffect(() => {
    setProducts(PRODUCTS_LIST);
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
