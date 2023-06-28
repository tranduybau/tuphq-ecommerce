"use client"
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';

export default function RelatedProduct() {
    const [products, setProducts] = useState([])

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
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={classNames('grid', 'xl:grid-cols-4', 'md:grid-cols-2', 'gap-[30px]', 'md:justify-items-center')}>
            {products.map((product, index) => {
                return (
                    <Card
                        key={index}
                        name={product.title}
                        img={product.image}
                        discount={40}
                        price={product.price}
                        sale={product.price * 40}
                        count={20}
                    />)
            })}
        </div>
    );
}

