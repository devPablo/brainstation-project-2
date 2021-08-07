import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import IconWrapperEvent from './IconWrapperEvent';

const ProductCounter = () => {
  const [productCounter, setProductCounter] = useState(1);

  const counterHandler = type => {
    if (type === 'increment') {
      setProductCounter(_prev => _prev + 1);
    } else if (type === 'decrement') {
      if (productCounter <= 1) {
        setProductCounter(1);
      } else {
        setProductCounter(_prev => _prev - 1);
      }
    }
  };

  return (
    <div className='product-counter'>
      <IconWrapperEvent clickHandler={() => counterHandler('decrement')}>
        <AiOutlineMinus />
      </IconWrapperEvent>
      <div className='product-counter__counter-wrapper'>
        <p className='product-counter__counter'>{productCounter}</p>
      </div>
      <IconWrapperEvent clickHandler={() => counterHandler('increment')}>
        <AiOutlinePlus />
      </IconWrapperEvent>
    </div>
  );
};

export default ProductCounter;
