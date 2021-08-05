import { BsStarFill } from 'react-icons/bs';

const Review = props => {
  const { image, content, author, invert } = props;

  return (
    <div className={`review ${invert ? 'review--invert' : ''}`}>
      <div className='review__section'>
        <div className='review__image-wrapper'>
          <img src={image} className='review__image' />
        </div>
      </div>
      <div className='review__section'>
        <div className='review__stars-wrapper'>
          {Array(5)
            .fill(0)
            .map((star, index) => (
              <BsStarFill key={index} className='review__star' />
            ))}
        </div>

        <p className='review__content'>{content}</p>
        <p className='review__author'>{author}</p>
      </div>
    </div>
  );
};

export default Review;
