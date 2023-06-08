"use client"
import { useState } from 'react'
import './Header.scss'
import Image from 'next/image'
import classNames from 'classnames'

export default function Header() {
    const [active, setActive] = useState(1)
    return (
        <header className='header'>
            <div className='top-header'>
                <div className="top-header-main ">
                    <div className='col-xl-2 col-lg-2 col-md-1'></div>
                    <div className='top-header__text col-xl-8 col-lg-7 col-md-9'>
                        <span className='top-header__text-content'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                        <a href='#' className='top-header__text-link'>ShopNow</a>
                    </div>
                    <div className='top-header__language col-xl-2 col-lg-3 col-md-2'>
                        <select className="language-switcher-select">
                            <option value="en">English</option>
                            <option value="vn">Vietnamese</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='main-header container'>
                <div className='main-header__wrapper row'>
                    <div className='main-header__brand col-xl-3 col-lg-2 col-md-5 col-sm-3 col-xs-2'>
                        <span>Exclusive</span>
                    </div>
                    <ul className="main-header__menu col-xl-4 col-lg-5 col-md-7 col-sm-9 col-xs-10">
                        <li className="nav-item">
                            <a onClick={() => setActive(1)} className={classNames('nav-link', 'main-header-link', { active: active === 1 })} href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActive(2)} className={classNames('nav-link', 'main-header-link', { active: active === 2 })} href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActive(3)} className={classNames('nav-link', 'main-header-link', { active: active === 3 })} href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActive(4)} className={classNames('nav-link', 'main-header-link', { active: active === 4 })} href="#">Sign up</a>
                        </li>
                    </ul>
                    <div className='main-header__actions col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12'>
                        <div className='main-header__actions-search'>
                            <input placeholder='What are you looking for?' />
                            <Image
                                className='icon-search'
                                width={24}
                                height={24}
                                src='image/SearchIcon.svg'
                                alt="search"
                            ></Image>
                        </div>
                        <Image
                            className='icon-heart'
                            width={32}
                            height={32}
                            alt='Heart'
                            src='image/Heart.svg'
                        ></Image>
                        <Image
                            className='icon-cart'
                            width={32}
                            height={32}
                            alt='Cart'
                            src='image/Cart.svg'
                        ></Image>
                    </div>
                </div>
            </div>
        </header>
    )
}