import { createContext, useEffect, useState } from 'react';

const defaultData = {
  cart: [],
  setCart: () => {},
  addItem: () => {},
  showCart: false,
  setShowCart: () => {},
  removeItem: () => {},
  subTotal: 0,
  setSubTotal: () => {},
};

export const CartContext = createContext(defaultData);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(defaultData.cart);
  const [showCart, setShowCart] = useState(defaultData.showCart);
  const [subTotal, setSubTotal] = useState(defaultData.subTotal);

  useEffect(() => {
    updateSubTotal();
  }, [cart]);

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
    const _cart = [...cart];
    const _cartItemFoundIndex = _cart.findIndex(
      _cartItem => _cartItem.product.id === item.product.id
    );
    if (_cartItemFoundIndex !== -1) {
      _cart.splice(_cartItemFoundIndex, 1);
      setCart(_cart);
    }
  };

  const updateSubTotal = () => {
    const _cart = [...cart];
    let _subtotal = 0;
    _cart.forEach(item => {
      _subtotal += item.amount * item.product.price;
    });
    setSubTotal(_subtotal);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        showCart,
        setShowCart,
        subTotal,
        setSubTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
