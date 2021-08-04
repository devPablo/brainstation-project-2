import KaptainBackground from './../assets/background/kaptain_desktop-1920x1080.jpg';
import ActionButton from './ActionButton';

const SplitInfo = () => {
  const actionButtonHandler = () => {
    console.log('Redirecting to products...');
  };

  return (
    <div className='split-info'>
      <div className='split-info__section split-info__section--green'>
        <div className='split-info__content-wrapper'>
          <span className='split-info__subtitle'>our products</span>
          <h2 className='split-info__title'>
            Proudly designed for everyday living
          </h2>
          <ActionButton
            type='button'
            content='view products'
            clickHandler={actionButtonHandler}
          />
        </div>
      </div>
      <div className='split-info__section'>
        <img src={KaptainBackground} className='split-info__img' />
        <span className='split-info__trending'>Trending Kaptain chairs</span>
      </div>
    </div>
  );
};

export default SplitInfo;
