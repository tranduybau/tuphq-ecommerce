'use client';

import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './SwiperSlider.scss';

const Slider = React.lazy(() => import('../Slider'));

const modulesSwiper = [Pagination];
const paginationSwiper = { clickable: true };

function SwiperSlider() {
  const [slides, setSlides] = useState([]);
  const breakpointsSwiper = useMemo(
    () => ({
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
    }),
    []
  );

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

  const swiperSlides = useMemo(
    () =>
      slides.body?.map((slide) => (
        <SwiperSlide key={slide._id}>
          <Slider
            img={slide.image}
            title={slide.title}
            discount={slide.description}
          />
        </SwiperSlide>
      )),
    [slides.body]
  );

  return (
    <div className="slider flex-auto w-full">
      <Swiper
        modules={modulesSwiper}
        spaceBetween={0}
        slidesPerView={1}
        pagination={paginationSwiper}
        breakpoints={breakpointsSwiper}
      >
        {swiperSlides}
      </Swiper>
    </div>
  );
}

export default React.memo(SwiperSlider);
