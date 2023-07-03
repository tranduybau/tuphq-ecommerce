'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// icon
import ArrowLeft from '@/svgs/icons_arrow-left.svg';
import ArrowRight from '@/svgs/icons_arrow-right.svg';

import Card from './components/Card';
import TimeCountDown from './components/TimeCountDown';

import './Flashsale.scss';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const moduleSwiper = [Pagination, Navigation];
const breakpointsSwiper = {
  320: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};
SwiperCore.use(moduleSwiper);

export default function Flashsale({ data }) {
  Flashsale.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  };
  let keyId = 0;
  // state
  const [swiper, setSwiper] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const [products, setProducts] = useState([]);
  // ref
  const swiperRef = useRef();
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const handleControlSwiperLeft = () => {
    swiperRef.current.swiper.slidePrev();
    setCanGoNext(true);
    if (swiper.isBeginning) {
      setCanGoPrev(false);
    }
  };

  const handleControlSwiperRight = () => {
    swiperRef.current.swiper.slideNext();
    setCanGoPrev(true);
    if (swiper.isEnd) {
      setCanGoNext(false);
    }
  };

  const handleSwiper = (swiperInput) => {
    setSwiper(swiperInput);
  };

  return (
    <div className="flashsale-wrapper container">
      <div className="today">
        <span className="block" />
        <span className="font-poppins">Today{`&apos;`}s</span>
      </div>
      <div className="flashsale">
        <h1 className="font-inter">Flash Sales</h1>
        <TimeCountDown />
        <div className="btn-swiper">
          <button
            type="button"
            aria-label="button control"
            onClick={handleControlSwiperLeft}
            className={classNames('btn-control-swiper', {
              disabled: canGoPrev === false,
            })}
          >
            <ArrowLeft className="arrow-left" />
          </button>
          <button
            type="button"
            aria-label="button control"
            onClick={handleControlSwiperRight}
            className={classNames('btn-control-swiper', {
              disabled: canGoNext === false,
            })}
          >
            <ArrowRight className="arrow-right" />
          </button>
        </div>
      </div>
      <div className="product-fs">
        <Swiper
          onSwiper={handleSwiper}
          onReachEnd={() => {
            setCanGoPrev(true);
          }}
          onReachBeginning={() => {
            setCanGoPrev(true);
          }}
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={30}
          modules={moduleSwiper}
          breakpoints={breakpointsSwiper}
        >
          {products.length > 0 &&
            products.map((product) => {
              keyId += 1;
              return (
                <SwiperSlide key={keyId}>
                  <Card
                    id={product.id}
                    img={product.image}
                    discount="40%"
                    name={product.title}
                    sale={product.price * 40}
                    price={product.price}
                    count={product.rating.count}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="view-all-product">
        <button type="button" className="view-all-product__btn">
          <Link className="font-poppins" href="/">
            View All Products
          </Link>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
