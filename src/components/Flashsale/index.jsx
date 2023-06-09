"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import Cart from './components/Cart';
import SwiperCore, { Navigation, Pagination } from 'swiper';


import './Flashsale.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import TimeCountDown from "./components/TimeCountDown";

SwiperCore.use([Navigation, Pagination]);

export default function Flashsale() {
    const swiperRef = useRef(null);
    let mySwiper;


    return (
        <div className="flashsale-wrapper container">
            <div className='today'>
                <span className='block'></span>
                <span>Today's</span>
            </div>
            <div className='flashsale'>
                <h1>Flash Sales</h1>
                <TimeCountDown></TimeCountDown>
                <div className='btn-swiper'>
                    <button onClick={() => mySwiper.slidePrev()} className='btn-control-swiper'>
                        <Image
                            src='image/icons_arrow-left.svg'
                            width={16}
                            height={16}
                            alt="button control swiper"
                        ></Image>
                    </button>
                    <button onClick={() => mySwiper.slideNext()} className='btn-control-swiper'>
                        <Image
                            src='image/icons_arrow-right.svg'
                            width={16}
                            height={16}
                            alt="button control swiper"
                        ></Image>
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
                        750:{
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1000:{
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                        
                    }}
                >
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        ></Cart>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        ></Cart>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="view-all-product">
                <button className="view-all-product__btn">
                    <a href="/">View All Products</a>
                </button>
            </div>
        </div>
    )
}

