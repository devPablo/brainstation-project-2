import ActionButton from './ActionButton';
import CarouselImages from './CarouselImages';
import { HOME_CAROUSEL_IMAGES } from '../constants/HomeCarouselImages';

const CarouselSplit = () => {
  return (
    <div className='carousel-split'>
      <div className='carousel-split__section carousel-split__section--first'>
        <div className='carousel-split__content-wrapper'>
          <h2 className='carousel-split__title'>
            Each and every product at ease for your daily needs.
          </h2>
          <span className='carousel-split__subtitle'>
            Each and every product undergoes a series of quality tests to ensure
            a useful and enjoyable experience every day of your life.
          </span>

          <ActionButton
            type='button'
            content='view all products'
            toLink='/shop'
            inverted='true'
            classes='carousel-split__action-button'
          />
        </div>
      </div>
      <div className='carousel-split__section carousel-split__section--second'>
        <CarouselImages images={HOME_CAROUSEL_IMAGES} />
      </div>
    </div>
  );
};

export default CarouselSplit;
