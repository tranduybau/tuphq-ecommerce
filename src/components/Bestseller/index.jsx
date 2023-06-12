"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Cart from './components/Cart';
import SwiperCore, { Navigation, Pagination } from 'swiper';


import './Bestseller.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import Image from "next/image";
import TimeCountDown from "./components/TimeCountDown";
import { ReactSVG } from "react-svg";

SwiperCore.use([Navigation, Pagination]);

export default function BestSeller() {
    const swiperRef = useRef(null);
    let mySwiper;


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
            <div className='product'>
                <Swiper
                    onSwiper={(swiper) => (mySwiper = swiper)}
                    ref={swiperRef}
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },

                        480: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },

                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        750: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }

                    }}
                >
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="banner-product">
                <ReactSVG src='image/imageBS.svg' className="banner-product__img"/>
                <div className="banner-product__text">
                    <span className="banner-product__text-categories font-poppins">Categories</span>
                    <span className="banner-product__text-content font-inter">Enhance Your Music Experience</span>
                    <TimeCountDown/>
                    <button className="banner-product__btn">
                        <a className="font-poppins" href="">Buy Now</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
