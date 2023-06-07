import Image from "next/image"
import './Slider.scss'

export default function Slider() {
    return (
        <div className="slider-item container">
            <div className="wrapper row">
                <div className="slider-item__content col-xl-6 col-lg-7 col-md-6 col-sm-5">
                    <div className="slider-item__title">
                        <Image
                            width={40}
                            height={49}
                            src='image/logo-banner.svg'
                            alt="logo banner"
                        ></Image>
                        <span>iPhone 14 Series</span>
                    </div>
                    <div className="slider-item__discount">
                        <span>Up to 10% off Voucher</span>
                    </div>
                    <div className="slider-item__link">
                        <a href="/">Shop Now</a>
                        <Image

                            width={24}
                            height={24}
                            src='image/arrow-right.svg'
                            alt="arrow right"
                        ></Image>
                    </div>
                </div>
                <div className="slider-item__img col-xl-6 col-lg-5 col-md-6 col-sm-7">
                    <Image
                        src='image/banner.svg'
                        alt="banner"
                        fill={true}
                    ></Image>
                </div>
            </div>
        </div>
    )
}