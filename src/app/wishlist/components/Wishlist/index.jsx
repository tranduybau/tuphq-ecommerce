"use client"
import styles from './Wishlist.module.scss'

import WishlistCart from '../components/WishlistCart';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import axios from 'axios';

//swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);


export default function Wishlist() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    return (
        <section className={`${styles.wrapper} container`}>
            <div className={`${styles.wishlistHeading}`}>
                <span className={`${styles.wishlistHeadingText} font-poppins`}>Wishlist (4)</span>
                <button className={`${styles.wishlistHeadingBtn} font-poppins`}>Move All To Bag</button>
            </div>
            <div className={`${styles.wishlistList}`}>
                <Swiper
                    className={`${styles.swiperContainer}`}
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },

                        576: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }

                    }}>
                    {products.map((product, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <WishlistCart 
                                    name={product.title}
                                    img={product.image}
                                    price={product.price}
                                    type='wishlist'
                                    discount={Math.floor(Math.random() * 100) + 1}
                                />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>

        </section>
    )
}