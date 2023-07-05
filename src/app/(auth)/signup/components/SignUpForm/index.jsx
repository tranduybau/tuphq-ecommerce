'use client';

import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import * as yup from 'yup';

import InputForm from '@/components/InputForm';

// icon
import GoogleIcon from '@/svgs/Signup/Icon-Google.svg';

import styles from './SignUpForm.module.scss';

export default function SignUpForm() {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Vui lòng nhập tên'),
    email: yup
      .string()
      .email('Email không hợp lệ')
      .required('Vui lòng nhập email'),
    password: yup
      .string()
      .min(6, 'Mật khẩu phải chứa ít nhất 6 ký tự')
      .required('Vui lòng nhập mật khẩu'),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = useCallback((data) => {
    return data;
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        method="POST"
        className={`${styles.wrapper}`}
      >
        <InputForm
          type="text"
          name="name"
          className={`${styles.signUpFormInput}`}
          placeholder="Name"
        />
        <InputForm
          type="text"
          name="email"
          className={`${styles.signUpFormInput}`}
          placeholder="Email or Phone Number"
        />
        <InputForm
          type="password"
          name="password"
          className={`${styles.signUpFormInput}`}
          placeholder="Password"
        />

        <button
          aria-label="btn"
          className={`font-poppins ${styles.SignUpFormSubmitBtn}`}
          type="submit"
        >
          Create Account
        </button>
        <button
          aria-label="btn"
          className={`${styles.SignUpFormGoogleBtn}`}
          type="button"
        >
          <GoogleIcon className={`${styles.googleIcon}`} />
          <span className={`${styles.googleBtnText} font-poppins`}>
            Sign up with Google
          </span>
        </button>
        <div className={`${styles.haveAccount}`}>
          <span className={`${styles.haveAccountText} font-poppins`}>
            Already have account?
          </span>
          <Link
            href="/signin"
            className={`${styles.haveAccountLink} font-poppins`}
          >
            Log in
          </Link>
        </div>
      </form>
    </FormProvider>
  );
}
