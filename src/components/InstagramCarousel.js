import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';

import { INSTAGRAM_CAROUSEL_IMAGES } from './../constants/InstagramCarouselImages';

const InstagramCarousel = () => {
  const [instagramImages, setInstagramImages] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setInstagramImages(INSTAGRAM_CAROUSEL_IMAGES);
  }, []);

  useEffect(() => {
    const windowWidthListener = window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', windowWidthListener);
    };
  }, [windowWidth]);

  return (
    instagramImages.length > 0 && (
      <Swiper
        spaceBetween={4}
        slidesPerView={
          windowWidth >= 1024
            ? 6
            : windowWidth >= 768
            ? 4
            : windowWidth >= 360
            ? 3
            : 2
        }
        className='instagram-carousel'
      >
        {instagramImages.map((img, index) => {
          return (
            <SwiperSlide key={index} className='instagram-carousel__slide'>
              <div className='instagram-carousel__image-wrapper'>
                <img src={img} className='instagram-carousel__image' />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  );
};
export default InstagramCarousel;
