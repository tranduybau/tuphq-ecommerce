'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { get } from '@/components/AxiosConfig';

const Card = React.lazy(() => import('../Card'));

export default function RelatedProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get('/products?perPage=20&page=1&sort=1');
        if (response) {
          setProducts(response.data?.body?.items);
        }
      } catch (error) {
        return 1;
      }
      return null;
    };

    fetchData();
  }, []);

  return (
    <div
      className={classNames(
        'grid',
        'xl:grid-cols-4',
        'md:grid-cols-2',
        'gap-[30px]',
        'md:justify-items-center'
      )}
    >
      {products &&
        products.map((product, index) => {
          if (index < 4) {
            return (
              <Card
                key={product._id}
                id={product._id}
                name={product.name}
                img={product.cover}
                discount={product.dícount}
                price={product.price}
                sale={product.discountedPrice}
                count={20}
                sizes={product.variants}
                slug={product.slug}
              />
            );
          }
          // eslint-disable-next-line react/jsx-no-useless-fragment
          return <></>;
        })}
    </div>
  );
}
