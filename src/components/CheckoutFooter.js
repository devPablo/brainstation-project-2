import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../store/CartContext';
import { formatter } from './../utils/FormatCurrency';

const CheckoutFooter = () => {
  const { cart } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);
  
  useEffect(() => {
    if (cart.length === 1) {
      setSubTotal(cart[0].amount * cart[0].product.price);
    } else {
      const _subtotal = cart.reduce(calcSubTotal);
      setSubTotal(_subtotal);
    }
  }, [subTotal]);

  const calcSubTotal = (prev, current) => {
    return (
      prev.amount * prev.product.price + current.amount * current.product.price
    );
  };

  return (
    <div className='checkout-footer'>
      <p className='checkout-footer__title'>total amount</p>
      <p className='checkout-footer__title'>{formatter.format(subTotal)}</p>
    </div>
  );
};

export default CheckoutFooter;
