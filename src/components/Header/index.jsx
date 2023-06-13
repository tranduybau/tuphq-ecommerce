"use client"
import { useState } from 'react'
import './Header.scss'
import Image from 'next/image'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [active, setActive] = useState(1)
    return (
        <header className='header'>
            <div className='top-header'>
                <div className="top-header-main container">
                    <div className='top-header__text '>
                        <span className='top-header__text-content font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                        <a href='#' className='top-header__text-link font-poppins'>ShopNow</a>
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
                    
                    <ul className="main-header__menu">
                        <li className="nav-item">
                            <a onClick={() => setActive(1)} className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: active === 1 })} href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActive(2)} className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: active === 2 })} href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActive(3)} className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: active === 3 })} href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActive(4)} className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: active === 4 })} href="#">Sign up</a>
                        </li>
                    </ul>

                    <div className='main-header__actions'>
                        <div className='main-header__actions-search'>
                            <input placeholder='What are you looking for?' />
                            <Image
                                className='icon-search'
                                width={24}
                                height={24}
                                src='image/SearchIcon.svg'
                                alt="search"
                            />
                        </div>
                        <Image
                            className='icon-heart'
                            width={32}
                            height={32}
                            alt='Heart'
                            src='image/Heart.svg'
                        />
                        <Image
                            className='icon-cart'
                            width={32}
                            height={32}
                            alt='Cart'
                            src='image/Cart.svg'
                        />
                    </div>

                    <div className='bar-icon'>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                </div>
            </div>
        </header>
    )
}