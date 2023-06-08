"use client"
import './Flashsale.scss'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Cart from './components/Cart';

export default function Flashsale() {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
        <div className="flashsale-wrapper container">
            <div className='today'>
                <span className='block'></span>
                <span>Today's</span>
            </div>
            <div className='flashsale'>
                <h1>Flash Sales</h1>
                <span className='time-area'>
                    <div className='time'>
                        <h5>Days</h5>
                        <div className='time-block'>
                            <p className='time-value'>03</p>
                            <span className='semiclone'><p>:</p></span>
                        </div>
                    </div>
                    <div className='time'>
                        <h5>Hours</h5>
                        <div className="time-block">
                            <p className='time-value'>23</p>
                            <span className='semiclone'><p>:</p></span>
                        </div>
                    </div>
                    <div className='time'>
                        <h5>Minutes</h5>
                        <div className="time-block">
                            <p className='time-value'>19</p>
                            <span className='semiclone'><p>:</p></span>
                        </div>
                    </div>
                    <div className='time'>
                        <h5>Seconds</h5>
                        <div className="time-block">
                            <p className='time-value'>56</p>
                        </div>
                    </div>
                </span>
                <div className='btn-swiper'>

                </div>
            </div>
            <div className='product'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><Cart></Cart></SwiperSlide>
                    <SwiperSlide><Cart></Cart></SwiperSlide>
                    <SwiperSlide><Cart></Cart></SwiperSlide>
                    <SwiperSlide><Cart></Cart></SwiperSlide>
                    <SwiperSlide><Cart></Cart></SwiperSlide>
                    <SwiperSlide><Cart></Cart></SwiperSlide>
                    <SwiperSlide><Cart></Cart></SwiperSlide>
                    <SwiperSlide><Cart></Cart></SwiperSlide>
                    <SwiperSlide><Cart></Cart></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}