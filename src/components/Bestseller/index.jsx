"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Cart from './components/Cart';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import TimeCountDown from "./components/TimeCountDown";


import './Bestseller.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import Image from "next/image";

SwiperCore.use([Navigation, Pagination]);
export default function BestSeller() {
    const swiperRef = useRef(null);



    return (
        <div className="bestseller-wrapper container">
            <div className='bestseller-heading'>
                <span className='block'></span>
                <span className="font-poppins">This Month</span>
            </div>
            <div className='bestseller-control'>
                <h1 className="font-inter">Best Selling Products</h1>
                <div className='view-all'>
                    <button className="btn-view-all">
                        <a className="btn-view-all__link font-poppins">
                            View All
                        </a>
                    </button>
                </div>
            </div>
            <div className='product-bs'>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },

                        576: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }

                    }}>
                    <SwiperSlide>
                        <Cart
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img='/image/bestselling-product.png'
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="banner-product">
                <div className="banner-product__img">
                    <Image
                        src={'/image/image-bestselling.png'}
                        alt="best selling"
                        fill={true}
                    ></Image>
                </div>
                <div className="banner-product__text">
                    <span className="banner-product__text-categories font-poppins">Categories</span>
                    <span className="banner-product__text-content font-inter">Enhance Your Music Experience</span>
                    <TimeCountDown />
                    <button className="banner-product__btn">
                        <a className="font-poppins" href="">Buy Now</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
