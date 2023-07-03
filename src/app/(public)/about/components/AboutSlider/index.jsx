'use client';

import React from 'react';
import SwiperCore, { Grid, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AboutMemberCard from '../AboutMemberCard';

import './AboutSlider.scss';
// swiper css
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const members = [
  {
    img: '/image/About/person01.png',
    name: 'Tom Cruise',
    position: 'Founder & Chairman',
  },
  {
    img: '/image/About/person02.png',
    name: 'Emma Watson',
    position: 'Managing Director',
  },
  {
    img: '/image/About/person03.png',
    name: 'Will Smith',
    position: 'Product Designer',
  },
  {
    img: '/image/About/person03.png',
    name: 'Will Smith',
    position: 'Product Designer',
  },
  {
    img: '/image/About/person02.png',
    name: 'Emma Watson',
    position: 'Managing Director',
  },
];

const modulesSwiper = [Grid, Pagination, Navigation];
const breakpointsSwiper = {
  320: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  576: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  992: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

SwiperCore.use(modulesSwiper);

export default function AboutSlider() {
  let keyId = 0;
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={modulesSwiper}
      pagination
      breakpoints={breakpointsSwiper}
    >
      {members.map((member) => {
        keyId += 1;
        return (
          <SwiperSlide key={keyId}>
            <AboutMemberCard
              img={member.img}
              name={member.name}
              position={member.position}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
