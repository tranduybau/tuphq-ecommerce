/* eslint-disable react/forbid-prop-types */

'use client';

import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './SwiperSlider.scss';

const LoadingSkeleton = React.lazy(() =>
  import('@/components/LoadingSkeleton')
);
const Slider = React.lazy(() => import('../Slider'));

SwiperCore.use([Pagination]);

function SwiperSlider({ data }) {
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSlides(data);
    setIsLoading(false);
  }, [data]);

  const swiperSlides = useMemo(
    () =>
      slides?.body?.map((slide) => (
        <SwiperSlide key={slide._id}>
          <Slider
            img={slide.image}
            title={slide.title}
            discount={slide.description}
          />
        </SwiperSlide>
      )),
    [slides?.body]
  );

  const breakpointsSwiper = useMemo(
    () => ({
      320: { slidesPerView: 1, spaceBetween: 10 },
      576: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 1, spaceBetween: 40 },
      992: { slidesPerView: 1, spaceBetween: 40 },
      1200: { slidesPerView: 1, spaceBetween: 50 },
    }),
    []
  );

  return (
    <div className="slider flex-auto w-full">
      {isLoading ? (
        <LoadingSkeleton className="xs:ml-0 w-full xl:w-[892px] h-[344px]" />
      ) : (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={breakpointsSwiper}
        >
          {swiperSlides}
        </Swiper>
      )}
    </div>
  );
}

SwiperSlider.propTypes = {
  data: PropTypes.object.isRequired,
};

export default React.memo(SwiperSlider);
