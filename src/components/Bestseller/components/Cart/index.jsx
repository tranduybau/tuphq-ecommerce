import Image from 'next/image'
import './Cart.scss'

export default function Cart(props) {
    return (
        <div className='cart-bs'>
            <div className='image'>
                <Image
                    width={500}
                    height={500}
                    src={`image/${props.img}`}
                    alt='product'
                />
                <div className='icon-wrapper'>
                    <span className='heart-small-icon'>
                        <Image
                            src='image/heart-small.svg'
                            width={24}
                            height={24}
                            alt='heart small'
                        />
                    </span>
                    <span className='quick-view-icon'>
                        <Image
                            src='image/Quick-View.svg'
                            width={24}
                            height={24}
                            alt='quick view'
                        />
                    </span>
                </div>

                <div className='add-cart'>
                    <span className='font-poppins'>Add To Cart</span>
                </div>
            </div>
            <div className='description'>
                <div className='name'>
                    <span className='font-poppins'>{props.name}</span>
                </div>

                <div className='description__wrapper'>
                    <div className='price'>
                        <span className='price-sale font-poppins'>${props.sale}</span>
                        <spab className='price-default class-poppins'>${props.price}</spab>
                    </div>
    
                    <div className='rate'>
                        <div className='star-bs'>
                            <Image
                                width={20}
                                height={20}
                                alt='star'
                                src='image/star.svg'
                            />
                            <Image
                                width={20}
                                height={20}
                                alt='star'
                                src='image/star.svg'
                            />
                            <Image
                                width={20}
                                height={20}
                                alt='star'
                                src='image/star.svg'
                            />
                            <Image
                                width={20}
                                height={20}
                                alt='star'
                                src='image/star.svg'
                            />
                            <Image
                                width={20}
                                height={20}
                                alt='star'
                                src='image/star.svg'
                            />
                        </div>
                        <div className='count'>(
                            <span className='font-poppins'>{props.count}</span>)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}