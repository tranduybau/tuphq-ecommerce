"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from './components/Card';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import TimeCountDown from "./components/TimeCountDown";
import classNames from "classnames";

import './Flashsale.scss'
import 'swiper/swiper-bundle.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//icon
import ArrowLeft from '@/svgs/icons_arrow-left.svg'
import ArrowRight from '@/svgs/icons_arrow-right.svg'
import Link from "next/link";

const moduleSwiper = [Pagination, Navigation]
const breakpointsSwiper = {
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
}
SwiperCore.use(moduleSwiper);

export default function Flashsale() {
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
                <TimeCountDown />
                <div className='btn-swiper'>
                    <button onClick={handleControlSwiperLeft} className={classNames('btn-control-swiper', { disabled: canGoPrev === false })}>
                        <ArrowLeft className='arrow-left' />
                    </button>
                    <button onClick={handleControlSwiperRight} className={classNames('btn-control-swiper', { disabled: canGoNext === false })}>
                        <ArrowRight className='arrow-right' />
                    </button>
                </div>
            </div>
            <div className='product-fs'>
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
                    modules={moduleSwiper}
                    breakpoints={breakpointsSwiper}>
                    <SwiperSlide>
                        <Card
                            img='/image/flashsale-product.png'
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad 123"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/flashsale-product.png'
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/flashsale-product.png'
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/flashsale-product.png'
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/flashsale-product.png'
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/flashsale-product.png'
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/flashsale-product.png'
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/flashsale-product.png'
                            discount="40%"
                            name="HAVIT HV-G92 Gamepad"
                            sale="120"
                            price="160"
                            count="88"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            img='/image/flashsale-product.png'
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
                    <Link className="font-poppins" href="/">View All Products</Link>
                </button>
            </div>
        </div>
    )
}

