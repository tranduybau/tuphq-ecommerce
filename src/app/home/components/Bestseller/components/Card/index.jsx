import Image from 'next/image'
import './Card.scss'

//icon
import HeartSmallIcon from '@/svgs/heart-small.svg'
import QuickViewIcon from '@/svgs/Quick-View.svg'
import StarIcon from '@/svgs/star.svg'

export default function Card(props) {
    return (
        <div className='card-bs'>
            <div className='image'>
                <Image
                    src={props.img}
                    alt='best selling'
                    fill={true}
                />
                <div className='icon-wrapper'>
                    <div className='heart-small-icon'>
                        <HeartSmallIcon className="card-icon" />
                    </div>
                    <div className='quick-view-icon'>
                        <QuickViewIcon className="card-icon" />
                    </div>
                </div>

                <div className='add-card'>
                    <span className='font-poppins'>Add To Card</span>
                </div>
            </div>
            <div className='description'>
                <div className='name'>
                    <span className='font-poppins'>{props.name}</span>
                </div>

                <div className='description__wrapper'>
                    <div className='price'>
                        <span className='price-sale font-poppins'>${props.sale}</span>
                        <span className='price-default class-poppins'>${props.price}</span>
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