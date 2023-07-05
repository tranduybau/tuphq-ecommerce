import React from 'react';
import Image from 'next/image';

import SignUpForm from './components/SignUpForm';

import styles from './SignUp.module.scss';

export default function SignUp() {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`${styles.sideImg}`}>
        <Image
          src="/image/Auth/side-img.png"
          alt="side img"
          fill
          priority
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className={`${styles.signUpForm}`}>
        <span className={`${styles.titleText} font-inter`}>
          Create an account
        </span>
        <span className={`${styles.noticeText} font-poppins`}>
          Enter your details below
        </span>
        <SignUpForm />
      </div>
    </section>
  );
}
