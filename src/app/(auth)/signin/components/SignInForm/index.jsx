'use client';

import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

// icon
import InputForm from '@/components/InputForm';

// css
import 'react-toastify/dist/ReactToastify.css';
import styles from './SignInForm.module.scss';

export default function SignInForm() {
  const router = useRouter();

  useEffect(() => {
    Cookies.remove('currentUser');
  }, []);

  const validationSchema = yup.object().shape({
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

  const onSubmit = (data) => {
    axios
      .get('https://fakestoreapi.com/users')
      .then((response) => {
        const foundUser = response.data.find(
          (user) => user.email === data.email && user.password === data.password
        );
        if (foundUser) {
          toast.success('Đăng nhập thành công');
          Cookies.set('currentUser', JSON.stringify(foundUser));
          setTimeout(() => {
            router.push('/');
          }, 1200);
          setTimeout(() => {
            router.refresh();
          }, 2000);
        } else {
          toast.error('Sai tài khoản hoặc mật khẩu');
        }
      })
      .catch(() => {
        return 0;
      });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        method="POST"
        className={`${styles.wrapper}`}
      >
        <InputForm
          type="text"
          name="email"
          className={`${styles.signInFormInput}`}
          placeholder="Email or Phone Number"
        />
        <InputForm
          type="password"
          name="password"
          className={`${styles.signInFormInput}`}
          placeholder="Password"
        />
        <div className={`${styles.SignInFormBtnWrapper}`}>
          <button
            className={`font-poppins ${styles.SignInFormSubmitBtn}`}
            type="submit"
          >
            Log In
          </button>
          <Link
            href="/signin"
            className={`${styles.SignInFormForgotPass} font-poppins`}
          >
            Forget Password?
          </Link>
        </div>
        <ToastContainer />
      </form>
    </FormProvider>
  );
}
