import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from '@paypal/react-paypal-js';
import { useContext } from 'react';
import { CartContext } from './../store/CartContext';

const PayPal = props => {
  const { classes } = props;
  const { subTotal } = useContext(CartContext);

  const onApprove = (data, actions) => {
    console.log('Payment from PayPal approved');
    return actions.order.capture();
  };

  // sb-vb74747091018@personal.example.com
  // tdd*Wj2&

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
