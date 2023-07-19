import React from 'react';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import ArrowRight from '@/svgs/Banner/arrow-right.svg';

function Slider({ img, title, discount }) {
  return (
    <div className="slider-item relative container font-poppins px-0 xs:w-full sm:w-[892px] min-h-[344px]">
      <div className="w-full h-full flex xs:flex-col sm:flex-row justify-between absolute after:content-[''] after:absolute after:w-full after:h-full after:bg-[#0000006a]">
        <div className="justify-center flex flex-col z-[2] gap-[20px] pt-[58px] pb-[47px] xl:ml-[64px] lg:ml-[32px] lg:w-[50%] xs:ml-[12px] xs:w-full xs:gap-[8px] xs:py-[4px] xs:px-0">
          <div className="relative flex items-center">
            <span className="not-italic font-normal text-[16px] leading-[24px] text-center text-[#fafafa] lg:text-[14px] lg:leading-[16px]">
              {title}
            </span>
          </div>
          <div className="slider-item__discount text-[#fff] max-w-[294px] overflow-hidden max-h-[120px]">
            <span className="xs:max-w-full sm:max-w-none font-inter not-italic font-semibold lg:text-[48px] lg:leading-[60px] tracking-[0.04em] text-[#fafafa] xs:text-[24px] xs:leading-[28px] md:text-[36px] md:leading-[40px]">
              {discount}
            </span>
          </div>
          <div className="slider-item__link flex">
            <Link
              href="/"
              className="not-italic font-medium xs:text-[12px] xs:leading-[20px] text-[16px] leading-[24px] text-center text-[#fafafa] mr-[8px]"
            >
              Shop Now
            </Link>
            <ArrowRight className="w-[24px] h-[24px]" />
          </div>
        </div>
        <LazyLoad className="absolute h-full w-full">
          <Image
            src={img}
            alt="banner"
            fill
            sizes="(max-width: 768px) 100vw"
            priority
            className="xl:w-[892px] h-[344px]"
          />
        </LazyLoad>
      </div>
    </div>
  );
}

Slider.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
};

export default React.memo(Slider);
