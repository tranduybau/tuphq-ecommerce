"use client"
import styles from './SignInForm.module.scss'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import Link from 'next/link';

//icon
import InputForm from '@/components/InputForm';

//css
import 'react-toastify/dist/ReactToastify.css';

export default function SignInForm() {
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem('currentUser');
    }, [])

    const validationSchema = yup.object().shape({
        email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        password: yup.string().min(6, 'Mật khẩu phải chứa ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
    });

    const methods = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = useCallback((data) => {
        axios.get('https://fakestoreapi.com/users')
            .then(response => {
                console.log(response.data);
                console.log(data.email)
                console.log(data.password)
                const foundUser = response.data.find((user) => user.email === data.email && user.password === data.password);
                if (foundUser) {
                    toast.success('Đăng nhập thành công')
                    localStorage.setItem('currentUser', JSON.stringify(foundUser));

                    router.push('/');

                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)

                } else {
                    toast.error('Sai tài khoản hoặc mật khẩu');
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} method='POST' className={`${styles.wrapper}`}>
                <InputForm type='text' name='email' className={`${styles.signInFormInput}`} placeholder='Email or Phone Number' />
                <InputForm type='password' name='password' className={`${styles.signInFormInput}`} placeholder='Password' />
                <div className={`${styles.SignInFormBtnWrapper}`}>
                    <button className={`font-poppins ${styles.SignInFormSubmitBtn}`} type='submit'>
                        Log In
                    </button>
                    <Link href='/signin' className={`${styles.SignInFormForgotPass} font-poppins`}>Forget Password?</Link>
                </div>
                <ToastContainer />
            </form>
        </FormProvider>
    );
}