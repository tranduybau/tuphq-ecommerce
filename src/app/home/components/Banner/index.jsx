"use client"
import "./Banner.scss"
import Slider from "./components/Slider";;
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//icon
import DropdownRight from '@/svgs/DropDown-right.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import classNames from "classnames";

export default function Banner() {
    const [isBarsOpen, setIsBarsOpen] = useState(false);

    const toggleBars = () => {
        console.log(isBarsOpen)
        setIsBarsOpen(!isBarsOpen);
    };
    return (
        <div className="banner-wrapper">
            <div className="banner container flex">
                <button onClick={toggleBars} className="fa-bars-icon">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className={classNames('sidebar', 'flex-auto', {showBars: isBarsOpen === true})}>
                    <ul className="sidebar__menu ">
                        <li className="sidebar-item sp-bw">
                            <span className="font-poppins">Woman's Fashion</span>
                            <DropdownRight className="dropdown-right-icon" />
                        </li>
                        <li className="sidebar-item sp-bw">
                            <span className="font-poppins">Men's Fashion</span>
                            <DropdownRight className="dropdown-right-icon" />
                        </li>
                        <li className="sidebar-item">
                            <span className="font-poppins">Electronics</span>
                        </li>
                        <li className="sidebar-item">
                            <span className="font-poppins">Home & Lifestyle</span>
                        </li>
                        <li className="sidebar-item">
                            <span className="font-poppins">Medicine</span>
                        </li>
                        <li className="sidebar-item">
                            <span className="font-poppins">Sports & Outdoor</span>
                        </li>
                        <li className="sidebar-item">
                            <span className="font-poppins">Baby"s & Toys</span>
                        </li>
                        <li className="sidebar-item">
                            <span className="font-poppins">Groceries & Pets</span>
                        </li>
                        <li className="sidebar-item">
                            <span className="font-poppins">Health & Beauty</span>
                        </li>
                    </ul>
                </div>
                <div className="slider flex-auto ">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },

                            576: {
                                slidesPerView: 1,
                                spaceBetween: 30
                            },

                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40
                            },
                            992: {
                                slidesPerView: 1,
                                spaceBetween: 40
                            },
                            1200: {
                                slidesPerView: 1,
                                spaceBetween: 50
                            }

                        }}>
                        <SwiperSlide>
                            <Slider
                                title="iPhone 14 Series"
                                discount="Up to 10% off Voucher"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slider
                                title="iPhone 14 Series"
                                discount="Up to 10% off Voucher"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slider
                                title="iPhone 14 Series"
                                discount="Up to 10% off Voucher"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}