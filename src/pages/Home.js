import CarouselSplit from '../components/CarouselSplit';
import InstagramGallery from '../components/InstagramGallery';
import Review from '../components/Review';
import SplitInfo from '../components/SplitInfo';

import ReviewOne from './../assets/background/review-1.jpg';
import ReviewTwo from './../assets/background/review-2.jpg';

const Home = () => {
  return (
    <div className='home'>
      <SplitInfo />
      <CarouselSplit />
      <Review
        image={ReviewOne}
        content="I've used Boniv products for 4 years now, and from
                the very beginning I've loved it. There hasn't been one
                single moment I had any second thoughts; top quality."
        author='Pablo'
      />
      <Review
        image={ReviewTwo}
        content="It's simple, by far the worst products I've ever purchased in my entire life; 
                had them thrown up in the garbage right away, no regrets."
        author='Carlos'
        invert='true'
      />
      <InstagramGallery />
    </div>
  );
};

export default Home;
