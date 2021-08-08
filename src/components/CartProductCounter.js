import { useEffect, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import IconWrapperEvent from './IconWrapperEvent';

const CartProductCounter = props => {
  const { onUpdate, initValue } = props;

  const [productCounter, setProductCounter] = useState(initValue);

  useEffect(() => {
    onUpdate(productCounter);
  }, [productCounter]);

  const counterHandler = type => {
    if (type === 'increment') {
      setProductCounter(_prev => _prev + 1);
    } else if (type === 'decrement') {
      setProductCounter(_prev => _prev - 1);
    }
  };

  return (
    <div className='cart-product-counter'>
      <IconWrapperEvent
        clickHandler={() => counterHandler('decrement')}
        classes='cart-product-counter__icon'
      >
        <AiOutlineMinus />
      </IconWrapperEvent>
      <div className='cart-product-counter__counter-wrapper'>
        <p className='cart-product-counter__counter'>{productCounter}</p>
      </div>
      <IconWrapperEvent
        clickHandler={() => counterHandler('increment')}
        classes='cart-product-counter__icon'
      >
        <AiOutlinePlus />
      </IconWrapperEvent>
    </div>
  );
};

export default CartProductCounter;
