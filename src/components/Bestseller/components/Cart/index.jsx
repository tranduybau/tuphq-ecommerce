import Image from 'next/image'
import './Cart.scss'
import { ReactSVG } from 'react-svg'

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
                <div className='icon-wrapper'>
                    <span className='heart-small-icon__wrapper'>
                        <ReactSVG
                            src='image/heart-small.svg'
                            className='heart-small-icon'
                        ></ReactSVG>
                    </span>
                    <span className='quick-view-icon__wrapper'>
                        <ReactSVG
                            src='image/Quick-View.svg'
                            className='quick-view-icon'
                        ></ReactSVG>
                    </span>
                </div>
            </div>
            <div className='description'>
                <div className='name'>
                    <span className='font-poppins'>{props.name}</span>
                    
                </div>
                <div className='price'>
                    <span className='price-sale font-poppins'>${props.sale}</span>
                    <spab className='price-default font-poppins'>${props.price}</spab>
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
                    <div className='count font-poppins'>({props.count})</div>
                </div>  
            </div>
        </div>
    )
}