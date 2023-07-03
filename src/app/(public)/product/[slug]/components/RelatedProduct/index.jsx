'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';

import Card from '../Card';

export default function RelatedProduct() {
  const [products, setProducts] = useState([]);
  let keyId = 0;
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products', {
        params: {
          limit: 4,
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        return 0;
      });
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
      {products.map((product) => {
        keyId += 1;
        return (
          <Card
            key={keyId}
            name={product.title}
            img={product.image}
            discount={40}
            price={product.price}
            sale={product.price * 40}
            count={20}
          />
        );
      })}
    </div>
  );
}
