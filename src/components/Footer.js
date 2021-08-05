import FooterForm from './FooterForm';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__section'>
        <div className='footer__navigation'>
          <p className='footer__title'>Explore</p>
          <Link className='footer__link'>Shop</Link>
          <Link className='footer__link'>About</Link>
          <Link className='footer__link'>Trade</Link>
        </div>
        <div className='footer__navigation'>
          <p className='footer__title'>Customer Service</p>
          <Link className='footer__link'>Frequently Asked</Link>
          <Link className='footer__link'>Contact Us</Link>
        </div>
        <div className='footer__navigation'>
          <p className='footer__title'>Legal</p>
          <Link className='footer__link'>Delivery & Returns</Link>
          <Link className='footer__link'>Terms & Conditions</Link>
          <Link className='footer__link'>Privacy Policy</Link>
        </div>
      </div>
      <div className='footer__section footer__subscription-form'>
        <div className='footer__subscription-form-wrapper'>
          <p className='footer__subscription-info'>
            Subscribe to the MYSA newsletter to receive exclusive content,
            offers and discounts!
          </p>
        </div>
        <div className='footer__subscription-form-wrapper'>
          <FooterForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
