/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import { get, setAuthToken } from '@/components/AxiosConfig';

import ArrowLeft from '@/svgs/icons_arrow-left.svg';
import ArrowRight from '@/svgs/icons_arrow-right.svg';

import './OutProduct.scss';

const Card = React.lazy(() => import('./components/Card'));
const LoadingSkeleton = React.lazy(() =>
  import('@/components/LoadingSkeleton')
);

function OutProduct({ data }) {
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef = useRef();
  const [cart, setCart] = useState({});
  const [user, setUser] = useState();

  useEffect(() => {
    const currentUser = Cookies.get('userData')
      ? JSON.parse(Cookies.get('userData'))
      : null;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    const getCart = async () => {
      try {
        if (user) {
          setAuthToken(user?.token);
          const response = await get('/carts/me');
          if (response !== undefined) {
            setCart(response.data);
          }
        }
        return null;
      } catch {
        return null;
      }
    };
    getCart();
  }, [user]);

  const products = useMemo(() => data?.body?.items || [], [data]);
  const breakpointsSwiper = useMemo(
    () => ({
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
    }),
    []
  );

  const handleControlSwiperLeft = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
    setCanGoNext(true);
    if (swiperRef.current.swiper.isBeginning) {
      setCanGoPrev(false);
    }
  }, []);

  const handleControlSwiperRight = useCallback(() => {
    swiperRef.current.swiper.slideNext();
    setCanGoPrev(true);
    if (swiperRef.current.swiper.isEnd) {
      setCanGoNext(false);
    }
  }, []);

  return (
    <div className="ourproduct-wrapper container px-0 font-poppins">
      <div className="today">
        <span className="block" />
        <span>Our Products</span>
      </div>
      <div className="outproduct-control-swiper">
        <h1 className="font-inter">Explore Out Products</h1>
        <div className="btn-swiper">
          <button
            type="button"
            aria-label="button control"
            onClick={handleControlSwiperLeft}
            className={classNames('btn-control-swiper', {
              disabled: !canGoPrev,
            })}
          >
            <ArrowLeft className="arrow-left-icon" />
          </button>
          <button
            type="button"
            aria-label="button control"
            onClick={handleControlSwiperRight}
            className={classNames('btn-control-swiper', {
              disabled: !canGoNext,
            })}
          >
            <ArrowRight className="arrow-right-icon" />
          </button>
        </div>
      </div>
      <div className="product">
        {isLoading ? (
          <LoadingSkeleton className="w-full h-[732px]" />
        ) : (
          <Swiper
            onReachEnd={() => setCanGoPrev(true)}
            onReachBeginning={() => setCanGoPrev(true)}
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={breakpointsSwiper}
          >
            {products.map((product, index) => {
              if (index < 8) {
                const newProduct = products[8 + index];
                return (
                  <SwiperSlide key={index + 1}>
                    <Card
                      id={product._id}
                      className="mb-[60px]"
                      img={product.cover}
                      name={product.name}
                      sale={product.price}
                      count={80}
                      sizes={product.variants}
                      slug={product.slug}
                      cart={cart}
                    />
                    {newProduct && (
                      <SwiperSlide>
                        <Card
                          className={classNames('flex-1')}
                          id={newProduct._id}
                          img={newProduct.cover}
                          name={newProduct.name}
                          sale={newProduct.price}
                          count={80}
                          color
                          sizes={newProduct.variants}
                          slug={newProduct.slug}
                          cart={cart}
                        />
                      </SwiperSlide>
                    )}
                  </SwiperSlide>
                );
              }
              return null;
            })}
          </Swiper>
        )}
      </div>
      <div className="view-all-product">
        <button
          aria-label="btn"
          type="button"
          className="view-all-product__btn"
        >
          <Link href="/">View All Products</Link>
        </button>
      </div>
    </div>
  );
}

OutProduct.propTypes = {
  data: PropTypes.object.isRequired,
};

export default React.memo(OutProduct);
