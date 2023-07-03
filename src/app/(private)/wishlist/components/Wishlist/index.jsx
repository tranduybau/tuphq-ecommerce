'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import WishlistCard from '../WishlistCard';

// swiper css
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import styles from './Wishlist.module.scss';

const modulesSwiper = [Pagination, Navigation];
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
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

SwiperCore.use([Navigation, Pagination]);

export default function Wishlist() {
  let keyId = 0;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let getWishlist;
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const { data } = response;
        setProducts(data);
        getWishlist(data);
      } catch {
        return 0;
      }
      return 0;
    };
    getWishlist = (productsInput) => {
      const wishlistItem = localStorage.getItem('wishlistItems');
      const parsedWishlistItem = JSON.parse(wishlistItem);
      if (parsedWishlistItem && parsedWishlistItem.productId) {
        const { productId } = parsedWishlistItem;
        const filteredProducts = productsInput.filter((product) =>
          productId.includes(product.id)
        );
        setProducts(filteredProducts);
      } else {
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className={`${styles.wrapper} container`}>
      <ToastContainer />
      <div className={`${styles.wishlistHeading}`}>
        <span className={`${styles.wishlistHeadingText} font-poppins`}>
          Wishlist ({products.length})
        </span>
        <button
          type="button"
          className={`${styles.wishlistHeadingBtn} font-poppins`}
        >
          Move All To Bag
        </button>
      </div>
      <div className={`${styles.wishlistList}`}>
        <Swiper
          className={`${styles.swiperContainer}`}
          slidesPerView={4}
          spaceBetween={30}
          modules={modulesSwiper}
          breakpoints={breakpointsSwiper}
        >
          {products.map((product) => {
            keyId += 1;
            return (
              <SwiperSlide key={keyId}>
                <WishlistCard
                  id={product.id}
                  name={product.title}
                  img={product.image}
                  price={product.price}
                  type="wishlist"
                  discount={Math.floor(Math.random() * 100) + 1}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
