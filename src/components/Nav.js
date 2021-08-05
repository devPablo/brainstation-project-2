import { Link } from 'react-router-dom';
import { BsBag, BsList, BsX } from 'react-icons/bs';
import { useState } from 'react';

const Nav = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  const menuClosedHandler = () => {
    setIsMenuClosed(!isMenuClosed);
    console.log(isMenuClosed);
  };

  return (
    <nav className='nav'>
      <ul className={`nav__list ${isMenuClosed ? '' : 'nav__list--open'}`}>
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
          <Link className='nav__link' to='/about' onClick={menuClosedHandler}>
            About
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
        <BsBag className='nav__icon nav__icon--bag' />
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
