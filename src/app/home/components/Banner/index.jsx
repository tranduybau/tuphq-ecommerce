import React from 'react';

import './Banner.scss';

const SidebarBanner = React.lazy(() => import('./components/Sidebar'));
const SwiperSlider = React.lazy(() => import('./components/SwiperSlider'));

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
