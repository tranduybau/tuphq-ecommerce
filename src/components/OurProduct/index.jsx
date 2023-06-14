"use client"
import { useRef, useState } from 'react';
import { Navigation, Pagination, Grid } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import Cart from './components/Cart';
import classNames from "classnames";

import './OutProduct.scss'
import 'swiper/swiper-bundle.css'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function OutProduct() {
    const products = [
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "1",
            sale: "120",
            price: "160",
            count: "88",
        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "2",
            sale: "120",
            price: "160",
            count: "88",

        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "3",
            sale: "120",
            price: "160",
            count: "88",

        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "4",
            sale: "120",
            price: "160",
            count: "88",
        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "5",
            sale: "120",
            price: "160",
            count: "88",
        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "6",
            sale: "120",
            price: "160",
            count: "88",

        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "7",
            sale: "120",
            price: "160",
            count: "88",
        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "8",
            sale: "120",
            price: "160",
            count: "88",

        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "9",
            sale: "120",
            price: "160",
            count: "88",
            color: true,
        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "10",
            sale: "120",
            price: "160",
            count: "88",
            color: true,
        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "11",
            sale: "120",
            price: "160",
            count: "88",
            color: true,
        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "12",
            sale: "120",
            price: "160",
            count: "88",
            color: true,
        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "13",
            sale: "120",
            price: "160",
            count: "88",
            color: true,
        },
        {
            img: "flashsale.svg",
            discount: "40%",
            name: "14",
            sale: "120",
            price: "160",
            count: "88",
            color: true,

        }
    ]
    //state
    const [swiper, setSwiper] = useState(true);
    const [canGoPrev, setCanGoPrev] = useState(false);
    const [canGoNext, setCanGoNext] = useState(true);
    let count = 0;
    //ref
    const swiperRef = useRef()

    const handleControlSwiperLeft = () => {
        swiperRef.current.swiper.slidePrev();
        setCanGoNext(true);
        if (swiper.isBeginning) {
            setCanGoPrev(false);
        }
    }

    const handleControlSwiperRight = () => {
        swiperRef.current.swiper.slideNext();
        setCanGoPrev(true);
        if (swiper.isEnd) {
            setCanGoNext(false);
        }
    }

    const handleSwiper = (swiper) => {
        setSwiper(swiper);
    };


    return (
        <div className="ourproduct-wrapper container">
            <div className='today'>
                <span className='block' />
                <span className="font-poppins">Our Products</span>
            </div>
            <div className='outproduct-control-swiper'>
                <h1 className="font-inter">Explore Out Products</h1>
                <div className='btn-swiper'>
                    <button onClick={handleControlSwiperLeft} className={classNames('btn-control-swiper', { disabled: canGoPrev === false })}>
                        <Image
                            src='image/icons_arrow-left.svg'
                            width={16}
                            height={16}
                            alt="button control swiper"
                        />
                    </button>
                    <button onClick={handleControlSwiperRight} className={classNames('btn-control-swiper', { disabled: canGoNext === false })}>
                        <Image
                            src='image/icons_arrow-right.svg'
                            width={16}
                            height={16}
                            alt="button control swiper"
                        />
                    </button>
                </div>
            </div>
            <div className='product'>
                <Swiper
                    onSwiper={handleSwiper}
                    onReachEnd={() => {
                        setCanGoPrev(true)
                    }}
                    onReachBeginning={() => {
                        setCanGoPrev(true)
                    }}
                    ref={swiperRef}
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Grid, Pagination, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },

                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },

                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }

                    }}>
                    {products.map((product, index) => {
                        let sizeRow = 8;
                        let lengthProduct = Math.ceil(products.length / 2)
                        if (lengthProduct > sizeRow) {
                            sizeRow = lengthProduct
                        }
                        if (count < sizeRow) {
                            const newProduct = products[sizeRow + index]
                            count++
                            return (
                                <SwiperSlide key={index}>
                                    <Cart
                                        className={'mb-[60px]'}
                                        img={product.img}
                                        discount={product.discount}
                                        name={product.name}
                                        sale={product.sale}
                                        price={product.price}
                                        count={product.count}
                                        color={product.color}
                                    />
                                    {newProduct && <SwiperSlide>
                                        <Cart
                                            img={newProduct.img}
                                            discount={newProduct.discount}
                                            name={newProduct.name}
                                            sale={newProduct.sale}
                                            price={newProduct.price}
                                            count={newProduct.count}
                                            color={newProduct.color}
                                        />
                                    </SwiperSlide>

                                    }
                                </SwiperSlide>
                            )
                        }
                    })}
                </Swiper>
            </div>
            <div className="view-all-product">
                <button className="view-all-product__btn">
                    <a className="font-poppins" href="/">View All Products</a>
                </button>
            </div>
        </div>
    )
}