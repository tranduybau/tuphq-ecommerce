import React from 'react';
import axios from 'axios';

import './Home.scss';

const Banner = React.lazy(() => import('./components/Banner'));
const Bestseller = React.lazy(() => import('./components/Bestseller'));
const Category = React.lazy(() => import('./components/Category'));
const Featured = React.lazy(() => import('./components/Featured'));
const Flashsale = React.lazy(() => import('./components/Flashsale'));
const OurProduct = React.lazy(() => import('./components/OurProduct'));

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://gmen-admin.wii.camp/api/v1.0/products?perPage=20&page=1&sort=1'
    );
    return response.data;
  } catch (error) {
    return 1;
  }
};

const Home = async () => {
  const products = await fetchData();
  return (
    <main className="home-main">
      <Banner />
      <Flashsale data={products} />
      <Category />
      <Bestseller data={products} />
      <OurProduct data={products} />
      <Featured />
    </main>
  );
};

export default React.memo(Home);
