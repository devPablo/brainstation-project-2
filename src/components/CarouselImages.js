import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';

const CarouselImages = props => {
  const { images } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowWidthListener = window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', windowWidthListener);
    };
  }, [windowWidth]);

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={
        windowWidth >= 1024
          ? 3.2
          : windowWidth >= 768
          ? 2.2
          : windowWidth >= 360
          ? 1.9
          : 1.5
      }
      className='carousel-images'
    >
      {images.map((img, index) => {
        return (
          <SwiperSlide key={index} className='carousel-images__slide'>
            <div className='carousel-images__image-wrapper'>
              <img src={img} className='carousel-images__image' />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselImages;
