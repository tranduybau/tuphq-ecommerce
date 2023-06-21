"use client"
import { useEffect, useState } from 'react';
import styles from './WishlistForYou.module.scss'
import WishlistCart from '../components/WishlistCart';
import axios from 'axios';
import Link from 'next/link';

export default function WishlistForYou() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    return (
        <section className={`${styles.wrapper} container`}>
            <div className={`${styles.foryouHeading}`}>
                <div className={`${styles.foryouHeadingTextWrapper}`}>
                    <span className={styles.block} />
                    <span className={`${styles.foryouHeadingText} font-poppins`}>Just For You</span>
                </div>
                <Link href='/' className={`${styles.foryouHeadingBtn} font-poppins`}>See All</Link>
            </div>
            <div className={`${styles.foryouList} grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1  gap-[30px]`}>
                {products.map((product, index) => {
                    const lastIndex = products.length - 1;
                    const showLastFour = index >= lastIndex - 3;
                    const listItemClassName = showLastFour ? styles.foryouListItem : styles.hiddenListItem;
                    return (
                        <div key={index} className={listItemClassName}>
                            <WishlistCart
                                name={product.title}
                                img={product.image}
                                price={product.price}
                                type='foryou'
                                discount={Math.floor(Math.random() * 100) + 1}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}