'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

// icon
import HeartSmallIcon from '@/svgs/heart-small.svg';
import QuickViewIcon from '@/svgs/Quick-View.svg';
import Star from '@/svgs/star.svg';

import './Card.scss';

export default function Card({ id, className, img, name, sale, count, color }) {
  const [active, setActive] = useState(true);
  const [user, setUser] = useState();
  const router = useRouter();

  Card.propTypes = {
    id: PropTypes.number.isRequired,
    className: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    sale: PropTypes.number,
    count: PropTypes.number,
    color: PropTypes.string,
  };
  Card.defaultProps = {
    className: null,
    img: null,
    name: null,
    sale: null,
    count: null,
    color: null,
  };

  useEffect(() => {
    const currentUser = Cookies.get('currentUser');
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  const handleAddToCart = () => {
    const account = user ? JSON.parse(user) : null;
    const productId = id;
    const existingCartItems = localStorage.getItem('cartItems');
    if (account) {
      if (existingCartItems === null) {
        const cartItem = { account: account.id, productId: [productId] };
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
        toast.success('Thêm vào giỏ hàng thành công');
        router.refresh();
      } else {
        const existingData = JSON.parse(existingCartItems);
        if (existingData.productId.includes(productId)) {
          toast.error('Sản phẩm đã tồn tại trong giỏ hàng');
        } else {
          existingData.productId.push(productId);
          localStorage.setItem('cartItems', JSON.stringify(existingData));
          toast.success('Đã thêm sản phẩm vào giỏ hàng');
          router.refresh();
        }
      }
    } else {
      router.push('/signin');
    }
  };

  const handleAddToWishlist = () => {
    const account = user ? JSON.parse(user) : null;
    const productId = id;
    const existingWishlistItems = localStorage.getItem('wishlistItems');
    if (account) {
      if (existingWishlistItems === null) {
        const wishlistItem = { account: account.id, productId: [productId] };
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItem));
        toast.success('Thêm vào danh sách yêu thích thành công');
        router.refresh();
      } else {
        const existingData = JSON.parse(existingWishlistItems);
        if (existingData.productId.includes(productId)) {
          toast.error('Sản phẩm đã tồn tại trong danh sách yêu thích');
        } else {
          existingData.productId.push(productId);
          localStorage.setItem('wishlistItems', JSON.stringify(existingData));
          toast.success('Đã thêm sản phẩm vào danh sách yêu thích');
          router.refresh();
        }
      }
    } else {
      router.push('/signin');
    }
  };
  return (
    <div className={`card ${className} border-none`}>
      <div className="image lg:max-w-[270px]">
        <Image
          fill
          src={img}
          alt="product"
          className="lg:max-w-[270px] object-contain"
          sizes="(max-width: 768px) 100vw"
        />
        <div className="icon-wrapper">
          <button
            type="button"
            onClick={handleAddToWishlist}
            className="heart-small-icon"
          >
            <HeartSmallIcon className="card-icon" />
          </button>
          <Link
            href={`/product/${id}`}
            aria-label="quick view"
            className="quick-view-icon"
          >
            <QuickViewIcon className="card-icon" />
          </Link>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className="add-card"
        >
          <span className="font-poppins">Add To Cart</span>
        </button>
      </div>
      <div className="description">
        <span className="name font-poppins">{name}</span>

        <div className="description__wrapper">
          <div className="rate">
            <span className="price-default font-poppins">${sale}</span>

            <div className="star">
              <Star className="text-[20px]" />
              <Star className="text-[20px]" />
              <Star className="text-[20px]" />
              <Star className="text-[20px]" />
              <Star className="text-[20px]" />
            </div>

            <span className="font-poppins count">({count})</span>
          </div>
          {color && (
            <div className="color">
              <button
                type="button"
                aria-label="color"
                onClick={handleClick}
                className={classNames({
                  active,
                  'no-active': !active,
                })}
              >
                <span />
              </button>
              <button
                type="button"
                aria-label="color"
                onClick={handleClick}
                className={classNames({
                  active: !active,
                  'no-active': active,
                })}
              >
                <span />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
