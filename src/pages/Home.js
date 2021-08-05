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
single momento I've had any second thoughts; top quality."
        author='Pablo'
      />
      <Review
        image={ReviewTwo}
        content="Simply amazing. I've tried plenty of products throughout the years, and this
        has changed the way I live entirely; couldn't ask for more."
        author='Carlos'
        invert='true'
      />
      <InstagramGallery />
    </div>
  );
};

export default Home;
