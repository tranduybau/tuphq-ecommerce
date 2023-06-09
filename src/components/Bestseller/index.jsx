"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import Cart from './components/Cart';
import SwiperCore, { Navigation, Pagination } from 'swiper';


import './Bestseller.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

export default function BestSeller() {
    const swiperRef = useRef(null);
    let mySwiper;


    return (
        <div className="bestseller-wrapper container">
            <div className='today'>
                <span className='block'></span>
                <span>This Month</span>
            </div>
            <div className='bestseller-control'>
                <h1>Best Selling Products</h1>
                <div className='view-all'>
                    <button className="btn-view-all">
                        <a className="btn-view-all__link">
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
                    spaceBetween={50}
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
                            discount="40%"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            discount="40%"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            discount="40%"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            discount="40%"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            discount="40%"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            discount="40%"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            discount="40%"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            discount="40%"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="clothes.svg"
                            discount="40%"
                            name="The north coat"
                            sale="260"
                            price="360"
                            count="65"
                        ></Cart>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
