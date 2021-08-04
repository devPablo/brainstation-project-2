import InstagramCarousel from './InstagramCarousel';
import InstagramHeader from './InstagramHeader';

const InstagramGallery = () => {
  return (
    <div className='instagram-gallery'>
      <div className='instagram-gallery__section'>
        <InstagramHeader />
      </div>
      <div className='instagram-gallery__section'>
        <div className='instagram-gallery__images-wrapper'>
          <InstagramCarousel />
        </div>
      </div>
    </div>
  );
};

export default InstagramGallery;
