import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

// icon
import ArrowRight from '@/svgs/Banner/arrow-right.svg';

import './Slider.scss';

export default function Slider({ title, discount }) {
  Slider.propTypes = {
    title: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
  };

  return (
    <div className="slider-item container">
      <div className="wrapper">
        <div className="slider-item__content">
          <div className="slider-item__title">
            <Image
              src="/image/Banner/logo-banner.png"
              alt="logo banner"
              width={40}
              height={49}
              quality={80}
            />
            <span className="font-poppins">{title}</span>
          </div>
          <div className="slider-item__discount">
            <span className="font-inter">{discount}</span>
          </div>
          <div className="slider-item__link">
            <Link className="font-poppins" href="/">
              Shop Now
            </Link>
            <ArrowRight className="arrow-right-icon" />
          </div>
        </div>
        <div className="slider-item__img">
          <Image
            src="/image/Banner/banner.png"
            alt="banner"
            fill
            sizes="(max-width: 768px) 100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
