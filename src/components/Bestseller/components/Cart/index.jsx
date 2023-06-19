import Image from 'next/image'
import './Cart.scss'

//icon
import HeartSmallIcon from '@/svgs/heart-small.svg'
import QuickViewIcon from '@/svgs/Quick-View.svg'
import StarIcon from '@/svgs/star.svg'
export default function Cart(props) {
    return (
        <div className='cart-bs'>
            <div className='image'>
                <Image
                    src={props.img}
                    alt='best selling'
                    fill={true}
                ></Image>
                <div className='icon-wrapper'>
                    <div className='heart-small-icon'>
                    <HeartSmallIcon className="cart-icon"/>
                    </div>
                    <div className='quick-view-icon'>
                    <QuickViewIcon className="cart-icon"/></div>
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
                            <StarIcon className='star' />
                            <StarIcon className='star' />
                            <StarIcon className='star' />
                            <StarIcon className='star' />
                            <StarIcon className='star' />
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