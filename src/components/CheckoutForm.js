import CheckoutFooter from './CheckoutFooter';
import ActionButtonEvent from './ActionButtonEvent';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../store/CartContext';
import PayPal from './PayPal';

const CheckoutForm = props => {
  const { onPaymentComplete } = props;

  const [email, setEmail] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiryDate, setCardExpiryDate] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      email.trim() === '' ||
      cardName.trim() === '' ||
      cardNumber.trim() === '' ||
      cardExpiryDate.trim() === '' ||
      cardCVC.trim() === ''
    ) {
      setFormValid(false);
      return;
    } else {
      setFormValid(true);
    }
  }, [email, cardName, cardNumber, cardExpiryDate, cardCVC]);

  const submitHandler = e => {
    e.preventDefault();
    if (!formValid) return;
    onPaymentComplete(cardName);

    console.log('Payment completed');
    console.log(email, cardName, cardNumber, cardExpiryDate, cardCVC);
  };

  return (
    <div className='checkout-form'>
      <form onSubmit={submitHandler} className='checkout-form__form'>
        <div className='checkout-form__form-group'>
          <label className='checkout-form__form-label'>e-mail address</label>
          <input
            type='email'
            className='checkout-form__form-input'
            value={email}
            placeholder='E-mail address'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='checkout-form__form-group'>
          <label className='checkout-form__form-label'>name on card</label>
          <input
            type='text'
            className='checkout-form__form-input'
            value={cardName}
            placeholder='Name on card'
            onChange={e => setCardName(e.target.value)}
          />
        </div>
        <div className='checkout-form__form-group'>
          <label className='checkout-form__form-label'>card number</label>
          <input
            type='text'
            className='checkout-form__form-input'
            value={cardNumber}
            placeholder='Card number'
            onChange={e => setCardNumber(e.target.value)}
          />
        </div>
        <div className='checkout-form__form-group'>
          <label className='checkout-form__form-label'>expiry date</label>
          <input
            type='text'
            className='checkout-form__form-input'
            value={cardExpiryDate}
            placeholder='MM/YYYY'
            onChange={e => setCardExpiryDate(e.target.value)}
          />
        </div>
        <div className='checkout-form__form-group'>
          <label className='checkout-form__form-label'>cvc</label>
          <input
            type='text'
            className='checkout-form__form-input'
            value={cardCVC}
            placeholder='Card verification code'
            onChange={e => setCardCVC(e.target.value)}
          />
        </div>

        <CheckoutFooter />

        <div className='checkout-form__form-group'>
          <ActionButtonEvent
            type='submit'
            content='confirm payment'
            classes={`checkout-form__form-confirm-payment ${
              !formValid ? 'checkout-form__form-confirm-payment--disabled' : ''
            }`}
          />
          <PayPal onPaymentComplete={onPaymentComplete}/>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
