// Import Swiper React components
"use client"
import './Banner.scss'
import Image from 'next/image';
import Slider from '../Slider';

export default function Banner() {
    return (
        <div className='wrapper'>
            <div className='banner container'>
                <div className='row'>
                    <div className='sidebar col-xl-3'>
                        {/* <ul className='sidebar__menu'>
                            <li className='sidebar-item'>
                                <span></span>
                            </li>
                            <li className='sidebar-item'>
                                <span></span>
                            </li>
                            <li className='sidebar-item'>
                                <span></span>
                            </li>
                            <li className='sidebar-item'>
                                <span></span>
                            </li>
                            <li className='sidebar-item'>
                                <span></span>
                            </li>
                            <li className='sidebar-item'>
                                <span></span>
                            </li>
                            <li className='sidebar-item'>
                                <span></span>
                            </li>
                            <li className='sidebar-item'></li>
                            <li className='sidebar-item'>
                                <span></span>
                            </li>
                        </ul> */}
                    </div>
                    <div className='slider'>
    
                    </div>
                </div>
            </div>
            {/* <Swiper
                    // install Swiper modules
                    modules={[Pagination, Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <Slider></Slider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slider></Slider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slider></Slider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slider></Slider>
                    </SwiperSlide>

                </Swiper> */}
        </div>
    )
}