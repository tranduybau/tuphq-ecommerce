/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import Cookies from 'js-cookie';
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
  const [user, setUser] = useState();
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
  const { setValue } = methods;

  const updateInputValue = (fieldName, newValue) => {
    setValue(fieldName, newValue);
  };

  useEffect(() => {
    const currentUser = Cookies.get('currentUser')
      ? JSON.parse(Cookies.get('currentUser'))
      : null;
    if (currentUser) {
      setUser(currentUser);
      setValue('fname', currentUser.name ? currentUser.name.firstname : '');
      setValue('lname', currentUser.name ? currentUser.name.lastname : '');
      setValue('email', currentUser.email || '');
      setValue(
        'address',
        currentUser.address
          ? `${currentUser.address.street}, ${currentUser.address.number}, ${currentUser.address.city}`
          : ''
      );
    }
  }, [setValue]);

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
              placeholder={user && user.name ? user.name.firstname : ''}
              defaultValues={user && user.name ? user.name.firstname : ''}
              onChange={(event) =>
                updateInputValue('fname', event.target.value)
              }
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
              placeholder={user && user.name ? user.name.lastname : ''}
              defaultValues={user && user.name ? user.name.lastname : ''}
              onChange={(event) =>
                updateInputValue('lname', event.target.value)
              }
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
              placeholder={user ? user.email : ''}
              defaultValues={user ? user.email : ''}
              onChange={(event) =>
                updateInputValue('email', event.target.value)
              }
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
              placeholder={
                user && user.address
                  ? `${user.address.street}, ${user.address.number}, ${user.address.city}`
                  : ''
              }
              defaultValues={
                user && user.address
                  ? `${user.address.street}, ${user.address.number}, ${user.address.city}`
                  : ''
              }
              onChange={(event) =>
                updateInputValue('address', event.target.value)
              }
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
          <button
            aria-label="btn"
            className={classNames(styles.btnCancel)}
            type="button"
          >
            Cancel
          </button>
          <button
            aria-label="btn"
            className={classNames(styles.btnSave)}
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
