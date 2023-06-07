import Image from "next/image"
import './Slider.scss'

export default function Slider() {
    return (
        <div className="slider-item">
            <div className='slider-item__content'>
                <div className='slider-item__content-title'>
                    <Image
                        className="apple-icon"
                        width={40}
                        height={49}
                        src='image/logo-banner.svg'
                        alt='logo'
                    ></Image>
                    <span>iPhone 14 Series</span>
                </div>
                <div className='slider-item__discount'>Up to 10% off Voucher</div>
                <div className='slider-item__link'>
                    <a href="#">Shop Now</a>
                    <Image
                        width={24}
                        height={24}
                        src='image/icons arrow-right.svg'
                        alt="arrow-right"
                    ></Image>
                </div>
            </div>
            <Image
                width={496}
                height={352}
                src='image/banner.svg'
                alt='banner'
            ></Image>
        </div>
    )
}