import CarouselSplit from '../components/CarouselSplit';
import InstagramGallery from '../components/InstagramGallery';
import SplitInfo from '../components/SplitInfo';

const Home = () => {
  return (
    <div className='home'>
      <SplitInfo />
      <CarouselSplit />
      <InstagramGallery />
    </div>
  );
};

export default Home;
