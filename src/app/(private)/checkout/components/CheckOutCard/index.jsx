"use client"
import Image from 'next/image'
import styles from './CheckOutCard.module.scss'
import { useEffect } from 'react';
import classNames from 'classnames';

export default function CheckOutCard({ name, img, price, onTotalChange }) {
    useEffect(() => {
        onTotalChange(price);
    }, []);

    return (
        <div className={classNames(styles.wrapper, 'mx-0')} >
            <div className={classNames(styles.item, 'px-0', 'font-poppins')}>
                <Image
                    src={img}
                    alt='product item'
                    fill={true}
                    className={classNames('object-contain', 'relative', 'max-w-[54px]', 'max-h-[54px]')}
                />
                <span>{name}</span>
            </div>
            <div className={classNames(styles.item, 'px-0', 'font-poppins')}>
                <span>${price.toFixed(2)}</span>
            </div>
        </div>
    )
}