"use client"
import classNames from 'classnames';
import styles from './DetailProductItem.module.scss'
import Image from 'next/image';
import { useState } from 'react';

//icon
import StarActive from '@/svgs/DetailProduct/star-active.svg'
import StarNoActive from '@/svgs/DetailProduct/star.svg'
import PlusIcon from '@/svgs/DetailProduct/icon-plus.svg'
import MinusIcon from '@/svgs/DetailProduct/icon-minus.svg'
import WishlistIcon from '@/svgs/DetailProduct/Wishlist.svg'
import DeliveryIcon from '@/svgs/DetailProduct/icon-delivery.svg'
import ReturnIcon from '@/svgs/DetailProduct/Icon-return.svg'
import Link from 'next/link';
import { text } from '@fortawesome/fontawesome-svg-core';

export default function ProductDetailItem() {
    const [quantity, setQuantity] = useState(1)
    const [colorSelected, setColorSeleted] = useState(1)
    const [sizeSelected, setSizeSeleted] = useState(1)

    const handleIncreaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }
    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1)
        }
    }
    return (
        <div className={classNames(styles.wrapper)}>
            <div className={classNames(styles.lineImg)}>
                <div className={classNames(styles.lineItem)}>
                    <Image
                        src='/image/DetailProduct/product-img-2.png'
                        alt='product line'
                        fill={true}
                        size="(max-width: 768px) 100vw"
                        className='min-w-full h-full object-scale-down'
                    />
                </div>
                <div className={classNames(styles.lineItem)}>
                    <Image
                        src='/image/DetailProduct/product-img-3.png'
                        alt='product line'
                        fill={true}
                        size="(max-width: 768px) 100vw"
                        className='min-w-full h-full object-scale-down'
                    />
                </div>
                <div className={classNames(styles.lineItem)}>
                    <Image
                        src='/image/DetailProduct/product-img-4.png'
                        alt='product line'
                        fill={true}
                        size="(max-width: 768px) 100vw"
                        className='min-w-full h-full object-scale-down'
                    />
                </div>
                <div className={classNames(styles.lineItem)}>
                    <Image
                        src='/image/DetailProduct/product-img-5.png'
                        alt='product line'
                        fill={true}
                        size="(max-width: 768px) 100vw"
                        className='min-w-full h-full object-scale-down'
                    />
                </div>
            </div>
            <div className={classNames(styles.mainImg)}>
                <Image
                    src='/image/DetailProduct/product-img.png'
                    alt='product line'
                    fill={true}
                    size="(max-width: 768px) 100vw"
                    className='min-w-full h-full object-scale-down'
                />
            </div>
            <div className={classNames(styles.infor)}>
                <span className={classNames(styles.name, 'font-inter')}>Havic HV G-92 Gamepad</span>
                <div className={classNames(styles.rate)}>
                    <div className={classNames(styles.starWrapper)}>
                        <StarActive className={classNames(styles.star)} />
                        <StarActive className={classNames(styles.star)} />
                        <StarActive className={classNames(styles.star)} />
                        <StarActive className={classNames(styles.star)} />
                        <StarNoActive className={classNames(styles.star)} />
                    </div>
                    <span className={classNames(styles.count, 'font-poppins')}>(150 Reviews)</span>
                    <span className={classNames(styles.stock, 'font-poppins')}>In Stock</span>
                </div>
                <span className={classNames(styles.price, 'font-inter')}>$192.00</span>
                <span className={classNames(styles.description, 'font-poppins')}>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</span>
                <div className={classNames(styles.colors)}>
                    <span className={classNames(styles.colorsText, 'font-inter')}>
                        Colours:
                    </span>
                    <div className={classNames(styles.listColors)}>
                        <button onClick={() => setColorSeleted(1)} className={classNames('flex', { [styles.colorSelected]: colorSelected === 1 })}>
                            <span className={classNames(styles.colorSelect, 'bg-[#A0BCE0]')} />
                        </button>
                        <button onClick={() => setColorSeleted(2)} className={classNames('flex', { [styles.colorSelected]: colorSelected === 2 })}>
                            <span className={classNames(styles.colorSelect, 'bg-[#E07575]')} />
                        </button>
                    </div>
                </div>
                <div className={classNames(styles.size)}>
                    <span className={classNames(styles.sizeText, 'font-inter')}>
                        Size:
                    </span>
                    <div className={classNames(styles.listSize)}>
                        <button onClick={() => { setSizeSeleted(1) }} className={classNames(styles.sizeSelecet, 'font-poppins', { [styles.sizeActive]: sizeSelected === 1 })}>XS</button>
                        <button onClick={() => { setSizeSeleted(2) }} className={classNames(styles.sizeSelecet, 'font-poppins', { [styles.sizeActive]: sizeSelected === 2 })}>S</button>
                        <button onClick={() => { setSizeSeleted(3) }} className={classNames(styles.sizeSelecet, 'font-poppins', { [styles.sizeActive]: sizeSelected === 3 })}>M</button>
                        <button onClick={() => { setSizeSeleted(4) }} className={classNames(styles.sizeSelecet, 'font-poppins', { [styles.sizeActive]: sizeSelected === 4 })}>L</button>
                        <button onClick={() => { setSizeSeleted(5) }} className={classNames(styles.sizeSelecet, 'font-poppins', { [styles.sizeActive]: sizeSelected === 5 })}>XL</button>
                    </div>
                </div>
                <div className={classNames(styles.buy)}>
                    <div className={classNames(styles.quantity)}>
                        <button onClick={handleDecreaseQuantity}>
                            <MinusIcon className={classNames(styles.minusIcon)} />
                        </button>
                        <input disabled type='text' value={quantity} className={classNames(styles.quantityInput)} />
                        <button onClick={handleIncreaseQuantity}>
                            <PlusIcon className={classNames(styles.plusIcon)} />
                        </button>

                    </div>
                    <div className={classNames(styles.buyBtnWrapper)}>
                        <button className={classNames(styles.buyBtn, 'font-poppins')}>Buy Now</button>
                        <button className={classNames(styles.heartBtn)}>
                            <WishlistIcon className={classNames('w-[39px]', 'h-[39px]', 'p-[3px]')} />
                        </button>
                    </div>
                </div>
                <div className={classNames(styles.services, 'font-poppins')}>
                    <div className={classNames(styles.servicesItem)}>
                        <DeliveryIcon className={classNames(styles.servicesIcon)} />
                        <div className={classNames(styles.servicesContentWrapper)}>
                            <span className={classNames(styles.servicesTitle)}>Free Delivery</span>
                            <Link href={'/'} className={classNames(styles.servicesContent)}>Enter your postal code for Delivery Availability</Link>
                        </div>
                    </div>
                    <div className={classNames(styles.servicesItem)}>
                        <ReturnIcon className={classNames(styles.servicesIcon)} />
                        <div className={classNames(styles.servicesContentWrapper)}>
                            <span className={classNames(styles.servicesTitle)}>Return Delivery</span>
                            <span className={classNames('text-[12px]', 'leading-[18px]', 'font-medium', 'text-[#000]', 'mt-[8px]')}>
                                Free 30 Days Delivery Returns.
                                <Link href={'/'} className={classNames(styles.servicesContent)}>Details</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

