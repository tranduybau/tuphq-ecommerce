'use client';

import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import SwiperCore, { Grid, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// icon
import ArrowLeft from '@/svgs/icons_arrow-left.svg';
import ArrowRight from '@/svgs/icons_arrow-right.svg';

import Card from './components/Card';

import './OutProduct.scss';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const modulesSwiper = [Grid, Pagination, Navigation];
const breakpointsSwiper = {
  320: {
    slidesPerView: 1,
    spaceBetween: 40,
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

SwiperCore.use(modulesSwiper);

export default function OutProduct({ data }) {
  OutProduct.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  };
  // state
  const [swiper, setSwiper] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const [products, setProducts] = useState([]);

  let count = 0;
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
    <div className="ourproduct-wrapper container">
      <div className="today">
        <span className="block" />
        <span className="font-poppins">Our Products</span>
      </div>
      <div className="outproduct-control-swiper">
        <h1 className="font-inter">Explore Out Products</h1>
        <div className="btn-swiper">
          <button
            type="button"
            aria-label="button control"
            onClick={handleControlSwiperLeft}
            className={classNames('btn-control-swiper', {
              disabled: canGoPrev === false,
            })}
          >
            <ArrowLeft className="arrow-left-icon" />
          </button>
          <button
            type="button"
            aria-label="button control"
            onClick={handleControlSwiperRight}
            className={classNames('btn-control-swiper', {
              disabled: canGoNext === false,
            })}
          >
            <ArrowRight className="arrow-right-icon" />
          </button>
        </div>
      </div>
      <div className="product">
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
          modules={modulesSwiper}
          breakpoints={breakpointsSwiper}
        >
          {products.map((product, index) => {
            let sizeRow = 8;
            const lengthProduct = Math.ceil(products.length / 2);
            if (lengthProduct > sizeRow) {
              sizeRow = lengthProduct;
            }
            if (count < sizeRow) {
              const newProduct = products[sizeRow + index];
              count += 1;
              return (
                <SwiperSlide key={count}>
                  <Card
                    id={product.id}
                    className="mb-[60px]"
                    img={product.image}
                    discount={product.discount}
                    name={product.title}
                    sale={product.price * 40}
                    price={product.price}
                    count={product.rating.count}
                  />
                  {newProduct && (
                    <SwiperSlide>
                      <Card
                        id={newProduct.id}
                        img={newProduct.image}
                        discount={newProduct.discount}
                        name={newProduct.title}
                        sale={newProduct.price * 40}
                        price={newProduct.price}
                        count={newProduct.rating.count}
                        color
                      />
                    </SwiperSlide>
                  )}
                </SwiperSlide>
              );
            }
            return null;
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
