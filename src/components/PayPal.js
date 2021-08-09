import { PayPalButtons, FUNDING } from '@paypal/react-paypal-js';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from './../store/CartContext';

const PayPal = props => {
  const { onPaymentComplete, classes } = props;
  const { subTotal } = useContext(CartContext);
  const history = useHistory();

  const onApprove = (data, actions) => {
    onPaymentComplete();
    return actions.order.capture();
  };

  // PayPal Sandbox
  // Email: sb-vb74747091018@personal.example.com
  // Password: tdd*Wj2&

  return (
    <PayPalButtons
      className={`paypal ${classes}`}
      fundingSource={FUNDING.PAYPAL}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: subTotal,
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PayPal;
