/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import classNames from 'classnames';
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

export default function Card({
  id,
  img,
  name,
  sale,
  price,
  count,
  sizes = null,
  slug,
}) {
  const [user, setUser] = useState();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [cart, setCart] = useState({});

  useEffect(() => {
    const getCart = async () => {
      try {
        const userData = Cookies.get('userData')
          ? JSON.parse(Cookies.get('userData'))
          : null;
        if (userData) {
          const headers = {
            Authorization: userData.token,
          };
          const response = await axios.get(
            'https://gmen-admin.wii.camp/api/v1.0/carts/me',
            { headers }
          );
          if (response !== undefined) {
            setCart(response.data);
          }
        }
        return null;
      } catch {
        return 0;
      }
    };
    getCart();
  }, []);

  useEffect(() => {
    const currentUser = Cookies.get('userData')
      ? JSON.parse(Cookies.get('userData'))
      : null;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handlePostApi = async (userToken, formData) => {
    const headers = {
      Authorization: userToken,
    };
    const response = await axios.post(
      'https://gmen-admin.wii.camp/api/v1.0/carts/me/products',
      formData,
      { headers }
    );
    if (response.data) {
      toast.success('Thêm vào giỏ hàng thành công');
      setTimeout(() => {
        router.refresh();
      }, 1000);
    }
  };

  const handlePutApi = async (userToken, formData, ProductId) => {
    const headers = {
      Authorization: userToken,
    };
    const response = await axios.put(
      `https://gmen-admin.wii.camp/api/v1.0/carts/me/product-items/${ProductId}`,
      formData,
      { headers }
    );
    if (response.data) {
      toast.success('Thêm vào giỏ hàng thành công');
      setTimeout(() => {
        router.refresh();
      }, 1000);
    }
  };

  const handleAddToCart = async (data) => {
    try {
      const account = Cookies.get('userData')
        ? JSON.parse(Cookies.get('userData'))
        : null;
      const productId = id;
      if (data.size === undefined) {
        data.size = '';
      }
      const formData = {
        product: productId,
        quantity: 1,
        size: data.size,
      };
      if (account) {
        if (cart) {
          if (cart.body) {
            if (cart.body.products) {
              const existingProduct = cart.body.products.find(
                (productCheck) => {
                  return (
                    (productCheck.product._id === productId &&
                      productCheck.size === data.size) ||
                    (productCheck.product._id === productId &&
                      productCheck.size === null)
                  );
                }
              );
              if (existingProduct) {
                const formPutData = {
                  quantity: existingProduct.quantity + 1,
                };
                handlePutApi(account.token, formPutData, existingProduct._id);
              } else {
                handlePostApi(account.token, formData);
              }
            }
          }
        }
      } else {
        router.push('/signin');
      }
    } catch (error) {
      return null;
    }
    return null;
  };

  const handleAddToWishlist = useCallback(() => {
    const account = user ? JSON.parse(user) : null;
    const productId = id;
    const existingWishlistItems = localStorage.getItem('wishlistItems');
    if (account) {
      if (existingWishlistItems === null) {
        const wishlistItem = { account: account.id, productId: [productId] };
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItem));
        toast.success('Thêm vào danh sách yêu thích thành công');
        setTimeout(() => {
          router.refresh();
        }, 1500);
      } else {
        const existingData = JSON.parse(existingWishlistItems);
        if (existingData.productId.includes(productId)) {
          toast.error('Sản phẩm đã tồn tại trong danh sách yêu thích');
        } else {
          existingData.productId.push(productId);
          localStorage.setItem('wishlistItems', JSON.stringify(existingData));
          toast.success('Đã thêm sản phẩm vào danh sách yêu thích');
          setTimeout(() => {
            router.refresh();
          }, 1500);
        }
      }
    } else {
      router.push('/signin');
    }
  }, [id, router, user]);
  return (
    <div className="card-bs">
      <div className="image lg:max-w-[270px]">
        <Image
          src={img}
          alt="best selling"
          fill
          className="lg:max-w-[270px]"
          sizes="(max-width: 768px) 100vw"
          priority
        />
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
              {sizes.map((size, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={index} value={`${size}`}>
                    {size}
                  </option>
                );
              })}
            </select>
          )}
          <button type="submit" aria-label="Add to cart" className="add-card">
            <span className="font-poppins">Add To Cart</span>
          </button>
        </form>
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
            <div className="star-bs">
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

Card.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sale: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  sizes: PropTypes.array.isRequired,
};
