"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import SwiperCore, { Navigation, Pagination } from 'swiper';


import './Category.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import CategoryItem from "./components/CategoryItem";

SwiperCore.use([Navigation, Pagination]);

export default function Category() {
    const swiperRef = useRef(null);
    let mySwiper;


    return (
        <div className="category-wrapper container">
            <div className='category-title'>
                <span className='block'></span>
                <span>Categories</span>
            </div>
            <div className='category-control'>
                <h1>Browse By Category</h1>
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
            <div className='categories'>
                <Swiper
                    onSwiper={(swiper) => (mySwiper = swiper)}
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

                    }}
                >
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-CellPhone.svg"
                            category="Phones"
                        ></CategoryItem>

                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-SmartWatch.svg"
                            category="SmartWatch"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Camera.svg"
                            category="Camera"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Headphone.svg"
                            category="Headphones"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Gamepad.svg"
                            category="Gaming"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer"
                        ></CategoryItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryItem
                            icon="Category-Computer.svg"
                            category="Computer"
                        ></CategoryItem>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
