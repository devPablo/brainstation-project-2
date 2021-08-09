import { useContext, useEffect, useState } from 'react';
import { CartContext } from './../store/CartContext';

const CheckoutHeader = () => {
  const { cart } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    cart.forEach(item => {
      items += item.amount;
    });
    setTotalItems(items);
  }, [totalItems]);

  return (
    <div className='checkout-header'>
      <div className='checkout-header__section'>
        <p className='checkout-header__title'>checkout</p>
        <p className='checkout-header__title'>({totalItems} items)</p>
      </div>
      <div className='checkout-header__section'>
        <p className='checkout-header__information'>
          Complete the following form with your credit card information to
          proceed with the checkout; or pay using our newest method PayPal.
        </p>
      </div>
    </div>
  );
};

export default CheckoutHeader;
