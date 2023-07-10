/* eslint-disable react/forbid-prop-types */

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowLeft from '@/svgs/icons_arrow-left.svg';
import ArrowRight from '@/svgs/icons_arrow-right.svg';

import Card from './components/Card';
import TimeCountDown from './components/TimeCountDown';

import './Flashsale.scss';

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

function Flashsale({ data }) {
  // state
  const [swiper, setSwiper] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const [products, setProducts] = useState([]);
  // ref
  const swiperRef = useRef();

  useEffect(() => {
    if (data) {
      setProducts(data.body.items);
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
        <span className="font-poppins">Today&apos;s</span>
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
          breakpoints={breakpointsSwiper}
        >
          {products.length > 0 &&
            products.map((product) => {
              return (
                <SwiperSlide key={product._id}>
                  <Card
                    id={product._id}
                    img={product.cover}
                    typeDiscount={product.discountType}
                    discount={product.discount}
                    name={product.name}
                    sale={product.discountedPrice}
                    price={product.price}
                    count={80}
                    sizes={product.variants}
                    slug={product.slug}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="view-all-product">
        <button
          aria-label="btn"
          type="button"
          className="view-all-product__btn"
        >
          <Link className="font-poppins" href="/">
            View All Products
          </Link>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

Flashsale.propTypes = {
  data: PropTypes.object.isRequired,
};

export default React.memo(Flashsale);
