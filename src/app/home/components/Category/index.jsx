"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import classNames from "classnames";
import CategoryItem from "./components/CategoryItem";


import './Category.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'

//icon
import ArrowLeft from '@/svgs/icons_arrow-left.svg'
import ArrowRight from '@/svgs/icons_arrow-right.svg'
import CellPhone from '@/svgs/Category-CellPhone.svg'
import Computer from '@/svgs/Category-Computer.svg'
import SmartWatch from '@/svgs/Category-SmartWatch.svg'
import Camera from '@/svgs/Category-Camera.svg'
import Headphone from '@/svgs/Category-Headphone.svg'
import Gamepad from '@/svgs/Category-Gamepad.svg'


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
                        <ArrowLeft className="arrow-left-icon" />
                    </button>
                    <button onClick={handleControlSwiperRight} className={classNames('btn-control-swiper', { disabled: canGoNext === false })}>
                        <ArrowRight className="arrow-right-icon" />
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
                        <CategoryItem category="Phones" >
                            <CellPhone className='category-img'></CellPhone>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Computer" >
                            <Computer className='category-img'></Computer>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="SmartWatch" >
                            <SmartWatch className='category-img'></SmartWatch>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Camera" >
                            <Camera className='category-img'></Camera>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Headphones" >
                            <Headphone className='category-img'></Headphone>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Gaming" >
                            <Gamepad className='category-img'></Gamepad>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Computer" >
                            <CellPhone className='category-img'></CellPhone>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Computer" >
                            <CellPhone className='category-img'></CellPhone>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Computer" >
                            <CellPhone className='category-img'></CellPhone>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Computer" >
                            <CellPhone className='category-img'></CellPhone>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Computer" >
                            <CellPhone className='category-img'></CellPhone>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Computer" >
                            <CellPhone className='category-img'></CellPhone>
                        </CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem category="Computer" >
                            <CellPhone className='category-img'></CellPhone>
                        </CategoryItem>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}