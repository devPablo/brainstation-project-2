import { AiOutlineInstagram } from 'react-icons/ai';
import IconWrapper from './IconWrapper';

const InstagramHeader = () => {
  return (
    <div className='instagram-header'>
      <div className='instagram-header__logo-wrapper'>
        <IconWrapper toLink='https://www.instagram.com/kvellhome/' target='_blank'>
          <AiOutlineInstagram />
        </IconWrapper>
        <p className='instagram-header__title'>Instagram</p>
      </div>
      <div>
        <p className='instagram-header__handle'>@pablobonillagarrido</p>
      </div>
    </div>
  );
};

export default InstagramHeader;
