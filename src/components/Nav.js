import { Link } from 'react-router-dom';
import { BsBag, BsList, BsX } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { CartContext } from '../store/CartContext';

const Nav = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  const { setShowCart } = useContext(CartContext);

  const openCart = () => {
    setShowCart(true);
  };

  const menuClosedHandler = () => {
    setIsMenuClosed(!isMenuClosed);
  };

  return (
    <nav className='nav'>
      <ul className={`nav__list ${isMenuClosed ? '' : 'nav__list--open'}`}>
        <li className='nav__list-item'>
          <Link className='nav__link' to='/home' onClick={menuClosedHandler}>
            Home
          </Link>
        </li>
        <li className='nav__list-item'>
          <Link
            className='nav__link'
            to='/shop'
            onClick={!isMenuClosed ? menuClosedHandler : null}
          >
            Shop
          </Link>
        </li>
        <li className='nav__list-item'>
          <Link className='nav__link' to='/contact' onClick={menuClosedHandler}>
            Contact
          </Link>
        </li>
      </ul>

      <div className='nav__sections-wrapper'>
        <span className='nav__title'>BONIV.</span>
      </div>
      <div className='nav__sections-wrapper'>
        <p className='nav__username'>Pablo Bonilla</p>
        <BsBag className='nav__icon nav__icon--bag' onClick={openCart} />
        {isMenuClosed ? (
          <BsList
            className='nav__icon nav__icon--closedmenu'
            onClick={menuClosedHandler}
          />
        ) : (
          <BsX
            className='nav__icon nav__icon--closedmenu'
            onClick={menuClosedHandler}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
