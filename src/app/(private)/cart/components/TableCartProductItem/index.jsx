"use client"
import Image from 'next/image'
import styles from './TableCartProductItem.module.scss'
import { useState } from 'react';

export default function TableCartProductItem({ name, img, price, onTotalChange }) {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price);
  
    const handleQuantityChange = (event) => {
      const newQuantity = parseInt(event.target.value);
      setQuantity(newQuantity);
      const newTotal = price * newQuantity;
      setTotal(newTotal);
      onTotalChange(newTotal - (price * quantity)); // Cập nhật giá trị mới của total
    };

    return (
        <div className={`${styles.wrapper} row mx-0 mt-[40px]`}>
            <div className={`${styles.item} px-0 col font-poppins`}>
                <Image
                    src={img}
                    alt='product item'
                    fill={true}
                    className='object-contain relative max-w-[50px] max-h-[39px]'
                />
                <span>{name}</span>
            </div>
            <div className={`${styles.item} px-0 col font-poppins`}>
                <span>${price.toFixed(2)}</span>
            </div>
            <div className={`${styles.item} ${styles.inputWrapper} px-0 col font-poppins`}>
                <input type="number" min={1} max={99} inputMode="numeric" value={quantity} onChange={handleQuantityChange} />
            </div>
            <div className={`${styles.item} px-0 col font-poppins`}>
                <span>${total.toFixed(2)}</span>
            </div>
        </div>
    )
}