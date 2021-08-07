import ActionButton from './ActionButton';

const CartFooter = () => {
  return (
    <div className='cart-footer'>
      <ActionButton toLink='/checkout' content='checkout' classes='cart-footer__checkout' />
    </div>
  );
};

export default CartFooter;
