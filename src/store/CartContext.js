import { createContext, useState } from 'react';

const defaultData = {
  cart: [],
  setCart: () => {},
  addItem: () => {},
};

export const CartContext = createContext(defaultData);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(defaultData.cart);

  // Cart e.g.
  // [{ product: {}, amount: 5 }];

  const addItem = item => {
    const _cart = [...cart];
    _cart.push(item);
    setCart(_cart);
  };

  const removeItem = item => {
    return item;
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
