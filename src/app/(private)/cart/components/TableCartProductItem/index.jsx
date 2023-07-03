'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import Image from 'next/image';
import PropTypes from 'prop-types';

// icon
import DeleteIcon from '@/svgs/Cart/icon-delete.svg';

import styles from './TableCartProductItem.module.scss';

export default function TableCartProductItem({
  id,
  name,
  img,
  price,
  onTotalChange,
}) {
  TableCartProductItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onTotalChange: PropTypes.func.isRequired,
  };
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  useEffect(() => {
    onTotalChange(price * 1);
  }, []);

  const handleDeleteItem = () => {
    // Gọi hàm onTotalChange để cập nhật giá trị tổng
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const productIdSelected = id;
    const currentUser = Cookies.get('currentUser')
      ? JSON.parse(Cookies.get('currentUser'))
      : null;

    if (currentUser) {
      const { productId } = cartItems; // Lấy mảng productId từ cartItems

      const updatedProductId = productId.filter(
        (item) => item !== productIdSelected
      );

      const updatedCartItems = {
        ...cartItems,
        productId: updatedProductId,
      };

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      toast.success('Đã xóa thành công');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    const newTotal = price * newQuantity;
    setTotal(newTotal);
    onTotalChange(newTotal - price * quantity); // Cập nhật giá trị mới của total
  };

  return (
    <div className={`${styles.wrapper} row mx-0 mt-[40px]`}>
      <div className={`${styles.item} px-0 col font-poppins`}>
        <button type="button" onClick={handleDeleteItem}>
          <DeleteIcon className={styles.deleteIcon} />
        </button>
        <Image
          src={img}
          alt="product item"
          fill
          sizes="(max-width: 768px) 100vw"
          className="object-contain relative max-w-[50px] max-h-[39px]"
        />
        <span>{name}</span>
      </div>
      <div className={`${styles.item} px-0 col font-poppins`}>
        <span>${price.toFixed(2)}</span>
      </div>
      <div
        className={`${styles.item} ${styles.inputWrapper} px-0 col font-poppins`}
      >
        <input
          type="number"
          min={1}
          max={99}
          inputMode="numeric"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className={`${styles.item} px-0 col font-poppins`}>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
