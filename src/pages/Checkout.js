import { useEffect, useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutHeader from '../components/CheckoutHeader';
import PaymentCompleted from '../components/PaymentCompleted';

const Checkout = () => {
  const [paymentCompeted, setPaymentCompleted] = useState(false);
  const [merchant, setMerchant] = useState('');

  useEffect(() => {
    document.title = 'Boniv — Checkout';
  }, []);

  const paymentCompleteHandler = merchant => {
    setMerchant(merchant);
    setPaymentCompleted(true);
  };

  return (
    <div className='checkout__wrapper'>
      <div className='checkout'>
        {!paymentCompeted && (
          <>
            <CheckoutHeader />
            <CheckoutForm onPaymentComplete={paymentCompleteHandler} />
          </>
        )}
        {paymentCompeted && <PaymentCompleted merchant={merchant} />}
      </div>
    </div>
  );
};

export default Checkout;
