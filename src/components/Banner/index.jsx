// Import Swiper React components
'use client'
import './Banner.scss'
import Image from 'next/image';
import Slider from '../Slider';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Banner() {
    return (
        <div className='banner-wrapper'>
            <div className='banner container flex'>
                <div className='sidebar flex-auto '>
                    <ul className='sidebar__menu '>
                        <li className='sidebar-item sp-bw'>
                            <span>Woman&apos;s Fashion</span>
                            <Image
                                width={24}
                                height={24}
                                src='image/DropDown-right.svg'
                                alt='dropdown right'
                            ></Image>
                        </li>
                        <li className='sidebar-item sp-bw'>
                            <span>Men&apos;s Fashion</span>
                            <Image
                                width={24}
                                height={24}
                                src='image/DropDown-right.svg'
                                alt='dropdown right'
                            ></Image>

                        </li>
                        <li className='sidebar-item'>
                            <span>Electronics</span>
                        </li>
                        <li className='sidebar-item'>
                            <span>Home & Lifestyle</span>
                        </li>
                        <li className='sidebar-item'>
                            <span>Medicine</span>
                        </li>
                        <li className='sidebar-item'>
                            <span>Sports & Outdoor</span>
                        </li>
                        <li className='sidebar-item'>
                            <span>Baby's & Toys</span>
                        </li>
                        <li className='sidebar-item'>
                            <span>Groceries & Pets</span>
                        </li>
                        <li className='sidebar-item'>
                            <span>Health & Beauty</span>
                        </li>
                    </ul>
                </div>
                <div className='slider flex-auto '>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <Slider
                                title='iPhone 14 Series'
                                discount='Up to 10% off Voucher'
                                img='banner.svg'
                            ></Slider>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slider
                                title='iPhone 14 Series'
                                discount='Up to 10% off Voucher'
                                img='banner.svg'
                            ></Slider>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slider
                                title='iPhone 14 Series'
                                discount='Up to 10% off Voucher'
                                img='banner.svg'
                            ></Slider>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}