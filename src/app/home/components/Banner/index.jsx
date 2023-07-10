import React from 'react';

import SidebarBanner from './components/Sidebar';
import SwiperSlider from './components/SwiperSlider';

import './Banner.scss';

function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="banner container flex">
        <SidebarBanner />
        <SwiperSlider />
      </div>
    </div>
  );
}

export default React.memo(Banner);
