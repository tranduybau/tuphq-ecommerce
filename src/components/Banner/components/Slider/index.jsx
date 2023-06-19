import './Slider.scss'

//icon
import LogoBanner from '@/svgs/logo-banner.svg'
import ArrowRight from '@/svgs/arrow-right.svg'
import Image from 'next/image'

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
                        <a className="font-poppins" href="/">Shop Now</a>
                        <ArrowRight className="arrow-right-icon" />
                    </div>
                </div>
                <div className="slider-item__img">
                    <Image
                        src='/image/banner.png'
                        alt='banner'
                        fill={true}
                    ></Image>
                </div>
            </div>
        </div>
    )
}