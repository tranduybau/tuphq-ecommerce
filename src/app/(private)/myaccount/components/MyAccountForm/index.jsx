/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import * as yup from 'yup';

import InputForm from '@/components/InputForm';

import styles from './MyAccountForm.module.scss';

const schema = yup.object().shape({
  fname: yup.string().required('First name is required'),
  lname: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  currentPassword: yup.string().required('Current password is required'),
  newPassword: yup.string().required('New password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export default function MyAccountForm() {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fname: '',
      lname: '',
      email: '',
      address: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });
  // eslint-disable-next-line no-unused-vars
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        method="POST"
        className={classNames(styles.wrapper, 'font-poppins')}
      >
        <span className={classNames(styles.heading)}>Edit Your Profile</span>
        <div className={classNames(styles.inputWrapper)}>
          <div className={classNames(styles.item)}>
            <label htmlFor="fname" className={classNames(styles.label)}>
              First Name
            </label>
            <InputForm
              id="fname"
              name="fname"
              className={classNames(styles.input)}
              placeholder="Md"
            />
          </div>
          <div className={classNames(styles.item)}>
            <label htmlFor="lname" className={classNames(styles.label)}>
              Last Name
            </label>
            <InputForm
              id="lname"
              name="lname"
              className={classNames(styles.input)}
              placeholder="Rimel"
            />
          </div>
        </div>
        <div className={classNames(styles.inputWrapper)}>
          <div className={classNames(styles.item)}>
            <label htmlFor="email" className={classNames(styles.label)}>
              Email
            </label>
            <InputForm
              id="email"
              name="email"
              className={classNames(styles.input)}
              placeholder="rimel111@gmail.com"
            />
          </div>
          <div className={classNames(styles.item)}>
            <label htmlFor="address" className={classNames(styles.label)}>
              Address
            </label>
            <InputForm
              id="address"
              name="address"
              className={classNames(styles.input)}
              placeholder="Kingston, 5236, United State"
            />
          </div>
        </div>
        <div className={classNames(styles.inputPassword)}>
          <label htmlFor="currentPassword" className={classNames(styles.label)}>
            Password Changes
          </label>
          <InputForm
            id="currentPassword"
            name="currentPassword"
            className={classNames(styles.input)}
            placeholder="Current Password"
          />
          <InputForm
            name="newPassword"
            className={classNames(styles.input)}
            placeholder="New Password"
          />
          <InputForm
            name="confirmPassword"
            className={classNames(styles.input, 'mb-[24px]')}
            placeholder="Confirm New Password"
          />
        </div>
        <div className={classNames(styles.btnWrapper)}>
          <button className={classNames(styles.btnCancel)} type="button">
            Cancel
          </button>
          <button className={classNames(styles.btnSave)} type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
