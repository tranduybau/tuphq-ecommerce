import './Slider.scss'
import Image from 'next/image'
import Link from 'next/link'

//icon
import LogoBanner from '@/svgs/Banner/logo-banner.svg'
import ArrowRight from '@/svgs/Banner/arrow-right.svg'

export default function Slider(props) {
    return (
        <div className="slider-item container">
            <div className="wrapper">
                <div className="slider-item__content">
                    <div className="slider-item__title">
                        <LogoBanner className='logo-banner' />
                        <span className="font-poppins">
                            {props.title}
                        </span>
                    </div>
                    <div className="slider-item__discount">
                        <span className="font-inter">
                            {props.discount}
                        </span>
                    </div>
                    <div className="slider-item__link">
                        <Link className="font-poppins" href="/">Shop Now</Link>
                        <ArrowRight className="arrow-right-icon" />
                    </div>
                </div>
                <div className="slider-item__img">
                    <Image
                        src='/image/Banner/banner.png'
                        alt='banner'
                        fill={true}
                        sizes={'(max-width: 768px) 100vw'}
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}