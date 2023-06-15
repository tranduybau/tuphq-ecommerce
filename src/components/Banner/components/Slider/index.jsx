import './Slider.scss'

//icon
import LogoBanner from '@/svgs/logo-banner.svg'
import ArrowRight from '@/svgs/arrow-right.svg'
import ProductBanner from '@/svgs/banner.svg'
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
                    <ProductBanner className='product-banner'/>
                </div>
            </div>
        </div>
    )
}