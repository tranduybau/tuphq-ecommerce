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

export default function Banner() {
    return (
        <div className="banner-wrapper">
            <div className="banner container flex">
                <div className="sidebar flex-auto ">
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
                        pagination={{ clickable: true }}>
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