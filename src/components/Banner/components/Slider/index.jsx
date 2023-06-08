import Image from "next/image"
import './Slider.scss'

export default function Slider(props) {
    return (
        <div className="slider-item container">
            <div className="wrapper flex row">
                <div className="slider-item__content col-xl-6 col-lg-7 col-md-6 col-sm-5 col-5">
                    <div className="slider-item__title">
                        <Image
                            width={40}
                            height={49}
                            src='image/logo-banner.svg'
                            alt="logo banner"
                        ></Image>
                        <span>
                        {props.title}
                        </span>
                    </div>
                    <div className="slider-item__discount">
                        <span>
                        {props.discount}
                        </span>
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
                <div className="slider-item__img col-xl-6 col-lg-5 col-md-6 col-sm-7 col-7">
                    <Image
                        src={`image/${props.img}`}
                        alt="banner"
                        fill={true}
                    ></Image>
                </div>
            </div>
        </div>
    )
}