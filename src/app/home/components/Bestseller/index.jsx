'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Card from './components/Card';
import TimeCountDown from './components/TimeCountDown';

import './Bestseller.scss';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const moduleSwiper = [Pagination, Navigation];
const breakpointsSwiper = {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
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
export default function BestSeller({ data }) {
  let keyId = 0;
  BestSeller.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  };
  const swiperRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div className="bestseller-wrapper container">
      <div className="bestseller-heading">
        <span className="block" />
        <span className="font-poppins">This Month</span>
      </div>
      <div className="bestseller-control">
        <h1 className="font-inter">Best Selling Products</h1>
        <div className="view-all">
          <button type="button" className="btn-view-all">
            <Link href="/" className="btn-view-all__link font-poppins">
              View All
            </Link>
          </button>
        </div>
      </div>
      <div className="product-bs">
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={30}
          modules={moduleSwiper}
          breakpoints={breakpointsSwiper}
        >
          {products &&
            products.map((product) => {
              keyId += 1;
              return (
                <SwiperSlide key={keyId}>
                  <Card
                    id={product.id}
                    img={product.image}
                    name={product.title}
                    sale={product.price * 30}
                    price={product.price}
                    count={product.rating.count}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      <div className="banner-product">
        <div className="banner-product__img">
          <Image
            src="/image/Bestselling/image-bestselling.png"
            alt="best selling"
            fill
            sizes="(max-width: 768px) 100vw"
            quality={80}
          />
        </div>
        <div className="banner-product__text">
          <span className="banner-product__text-categories font-poppins">
            Categories
          </span>
          <span className="banner-product__text-content font-inter">
            Enhance Your Music Experience
          </span>
          <TimeCountDown />
          <button type="button" className="banner-product__btn">
            <Link className="font-poppins" href="/">
              Buy Now
            </Link>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
