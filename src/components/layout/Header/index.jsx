"use client"
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

import './Header.scss'

//icon
import SearchIcon from '@/svgs/Header/SearchIcon.svg'
import HeartIcon from '@/svgs/Header/Heart.svg'
import CartIcon from '@/svgs/Header/Cart.svg'
import UserIcon from '@/svgs/Header/user.svg'
import CancelIcon from '@/svgs/Header/icon-cancel.svg'
import LogoutIcon from '@/svgs/Header/Icon-logout.svg'
import MallbagIcon from '@/svgs/Header/icon-mallbag.svg'
import UserTooltipIcon from '@/svgs/Header/user-img.svg'
import ReviewIcon from '@/svgs/Header/Icon-Reviews.svg'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
export default function Header() {
    //state
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState()
    const [isTooltipOpen, setIsTooltipOpen] = useState(false)
    const router = useRouter()
    //ref
    const tooltipRef = useRef(null);

    const handleShowTooltip = () => {
        setIsTooltipOpen(!isTooltipOpen)
    }

    const handleLogout = () => {
        Cookies.remove('currentUser');
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCheckPrivateRoute = (pathname) => {
        const currentUser = Cookies.get('currentUser') ? JSON.parse(Cookies.get('currentUser')) : null;
        if (currentUser === null) {
            router.push('/signin')
            toast.error("Bạn cần phải đăng nhập")
        }
        else {
            router.push('/' + pathname)
        }
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setIsTooltipOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        const currentUser = Cookies.get('currentUser') ? JSON.parse(Cookies.get('currentUser')) : null;
        if (currentUser) {
            setUser(currentUser)
        }
    }, [])

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
                    <button onClick={toggleMenu} className='fa-carat-icon'>
                        <FontAwesomeIcon icon={isMenuOpen === true ? faCaretUp : faCaretDown} />
                    </button>
                    <ul className={classNames('main-header__menu', { show: isMenuOpen === true })}>
                        <li className="nav-item">
                            <Link className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: pathname === '/' })} href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: pathname === '/contact' })} href="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: pathname === '/about' })} href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={classNames('nav-link', 'main-header-link', 'font-poppins', { active: pathname === '/signup' })} href="/signup">Sign up</Link>
                        </li>
                    </ul>

                    <div className={classNames('main-header__actions', { show: isMenuOpen === true })}>
                        <div className='main-header__actions-search'>
                            <input placeholder='What are you looking for?' />
                            <SearchIcon className='icon-search' />
                        </div>
                        <div className='main-header-icon__wrapper'>
                            <button onClick={() => { handleCheckPrivateRoute('wishlist') }} className='icon-heart'>
                                <HeartIcon className='icon-heart' />
                            </button>
                            <button onClick={() => { handleCheckPrivateRoute('cart') }} className='icon-cart'>
                                <CartIcon className='icon-cart' />
                            </button>
                            {user && <div ref={tooltipRef} className='tooltip-user'>
                                <UserIcon onClick={handleShowTooltip} className='user-icon' />
                                <div className={classNames('tooltip-user__block', { 'tooltip-show': isTooltipOpen === true })}>
                                    <Link href='/' className='tooltip-user__item'>
                                        <UserTooltipIcon className="tooltip-user__icon" />
                                        <span className='font-poppins'>Manage My Account</span>
                                    </Link>
                                    <Link href='/' className='tooltip-user__item'>
                                        <MallbagIcon className="tooltip-user__icon" />
                                        <span className='font-poppins'>My Order</span>
                                    </Link>
                                    <Link href='/' className='tooltip-user__item'>
                                        <CancelIcon className="tooltip-user__icon" />
                                        <span className='font-poppins'>My Cancellations</span>
                                    </Link>
                                    <Link href='/' className='tooltip-user__item'>
                                        <ReviewIcon className="tooltip-user__icon" />
                                        <span className='font-poppins'>My Reviews</span>
                                    </Link>
                                    <button onClick={handleLogout} className='tooltip-user__item'>
                                        <LogoutIcon className="tooltip-user__icon" />
                                        <span className='font-poppins'>Logout</span>
                                    </button>
                                </div>
                            </div>}
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}