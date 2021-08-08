import { Link } from 'react-router-dom';
import { BsBag, BsList, BsX } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../store/CartContext';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setShowCart } = useContext(CartContext);

  const openCart = () => {
    setShowCart(true);
  };

  const menuClosedHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    navMenuHandler();
  }, [isMenuOpen]);

  const navMenuHandler = () => {
    const navResponsive = document.getElementById('js-nav-responsive');
    if (navResponsive !== undefined) {
      if (isMenuOpen) {
        navResponsive.style.top = '0px';
      } else {
        navResponsive.style.top = '-100vh';
      }
    }
  };

  return (
    <>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/home'>
              Home
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/shop'>
              Shop
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/contact'>
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
          <BsList
            className='nav__icon nav__icon--closedmenu'
            onClick={menuClosedHandler}
          />
        </div>
      </nav>

      <div id='js-nav-responsive' className='nav-menu'>
        <div className='nav-menu__header'>
          <BsX
            className='nav-menu__icon-closedmenu'
            onClick={menuClosedHandler}
          />
        </div>
        <ul className='nav-menu__list'>
          <li className='nav-menu__list-item'>
            <Link
              className='nav-menu__link'
              to='/home'
              onClick={menuClosedHandler}
            >
              Home
            </Link>
          </li>
          <li className='nav-menu__list-item'>
            <Link
              className='nav-menu__link'
              to='/shop'
              onClick={menuClosedHandler}
            >
              Shop
            </Link>
          </li>
          <li className='nav-menu__list-item'>
            <Link
              className='nav-menu__link'
              to='/contact'
              onClick={menuClosedHandler}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
