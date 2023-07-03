import React from 'react';
import axios from 'axios';

import Banner from './components/Banner';
import Bestseller from './components/Bestseller';
import Category from './components/Category';
import Featured from './components/Featured';
import Flashsale from './components/Flashsale';
// Component
import OutProduct from './components/OurProduct';

import 'react-toastify/dist/ReactToastify.css';
import './Home.scss';

const fetchData = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
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

export default Home;
