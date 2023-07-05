/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import classNames from 'classnames';
import * as Yup from 'yup';

import InputForm from '@/components/InputForm';

import BkashIcon from '@/svgs/Checkout/Bkash.svg';
import MastercartIcon from '@/svgs/Checkout/Mastercard.svg';
import NagadIcon from '@/svgs/Checkout/Nagad.svg';
// icon
import VisaIcon from '@/svgs/Checkout/Visa.svg';

import CheckOutCard from '../CheckOutCard';

import styles from './CheckOutTable.module.scss';

export default function CheckOutTable() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const schema = Yup.object().shape({
    paymentMethod: Yup.string().required(
      'Bạn phải chọn phương thức thanh toán'
    ),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products', {
        params: {
          limit: 2,
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        return 0;
      });
  }, []);

  const handleTotalChange = useCallback((newTotal) => {
    setTotal((prevTotal) => prevTotal + newTotal);
  }, []);

  const onSubmit = (data) => {
    return data;
  };

  return (
    <FormProvider {...methods}>
      <div className={classNames(styles.wrapper)}>
        <div className={classNames(styles.list)}>
          {products.map((product) => {
            return (
              <div key={product.id} className={classNames(styles.item)}>
                <CheckOutCard
                  name={product.title}
                  price={product.price}
                  img={product.image}
                  onTotalChange={handleTotalChange}
                />
              </div>
            );
          })}
        </div>
        <div className={classNames(styles.cost)}>
          <div className={classNames(styles.costBody)}>
            <span className={classNames(styles.costName, 'font-poppins')}>
              Subtotal
            </span>
            <span className={classNames(styles.costPrice, 'font-poppins')}>
              ${total.toFixed(2)}
            </span>
          </div>
          <div className={`${styles.costBody}`}>
            <span className={classNames(styles.costName, 'font-poppins')}>
              Shipping
            </span>
            <span className={classNames(styles.costPrice, 'font-poppins')}>
              Free
            </span>
          </div>
          <div className={`${styles.costBody}`}>
            <span className={classNames(styles.costName, 'font-poppins')}>
              Total
            </span>
            <span className={classNames(styles.costPrice, 'font-poppins')}>
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
        <form
          className={classNames(styles.pay)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={classNames(styles.type)}>
            <label
              htmlFor="bank"
              className={classNames(styles.payLabel, 'font-poppins')}
            >
              <InputForm
                type="radio"
                name="bank"
                className={classNames(styles.inputRadio)}
                defaultChecked
              />
              Bank
            </label>
            <div className={classNames(styles.listIcon)}>
              <BkashIcon className={classNames(styles.payIcon)} />
              <VisaIcon className={classNames(styles.payIcon)} />
              <MastercartIcon className={classNames(styles.payIcon)} />
              <NagadIcon className={classNames(styles.payIcon)} />
            </div>
          </div>
          <div className={classNames(styles.type)}>
            <label
              htmlFor="cash"
              className={classNames(styles.payLabel, 'font-poppins')}
            >
              <InputForm
                type="radio"
                name="cash"
                className={classNames(styles.inputRadio)}
              />
              Cash on delivery
            </label>
          </div>
          <div className={classNames(styles.coupon)}>
            <InputForm
              name="coupon"
              type="text"
              className={classNames(styles.inputCoupon)}
              placeholder="Apply Coupon"
            />
            <button
              aria-label="btn"
              type="button"
              className={classNames(styles.couponBtn, 'font-poppins')}
            >
              Apply Coupon
            </button>
          </div>
          <button
            aria-label="btn"
            type="submit"
            className={classNames(styles.orderBtn, 'font-poppins')}
          >
            Place Order
          </button>
        </form>
      </div>
    </FormProvider>
  );
}
