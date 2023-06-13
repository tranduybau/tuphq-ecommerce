"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import classNames from "classnames";


import './Category.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import CategoryItem from "./components/CategoryItem";

SwiperCore.use([Navigation, Pagination]);

export default function Category() {
    //ref
    const swiperRef = useRef()

    //state
    const [swiper, setSwiper] = useState(true);
    const [canGoPrev, setCanGoPrev] = useState(false);
    const [canGoNext, setCanGoNext] = useState(true);



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
        <div className="category-wrapper container">
            <div className='category-title'>
                <span className='block' />
                <span className="font-poppins">Categories</span>
            </div>
            <div className='category-control'>
                <h1 className="font-inter">Browse By Category</h1>
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
            <div className='categories'>
                <Swiper
                    onSwiper={handleSwiper}
                    onReachEnd={() => {
                        setCanGoPrev(true)
                    }}
                    onReachBeginning={() => {
                        setCanGoPrev(true)
                    }}
                    ref={swiperRef}
                    slidesPerView={6}
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
                            slidesPerView: 6,
                            spaceBetween: 40
                        }

                    }}>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-CellPhone.svg"
                            category="Phones" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-SmartWatch.svg"
                            category="SmartWatch" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Camera.svg"
                            category="Camera" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Headphone.svg"
                            category="Headphones" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Gamepad.svg"
                            category="Gaming" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
