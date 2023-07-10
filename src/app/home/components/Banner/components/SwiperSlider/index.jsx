'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

import Slider from '../Slider';

import './SwiperSlider.scss';

const modulesSwiper = [Pagination];
const paginationSwiper = { clickable: true };
const breakpointsSwiper = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  576: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  1200: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
};

export default function SwiperSlider() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://gmen-admin.wii.camp/api/v1.0/slides'
        );
        setSlides(response.data);
      } catch (error) {
        return error;
      }
      return null;
    };
    fetchData();
  }, []);
  return (
    <div className="slider flex-auto w-full">
      <Swiper
        modules={modulesSwiper}
        spaceBetween={0}
        slidesPerView={1}
        pagination={paginationSwiper}
        breakpoints={breakpointsSwiper}
      >
        {slides &&
          slides.body &&
          slides.body.map((slide) => {
            return (
              <SwiperSlide key={slide._id}>
                <Slider
                  img={slide.image}
                  title={slide.title}
                  discount={slide.description}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
