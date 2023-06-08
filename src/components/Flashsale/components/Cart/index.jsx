import Image from 'next/image'
import './Cart.scss'

export default function Cart(props) {
    return (
        <div className='cart'>
            <div className='image'>
                <Image
                    width={270}
                    height={250}
                    src={`image/${props.img}`}
                    alt='product'
                ></Image>
                <span className='cart-discount'>
                    <p>-{props.discount}</p>
                </span>
                <div className='icon-wrapper'>
                    <span className='heart-small-icon'>
                        <Image
                            src='image/heart-small.svg'
                            width={24}
                            height={24}
                            alt='heart small'
                        ></Image>
                    </span>
                    <span className='quick-view-icon'>
                        <Image
                            src='image/Quick-View.svg'
                            width={24}
                            height={24}
                            alt='quick view'
                        ></Image>
                    </span>
                </div>
            </div>
            <div className='description'>
                <div className='name'>
                    <span>{props.name}</span>
                    
                </div>
                <div className='price'>
                    <span className='price-sale'>${props.sale}</span>
                    <spab className='price-default'>${props.price}</spab>
                </div>
                <div className='rate'>
                    <div className='star'>
                        <Image
                            width={20}
                            height={20}
                            alt='star'
                            src='image/star.svg'
                        ></Image>
                        <Image
                            width={20}
                            height={20}
                            alt='star'
                            src='image/star.svg'
                        ></Image>
                        <Image
                            width={20}
                            height={20}
                            alt='star'
                            src='image/star.svg'
                        ></Image>
                        <Image
                            width={20}
                            height={20}
                            alt='star'
                            src='image/star.svg'
                        ></Image>
                        <Image
                            width={20}
                            height={20}
                            alt='star'
                            src='image/star.svg'
                        ></Image>
                    </div>
                    <div className='count'>({props.count})</div>
                </div>  
            </div>
        </div>
    )
}