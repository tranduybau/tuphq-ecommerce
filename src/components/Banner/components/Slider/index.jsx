import Image from "next/image"
import './Slider.scss'

export default function Slider(props) {
    return (
        <div className="slider-item container">
            <div className="wrapper">
                <div className="slider-item__content">
                    <div className="slider-item__title">
                        <Image
                            width={40}
                            height={49}
                            src='image/logo-banner.svg'
                            alt="logo banner"
                        />
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
                        <Image
                            width={24}
                            height={24}
                            src='image/arrow-right.svg'
                            alt="arrow right"
                        />
                    </div>
                </div>
                <div className="slider-item__img">
                    <Image
                        src={`image/${props.img}`}
                        alt="banner"
                        fill={true}
                    />
                </div>
            </div>
        </div>
    )
}