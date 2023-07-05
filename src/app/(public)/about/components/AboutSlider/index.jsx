'use client';

import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

import AboutMemberCard from '../AboutMemberCard';

import './AboutSlider.scss';

const members = [
  {
    id: 1,
    img: '/image/About/person01.png',
    name: 'Tom Cruise',
    position: 'Founder & Chairman',
  },
  {
    id: 2,
    img: '/image/About/person02.png',
    name: 'Emma Watson',
    position: 'Managing Director',
  },
  {
    id: 3,
    img: '/image/About/person03.png',
    name: 'Will Smith',
    position: 'Product Designer',
  },
  {
    id: 4,
    img: '/image/About/person03.png',
    name: 'Will Smith',
    position: 'Product Designer',
  },
  {
    id: 5,
    img: '/image/About/person02.png',
    name: 'Emma Watson',
    position: 'Managing Director',
  },
];

const modulesSwiper = [Pagination];
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
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={modulesSwiper}
      pagination
      breakpoints={breakpointsSwiper}
    >
      {members.map((member) => {
        return (
          <SwiperSlide key={member.id}>
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
