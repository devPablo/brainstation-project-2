import { createContext, useState } from 'react';

const defaultData = {
  cart: [],
  setCart: () => {},
  addItem: () => {},
  showCart: false,
  setShowCart: () => {},
};

export const CartContext = createContext(defaultData);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(defaultData.cart);
  const [showCart, setShowCart] = useState(defaultData.showCart);

  // Cart e.g.
  // [{ product: {}, amount: 5 }];

  const addItem = (item, fromCart) => {
    const _cart = [...cart];
    const _cartItemFoundIndex = _cart.findIndex(
      _cartItem => _cartItem.product.id === item.product.id
    );
    if (_cartItemFoundIndex === -1) {
      _cart.push(item);
    } else {
      if (fromCart) {
        _cart[_cartItemFoundIndex].amount = item.amount;
      } else {
        _cart[_cartItemFoundIndex].amount += item.amount;
      }
    }
    setCart(_cart);
  };

  const removeItem = item => {
    return item;
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, removeItem, showCart, setShowCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
