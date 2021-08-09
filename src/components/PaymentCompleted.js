import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../store/CartContext';
import { formatter } from '../utils/FormatCurrency';
import { generateRandomNumber } from '../utils/RandomNumber';
import PaymentCompletedSVG from './../assets/icon/payment-completed.svg';
import ActionButton from './ActionButton';

const PaymentCompleted = props => {
  const { merchant } = props;

  const { cart, setCart } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);

  const transactionNumber = generateRandomNumber(1000000000, 9000000000);

  const continueShopping = () => {
    setCart([]);
  };

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
    <div className='payment-completed'>
      <div className='payment-completed__section payment-completed__section--dashed'>
        <img src={PaymentCompletedSVG} className='payment-completed__image' />
        <p className='payment-completed__title'>Payment Completed!</p>
        <p className='payment-completed__transaction'>
          Transaction number: {transactionNumber}
        </p>
      </div>
      <div className='payment-completed__section'>
        <div className='payment-completed__content-row'>
          <p className='payment-completed__content'>Amount Paid:</p>
          <p className='payment-completed__content--child'>{formatter.format(subTotal)}</p>
        </div>
        <div className='payment-completed__content-row'>
          <p className='payment-completed__content'>Merchant:</p>
          <p className='payment-completed__content--child'>{merchant}</p>
        </div>
        <div className='payment-completed__content-row'>
          <ActionButton
            toLink='/shop'
            content='continue shopping'
            classes='payment-completed__continue-shopping'
            clickHandler={continueShopping}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentCompleted;
