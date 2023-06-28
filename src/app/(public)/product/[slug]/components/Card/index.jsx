import './Card.scss'
import Image from 'next/image'

//icon
import HeartSmallIcon from '@/svgs/heart-small.svg'
import QuickViewIcon from '@/svgs/Quick-View.svg'
import StarIcon from '@/svgs/star.svg'
import Link from 'next/link'

export default function Card(props) {
    return (
        <div className='card-fs lg:max-w-[270px]'>
            <div className='image'>
                <Image
                    src={props.img}
                    alt='product'
                    fill={true}
                    className='lg:max-w-[270px] object-contain'
                    sizes={'(max-width: 768px) 100vw'}
                />
                {props.discount && <span className='card-discount'>
                    <p className='font-poppins'>-{props.discount}</p>
                </span>}

                <div className='icon-wrapper'>
                    <div className='heart-small-icon'>
                        <HeartSmallIcon className="card-icon" />
                    </div>
                    <Link href={`/product/${props.id}`} className='quick-view-icon' >
                        <QuickViewIcon className="card-icon" />
                    </Link>
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
                        <div className='star-fs'>
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