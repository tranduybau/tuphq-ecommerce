/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */

import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import LazyLoad from 'react-lazyload';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

import { post, put, setAuthToken } from '@/components/AxiosConfig';

import HeartSmallIcon from '@/svgs/heart-small.svg';
import QuickViewIcon from '@/svgs/Quick-View.svg';
import StarIcon from '@/svgs/star.svg';

import './Card.scss';

function Card({
  id,
  img,
  name,
  sale,
  price,
  count,
  sizes = null,
  slug = null,
  cart,
}) {
  const [user, setUser] = useState();
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const currentUser = Cookies.get('userData')
      ? JSON.parse(Cookies.get('userData'))
      : null;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleAddToCart = useCallback(
    async (data) => {
      const handlePostApi = async (userToken, formData) => {
        setAuthToken(userToken);
        const response = await post('/carts/me/products', formData);
        if (response.data) {
          toast.success('Thêm vào giỏ hàng thành công');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      };

      const handlePutApi = async (userToken, formData, ProductId) => {
        setAuthToken(userToken);
        const response = await put(
          `/carts/me/product-items/${ProductId}`,
          formData
        );
        if (response.data) {
          toast.success('Thêm vào giỏ hàng thành công');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      };
      try {
        const productId = id;
        if (!data.size) {
          data.size = '';
        }
        const formData = {
          product: productId,
          quantity: 1,
          size: data.size,
        };
        if (user) {
          if (cart && cart.body && cart.body.products) {
            const existingProduct = cart.body.products.find(
              (productCheck) =>
                (productCheck.product._id === productId &&
                  productCheck.size === data.size) ||
                (productCheck.product._id === productId &&
                  productCheck.size === null)
            );
            if (existingProduct) {
              const formPutData = {
                quantity: existingProduct.quantity + 1,
              };
              handlePutApi(user.token, formPutData, existingProduct._id);
            } else {
              handlePostApi(user.token, formData);
            }
          }
        } else {
          router.push('/signin');
        }
      } catch (error) {
        return null;
      }
      return null;
    },
    [cart, id, router, user]
  );

  const handleAddToWishlist = useCallback(() => {
    const productId = id;
    const existingWishlistItems = localStorage.getItem('wishlistItems');

    if (user) {
      if (existingWishlistItems === null) {
        const wishlistItem = { [user.token]: [productId] };
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItem));
        toast.success('Thêm vào danh sách yêu thích thành công');
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        const existingData = JSON.parse(existingWishlistItems);
        if (existingData.hasOwnProperty(user.token)) {
          if (existingData[user.token].includes(productId)) {
            toast.error('Sản phẩm đã tồn tại trong danh sách yêu thích');
          } else {
            existingData[user.token].push(productId);
            localStorage.setItem('wishlistItems', JSON.stringify(existingData));
            toast.success('Đã thêm sản phẩm vào danh sách yêu thích');
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
        } else {
          existingData[user.token] = [productId];
          localStorage.setItem('wishlistItems', JSON.stringify(existingData));
          toast.success('Thêm vào danh sách yêu thích thành công');
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      }
    } else {
      router.push('/signin');
    }
  }, [id, router, user]);

  return (
    <div className="card-bs font-poppins">
      <div className="image lg:max-w-[270px]">
        <LazyLoad className="absolute h-full w-full">
          <Image
            src={img}
            alt="best selling"
            fill
            className="lg:max-w-[270px]"
            sizes="(max-width: 768px) 100vw"
            priority
          />
        </LazyLoad>
        <div className="icon-wrapper">
          <button
            aria-label="btn"
            type="button"
            onClick={handleAddToWishlist}
            className="heart-small-icon"
          >
            <HeartSmallIcon className="card-icon" />
          </button>
          <Link
            href={`/product/${slug}`}
            aria-label="quick view"
            className="quick-view-icon"
          >
            <QuickViewIcon className="card-icon" />
          </Link>
        </div>

        <form
          className={classNames(
            'absolute',
            'flex',
            'flex-col',
            'items-center',
            'bottom-0',
            'w-full'
          )}
          onSubmit={handleSubmit(handleAddToCart)}
        >
          {sizes && sizes[0] !== null && (
            <select
              className={classNames(
                'relative',
                'text-[28px]',
                'h-[36px]',
                'shadow-sm',
                'w-[80%]'
              )}
              {...register('size')}
            >
              {sizes.map((size, index) => (
                <option key={index} value={`${size}`}>
                  {size}
                </option>
              ))}
            </select>
          )}
          <button type="submit" aria-label="Add to cart" className="add-card">
            <span>Add To Cart</span>
          </button>
        </form>
      </div>
      <div className="description">
        <div className="name">
          <span>{name}</span>
        </div>

        <div className="description__wrapper">
          <div className="price">
            <span className="price-sale">${sale}</span>
            <span className="price-default">${price}</span>
          </div>

          <div className="rate">
            <div className="star-bs">
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
            </div>
            <div className="count">
              (<span>{count}</span>)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sale: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  sizes: PropTypes.array,
  cart: PropTypes.object.isRequired,
};

export default React.memo(Card);
