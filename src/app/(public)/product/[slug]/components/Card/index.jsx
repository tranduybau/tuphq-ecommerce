import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

// icon
import HeartSmallIcon from '@/svgs/heart-small.svg';
import QuickViewIcon from '@/svgs/Quick-View.svg';
import StarIcon from '@/svgs/star.svg';

import './Card.scss';

export default function Card({ id, img, discount, name, sale, price, count }) {
  Card.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sale: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  };
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    const currentUser = Cookies.get('currentUser');
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

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
    <div className="card-fs lg:max-w-[270px]">
      <div className="image">
        <Image
          src={img}
          alt="product"
          fill
          className="lg:max-w-[270px] object-contain"
          sizes="(max-width: 768px) 100vw"
        />
        {discount && (
          <span className="card-discount">
            <p className="font-poppins">-{discount}</p>
          </span>
        )}

        <div className="icon-wrapper">
          <button
            type="button"
            onClick={handleAddToWishlist}
            className="heart-small-icon"
          >
            <HeartSmallIcon className="card-icon" />
          </button>
          <Link href={`/product/${id}`} className="quick-view-icon">
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
        <div className="name">
          <span className="font-poppins">{name}</span>
        </div>

        <div className="description__wrapper">
          <div className="price">
            <span className="price-sale font-poppins">${sale}</span>
            <span className="price-default class-poppins">${price}</span>
          </div>

          <div className="rate">
            <div className="star-fs">
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
            </div>
            <div className="count">
              (<span className="font-poppins">{count}</span>)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
