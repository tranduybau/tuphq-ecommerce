/* eslint-disable no-prototype-builtins */

'use client';

import React, { useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';

import Camera from '@/svgs/Category/Category-Camera.svg';
import CellPhone from '@/svgs/Category/Category-CellPhone.svg';
import Computer from '@/svgs/Category/Category-Computer.svg';
import Gamepad from '@/svgs/Category/Category-Gamepad.svg';
import Headphone from '@/svgs/Category/Category-Headphone.svg';
import SmartWatch from '@/svgs/Category/Category-SmartWatch.svg';
import ArrowLeft from '@/svgs/icons_arrow-left.svg';
import ArrowRight from '@/svgs/icons_arrow-right.svg';

import './Category.scss';

const CategoryItem = React.lazy(() => import('./components/CategoryItem'));

const breakpointsSwiper = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1200: {
    slidesPerView: 6,
    spaceBetween: 40,
  },
};

export default function Category() {
  const swiperRef = useRef(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const handleControlSwiperLeft = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleControlSwiperRight = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, []);

  const onSwiperReachEnd = useCallback(() => {
    setCanGoPrev(true);
  }, []);

  const onSwiperReachBeginning = useCallback(() => {
    setCanGoPrev(true);
  }, []);

  const onSwiperSlideChange = useCallback((swiper) => {
    setCanGoPrev(!swiper.isBeginning);
    setCanGoNext(!swiper.isEnd);
  }, []);

  return (
    <div className="category-wrapper container">
      <div className="category-title">
        <span className="block" />
        <span className="font-poppins">Categories</span>
      </div>
      <div className="category-control">
        <h1 className="font-inter">Browse By Category</h1>
        <div className="btn-swiper">
          <button
            aria-label="button control"
            type="button"
            onClick={handleControlSwiperLeft}
            className={classNames('btn-control-swiper', {
              disabled: !canGoPrev,
            })}
          >
            <ArrowLeft className="arrow-left-icon" />
          </button>
          <button
            aria-label="button control"
            type="button"
            onClick={handleControlSwiperRight}
            className={classNames('btn-control-swiper', {
              disabled: !canGoNext,
            })}
          >
            <ArrowRight className="arrow-right-icon" />
          </button>
        </div>
      </div>
      <div className="categories">
        <Swiper
          ref={swiperRef}
          slidesPerView={6}
          spaceBetween={30}
          breakpoints={breakpointsSwiper}
          onReachEnd={onSwiperReachEnd}
          onReachBeginning={onSwiperReachBeginning}
          onSlideChange={onSwiperSlideChange}
        >
          <SwiperSlide>
            <CategoryItem category="Phones">
              <CellPhone className="category-img max-w-[170px]" />
            </CategoryItem>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem category="Computer">
              <Computer className="category-img max-w-[170px]" />
            </CategoryItem>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem category="SmartWatch">
              <SmartWatch className="category-img max-w-[170px]" />
            </CategoryItem>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem category="Camera">
              <Camera className="category-img max-w-[170px]" />
            </CategoryItem>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem category="Headphones">
              <Headphone className="category-img max-w-[170px]" />
            </CategoryItem>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem category="Gaming">
              <Gamepad className="category-img max-w-[170px]" />
            </CategoryItem>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem category="Computer">
              <CellPhone className="category-img max-w-[170px]" />
            </CategoryItem>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryItem category="Computer">
              <CellPhone className="category-img max-w-[170px]" />
            </CategoryItem>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
