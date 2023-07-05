'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import CartIcon from '@/svgs/Header/Cart.svg';
import HeartIcon from '@/svgs/Header/Heart.svg';
import CancelIcon from '@/svgs/Header/icon-cancel.svg';
import LogoutIcon from '@/svgs/Header/Icon-logout.svg';
import MallbagIcon from '@/svgs/Header/icon-mallbag.svg';
import ReviewIcon from '@/svgs/Header/Icon-Reviews.svg';
import SearchIcon from '@/svgs/Header/SearchIcon.svg';
import UserIcon from '@/svgs/Header/user.svg';
import UserTooltipIcon from '@/svgs/Header/user-img.svg';

import './Header.scss';

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [user, setUser] = useState();
  const [cartItemNumber, setCardItemNumber] = useState(0);
  const [wishlistItemNumber, setWishlistItemNumber] = useState(0);
  const router = useRouter();

  const tooltipRef = useRef(null);

  useEffect(() => {
    const currentUser = Cookies.get('currentUser')
      ? JSON.parse(Cookies.get('currentUser'))
      : null;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    const currentCartItems = JSON.parse(localStorage.getItem('cartItems'));
    const currentWishlistItems = JSON.parse(
      localStorage.getItem('wishlistItems')
    );
    const currentUser = Cookies.get('currentUser')
      ? JSON.parse(Cookies.get('currentUser'))
      : null;

    if (currentCartItems && currentUser) {
      setCardItemNumber(currentCartItems.productId.length);
    }

    if (currentWishlistItems && currentUser) {
      setWishlistItemNumber(currentWishlistItems.productId.length);
    }
  }, []);

  const handleShowTooltip = useCallback(() => {
    setIsTooltipOpen((prevState) => !prevState);
  }, []);

  const handleLogout = useCallback(() => {
    Cookies.remove('currentUser');
    setTimeout(() => {
      router.refresh();
    }, 100);
  }, [router]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const handleCheckPrivateRoute = useCallback(
    (pathnameCheck) => {
      const currentUser = Cookies.get('currentUser')
        ? JSON.parse(Cookies.get('currentUser'))
        : null;
      if (currentUser === null) {
        router.push('/signin');
        toast.error('Bạn cần phải đăng nhập');
      } else {
        router.push(`/${pathnameCheck}`);
      }
    },
    [router]
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsTooltipOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [setIsTooltipOpen]);

  return (
    <header className="header">
      <div className="top-header">
        <div className="top-header-main container">
          <div className="top-header__text ">
            <span className="top-header__text-content font-poppins">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link href="/" className="top-header__text-link font-poppins">
              ShopNow
            </Link>
          </div>
          <div className="top-header__language ">
            <select className="language-switcher-select">
              <option className="font-poppins" value="en">
                English
              </option>
              <option className="font-poppins" value="vn">
                Vietnamese
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="main-header container">
        <div className="main-header__wrapper">
          <div className="main-header__brand">
            <span className="font-inter">Exclusive</span>
          </div>
          <button
            type="button"
            aria-label="Header"
            onClick={toggleMenu}
            className="fa-carat-icon"
          >
            <FontAwesomeIcon
              icon={isMenuOpen === true ? faCaretUp : faCaretDown}
            />
          </button>
          <ul
            className={classNames('main-header__menu', {
              show: isMenuOpen === true,
            })}
          >
            <li className="nav-item">
              <Link
                className={classNames(
                  'nav-link',
                  'main-header-link',
                  'font-poppins',
                  { active: pathname === '/' }
                )}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={classNames(
                  'nav-link',
                  'main-header-link',
                  'font-poppins',
                  { active: pathname === '/contact' }
                )}
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={classNames(
                  'nav-link',
                  'main-header-link',
                  'font-poppins',
                  { active: pathname === '/about' }
                )}
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={classNames(
                  'nav-link',
                  'main-header-link',
                  'font-poppins',
                  { active: pathname === '/signup' }
                )}
                href="/signup"
              >
                Sign up
              </Link>
            </li>
          </ul>

          <div
            className={classNames('main-header__actions', {
              show: isMenuOpen === true,
            })}
          >
            <div className="main-header__actions-search">
              <input placeholder="What are you looking for?" />
              <SearchIcon className="icon-search" />
            </div>
            <div className="main-header-icon__wrapper">
              {pathname !== '/signin' && pathname !== '/signup' && (
                <button
                  type="button"
                  aria-label="wishlist"
                  onClick={() => {
                    handleCheckPrivateRoute('wishlist');
                  }}
                  className="icon-heart"
                >
                  <HeartIcon className="icon-heart" />
                  {wishlistItemNumber > 0 && (
                    <span className="main-header-icon__count-product">
                      {wishlistItemNumber}
                    </span>
                  )}
                </button>
              )}
              {pathname !== '/signin' && pathname !== '/signup' && (
                <button
                  type="button"
                  aria-label="cart"
                  onClick={() => {
                    handleCheckPrivateRoute('cart');
                  }}
                  className="icon-cart"
                >
                  <CartIcon className="icon-cart" />
                  {cartItemNumber > 0 && (
                    <span className="main-header-icon__count-product">
                      {cartItemNumber}
                    </span>
                  )}
                </button>
              )}
              {user && (
                <div ref={tooltipRef} className="tooltip-user">
                  <UserIcon onClick={handleShowTooltip} className="user-icon" />
                  <div
                    className={classNames('tooltip-user__block', {
                      'tooltip-show': isTooltipOpen === true,
                    })}
                  >
                    <Link href="/myaccount" className="tooltip-user__item">
                      <UserTooltipIcon className="tooltip-user__icon" />
                      <span className="font-poppins">Manage My Account</span>
                    </Link>
                    <Link href="/" className="tooltip-user__item">
                      <MallbagIcon className="tooltip-user__icon" />
                      <span className="font-poppins">My Order</span>
                    </Link>
                    <Link href="/" className="tooltip-user__item">
                      <CancelIcon className="tooltip-user__icon" />
                      <span className="font-poppins">My Cancellations</span>
                    </Link>
                    <Link href="/" className="tooltip-user__item">
                      <ReviewIcon className="tooltip-user__icon" />
                      <span className="font-poppins">My Reviews</span>
                    </Link>
                    <button
                      type="button"
                      aria-label="logout"
                      onClick={handleLogout}
                      className="tooltip-user__item"
                    >
                      <LogoutIcon className="tooltip-user__icon" />
                      <span className="font-poppins">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
