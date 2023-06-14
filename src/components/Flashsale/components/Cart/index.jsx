import './Cart.scss'

//icon
import ProductImg from '@/svgs/flashsale.svg'
import HeartSmallIcon from '@/svgs/heart-small.svg'
import QuickViewIcon from '@/svgs/Quick-View.svg'
import StarIcon from '@/svgs/star.svg'
export default function Cart(props) {
    return (
        <div className='cart-fs'>
            <div className='image'>
                <ProductImg className='image-product' />
                <span className='cart-discount'>
                    <p className='font-poppins'>-{props.discount}</p>
                </span>

                <div className='icon-wrapper'>
                    <HeartSmallIcon className='heart-small-icon'/>
                    <QuickViewIcon className='quick-view-icon'/>
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
                        <div className='star-fs'>
                            <StarIcon className='star'/>
                            <StarIcon className='star'/>
                            <StarIcon className='star'/>
                            <StarIcon className='star'/>
                            <StarIcon className='star'/>
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