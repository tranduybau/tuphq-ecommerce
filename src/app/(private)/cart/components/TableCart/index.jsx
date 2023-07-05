'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
// import Cookies from 'js-cookie';
import Link from 'next/link';

import TableCartProductItem from '../TableCartProductItem';

import styles from './TableCart.module.scss';

export default function TableCart() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let getCart;
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const { data } = response;
        setProducts(data);
        getCart(data);
      } catch {
        return 0;
      }
      return null;
    };
    getCart = (productsInput) => {
      const cartItem = localStorage.getItem('cartItems');
      const parsedCartItem = JSON.parse(cartItem);

      if (parsedCartItem && parsedCartItem.productId) {
        const { productId } = parsedCartItem;

        // Tạo mảng mới cho sản phẩm dựa trên productId
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

  const handleTotalChange = useCallback((changeAmount) => {
    setTotal((prevTotal) => prevTotal + changeAmount);
  }, []);

  return (
    <div className={`${styles.wrapper} mx-0`}>
      <ToastContainer />
      <div className={`${styles.heading} mx-0 row`}>
        <span className={`${styles.headingText} px-0 col font-poppins`}>
          Product
        </span>
        <span className={`${styles.headingText} px-0 col font-poppins`}>
          Price
        </span>
        <span className={`${styles.headingText} px-0 col font-poppins`}>
          Quantity
        </span>
        <span className={`${styles.headingText} px-0 col font-poppins`}>
          Subtotal
        </span>
      </div>
      <div className={`${styles.list}`}>
        {products.map((product) => {
          return (
            <TableCartProductItem
              key={product.id}
              id={product.id}
              img={product.image}
              name={product.title}
              price={product.price}
              onTotalChange={handleTotalChange}
            />
          );
        })}
      </div>
      <div className={`${styles.btnWrapper}`}>
        <button aria-label="btn" type="button" className={`${styles.btnTable}`}>
          <Link className={`${styles.btnTableLink} font-poppins`} href="/">
            Return To Shop
          </Link>
        </button>
        <button aria-label="btn" type="button" className={`${styles.btnTable}`}>
          <Link className={`${styles.btnTableLink} font-poppins`} href="/">
            Update Cart
          </Link>
        </button>
      </div>
      <div className={`${styles.checkout}`}>
        <div className={`${styles.coupon}`}>
          <input
            className={`${styles.couponInput}`}
            type="text"
            placeholder="Coupon Code"
          />
          <button
            aria-label="btn"
            type="button"
            className={`${styles.couponBtn} font-poppins`}
          >
            <span>Apply Coupon</span>
          </button>
        </div>
        <div className={`${styles.total} xs:min-w-[320px] sm:min-w-[470px]`}>
          <span className={`${styles.totalTitle} font-poppins`}>
            Cart Total
          </span>
          <div className={`${styles.totalBody}`}>
            <span className={`${styles.totalName} font-poppins`}>Subtotal</span>
            <span className={`${styles.totalPrice} font-poppins`}>
              ${total.toFixed(2)}
            </span>
          </div>
          <div className={`${styles.totalBody}`}>
            <span className={`${styles.totalName} font-poppins`}>Shipping</span>
            <span className={`${styles.totalPrice} font-poppins`}>Free</span>
          </div>
          <div className={`${styles.totalBody} border-b-[transparent]`}>
            <span className={`${styles.totalName} font-poppins`}>Total</span>
            <span className={`${styles.totalPrice} font-poppins`}>
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            aria-label="btn"
            type="button"
            className={`${styles.totalBtn}`}
          >
            <Link
              href="/checkout"
              className={`${styles.totalBtnLink} font-poppins`}
            >
              Procees to checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
