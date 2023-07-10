import React from 'react';
import axios from 'axios';

import Banner from './components/Banner';
import Bestseller from './components/Bestseller';
import Category from './components/Category';
import Featured from './components/Featured';
import Flashsale from './components/Flashsale';
import OutProduct from './components/OurProduct';

import './Home.scss';

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
      <OutProduct data={products} />
      <Featured />
    </main>
  );
};

export default React.memo(Home);
