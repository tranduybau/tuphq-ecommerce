"use client"
import { useState } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faShapes } from '@fortawesome/free-solid-svg-icons'

import './Header.scss'

//icon
import SearchIcon from '@/svgs/SearchIcon.svg'
import HeartIcon from '@/svgs/Heart.svg'
import CartIcon from '@/svgs/Cart.svg'
import Link from 'next/link'
export default function Header() {
    const [active, setActive] = useState(1)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className='header'>
            <div className='top-header'>
                <div className="top-header-main container">
                    <div className='top-header__text '>
                        <span className='top-header__text-content font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                        <Link href='/' className='top-header__text-link font-poppins'>ShopNow</Link>
                    </div>
                    <div className='top-header__language '>
                        <select className="language-switcher-select">
                            <option className='font-poppins' value="en">English</option>
                            <option className='font-poppins' value="vn">Vietnamese</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='main-header container'>
                <div className='main-header__wrapper'>
                    <div className='main-header__brand'>
                        <span className='font-inter'>Exclusive</span>
                    </div>
                    <div onClick={toggleMenu} className='fa-carat-icon'>
                        <FontAwesomeIcon icon={isMenuOpen === true ? faCaretUp : faCaretDown} />
                    </div>
                    <ul className={classNames('main-header__menu',{show : isMenuOpen === true})}>
                        <li className="nav-item">
                            <Link onClick={() => setActive(1)} className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: active === 1 })} href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setActive(2)} className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: active === 2 })} href="/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setActive(3)} className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: active === 3 })} href="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setActive(4)} className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: active === 4 })} href="/">Sign up</Link>
                        </li>
                    </ul>

                    <div className={classNames('main-header__actions', {show: isMenuOpen === true})}>
                        <div className='main-header__actions-search'>
                            <input placeholder='What are you looking for?' />
                            <SearchIcon className='icon-search' />
                        </div>
                        <HeartIcon className='icon-heart' />
                        <CartIcon className='icon-cart' />
                    </div>
                </div>
            </div>
        </header>
    )
}