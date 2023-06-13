"use client"
import { useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper'; 
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import Cart from './components/Cart';

import './OutProduct.scss'
import 'swiper/swiper-bundle.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classNames from "classnames";
export default function OutProduct() {
    //state
    const [swiper, setSwiper] = useState(true);
    const [canGoPrev, setCanGoPrev] = useState(false);
    const [canGoNext, setCanGoNext] = useState(true);

    //ref
    const swiperRef = useRef()

    const handleControlSwiperLeft = () => {
        swiperRef.current.swiper.slidePrev();
        setCanGoNext(true);
        if (swiper.isBeginning) {
            setCanGoPrev(false);
        }
    }

    const handleControlSwiperRight = () => {
        swiperRef.current.swiper.slideNext();
        setCanGoPrev(true);
        if (swiper.isEnd) {
            setCanGoNext(false);
        }
    }

    const handleSwiper = (swiper) => {
        setSwiper(swiper);
    };


    return (
        <div className="flashsale-wrapper container">
            <div className='today'>
                <span className='block' />
                <span className="font-poppins">Today's</span>
            </div>
            <div className='flashsale'>
                <h1 className="font-inter">Flash Sales</h1>
                <div className='btn-swiper'>
                    <button onClick={handleControlSwiperLeft} className={classNames('btn-control-swiper', { disabled: canGoPrev === false })}>
                        <Image
                            src='image/icons_arrow-left.svg'
                            width={16}
                            height={16}
                            alt="button control swiper"
                        />
                    </button>
                    <button onClick={handleControlSwiperRight} className={classNames('btn-control-swiper', { disabled: canGoNext === false })}>
                        <Image
                            src='image/icons_arrow-right.svg'
                            width={16}
                            height={16}
                            alt="button control swiper"
                        />
                    </button>
                </div>
            </div>
            <div className='product'>
                <Swiper
                    onSwiper={handleSwiper}
                    onReachEnd={() => {
                        setCanGoPrev(true)
                    }}
                    onReachBeginning={() => {
                        setCanGoPrev(true)
                    }}
                    ref={swiperRef}
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40
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

                    }}>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad 123"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart
                            img="flashsale.svg"
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="view-all-product">
                <button className="view-all-product__btn">
                    <a className="font-poppins" href="/">View All Products</a>
                </button>
            </div>
        </div>
    )
}