import Image from 'next/image'
import './Card.scss'
import { useState } from 'react';
import classNames from 'classnames';

import Star from '@/svgs/star.svg'
import HeartSmallIcon from '@/svgs/heart-small.svg'
import QuickViewIcon from '@/svgs/Quick-View.svg'
export default function Card(props) {
    const [active, setActive] = useState(true);

    const handleClick = () => {
        setActive(!active);
    }
    return (
        <div className={`card ${props.className} border-none`}>
            <div className='image'>
                <Image
                    fill={true}
                    src={props.img}
                    alt='product'
                />
                <div className='icon-wrapper'>
                    <span className='heart-small-icon'>
                        <HeartSmallIcon className='card-icon'/>
                    </span>
                    <span className='quick-view-icon'>
                        <QuickViewIcon className='card-icon'/>
                    </span>
                </div>

                <div className='add-card'>
                    <span className='font-poppins'>Add To Card</span>
                </div>
            </div>
            <div className='description'>
                <span className='name font-poppins'>{props.name}</span>

                <div className='description__wrapper'>
                    <div className='rate'>
                        <span className='price-default font-poppins'>${props.sale}</span>


                        <div className='star'>
                            <Star className='text-[20px]' />
                            <Star className='text-[20px]' />
                            <Star className='text-[20px]' />
                            <Star className='text-[20px]' />
                            <Star className='text-[20px]' />
                        </div>

                        <span className='font-poppins count'>({props.count})</span>

                    </div>
                    {props.color && <div className='color'>
                        <button onClick={handleClick} className={classNames({ active: active, 'no-active': !active })}>
                            <span />
                        </button>
                        <button onClick={handleClick} className={classNames({ active: !active, 'no-active': active })}>
                            <span />
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    )
}