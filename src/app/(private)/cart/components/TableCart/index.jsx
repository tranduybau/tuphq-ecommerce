"use client"
import { useCallback, useEffect, useState } from 'react';
import TableCartProductItem from '../TableCartProductItem'
import styles from './TableCart.module.scss'
import axios from 'axios';
import Link from 'next/link';

export default function TableCart() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const { data } = response;

                const randomProducts = getRandomElements(data, 3);
                setProducts(randomProducts);
            } catch (error) {
                console.log('Error:', error);
            }
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        const calculateTotal = () => {
            let newTotal = 0;

            products.forEach((product) => {
                newTotal += product.price;
            });
            return newTotal;
        };

        const newTotal = calculateTotal();
        setTotal(newTotal);
    }, [products])

    const handleTotalChange = useCallback((newTotal) => {
        setTotal((prevTotal) => prevTotal + newTotal);
    }, []);

    const getRandomElements = useCallback((array, n) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }, []);

    return (
        <div className={`${styles.wrapper} mx-0`}>
            <div className={`${styles.heading} mx-0 row`}>
                <span className={`${styles.headingText} px-0 col font-poppins`}>Product</span>
                <span className={`${styles.headingText} px-0 col font-poppins`}>Price</span>
                <span className={`${styles.headingText} px-0 col font-poppins`}>Quantity</span>
                <span className={`${styles.headingText} px-0 col font-poppins`}>Subtotal</span>
            </div>
            <div className={`${styles.list}`}>
                {products.map((product, index) => {
                    return (
                        <TableCartProductItem
                            key={index}
                            img={product.image}
                            name={product.title}
                            price={product.price}
                            onTotalChange={handleTotalChange}
                        />
                    )
                })}
            </div>
            <div className={`${styles.btnWrapper}`}>
                <button className={`${styles.btnTable}`}>
                    <Link className={`${styles.btnTableLink} font-poppins`} href='/'>Return To Shop</Link>
                </button>
                <button className={`${styles.btnTable}`}>
                    <Link className={`${styles.btnTableLink} font-poppins`} href='/'>Update Cart</Link>
                </button>
            </div>
            <div className={`${styles.checkout}`}>
                <div className={`${styles.coupon}`}>
                    <input className={`${styles.couponInput}`} type='text' placeholder='Coupon Code' />
                    <button className={`${styles.couponBtn} font-poppins`}><span>Apply Coupon</span></button>
                </div>
                <div className={`${styles.total}`}>
                    <span className={`${styles.totalTitle} font-poppins`}>Cart Total</span>
                    <div className={`${styles.totalBody}`}>
                        <span className={`${styles.totalName} font-poppins`}>Subtotal</span>
                        <span className={`${styles.totalPrice} font-poppins`}>${total.toFixed(2)}</span>
                    </div>
                    <div className={`${styles.totalBody}`}>
                        <span className={`${styles.totalName} font-poppins`}>Shipping</span>
                        <span className={`${styles.totalPrice} font-poppins`}>Free</span>
                    </div>
                    <div className={`${styles.totalBody}`}>
                        <span className={`${styles.totalName} font-poppins`}>Total</span>
                        <span className={`${styles.totalPrice} font-poppins`}>${total.toFixed(2)}</span>
                    </div>
                    <button className={`${styles.totalBtn}`}>
                        <Link href='/checkout' className={`${styles.totalBtnLink} font-poppins`}>Procees to checkout</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}