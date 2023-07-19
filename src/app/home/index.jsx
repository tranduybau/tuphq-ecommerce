import React from 'react';

import { get } from '@/components/AxiosConfig';

const Banner = React.lazy(() => import('./components/Banner'));
const Bestseller = React.lazy(() => import('./components/Bestseller'));
const Category = React.lazy(() => import('./components/Category'));
const Featured = React.lazy(() => import('./components/Featured'));
const Flashsale = React.lazy(() => import('./components/Flashsale'));
const OurProduct = React.lazy(() => import('./components/OurProduct'));

const fetchData = async () => {
  try {
    const [productsResponse, slidesResponse, categoriesResponse] =
      await Promise.all([
        get('/products?perPage=20&page=1&sort=1'),
        get('/slides'),
        get('/product-categories'),
      ]);
    return {
      products: productsResponse.data,
      slides: slidesResponse.data,
      categories: categoriesResponse.data,
    };
  } catch (error) {
    return error;
  }
};

const Home = async () => {
  const { products, slides, categories } = await fetchData();
  return (
    <main className="overflow-hidden">
      <Banner data={slides} categories={categories} />
      <Flashsale data={products} />
      <Category />
      <Bestseller data={products} />
      <OurProduct data={products} />
      <Featured />
    </main>
  );
};

export default Home;
