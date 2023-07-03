import React from 'react';
import { ToastContainer } from 'react-toastify';

import Breadcrumb from '@/components/Breadcrumb';

import TableCart from './components/TableCart';

import 'react-toastify/dist/ReactToastify.css';
import styles from './CartPage.module.scss';

export default function CartPage() {
  return (
    <section className={`${styles.wrapper} container`}>
      <ToastContainer />
      <div className={`${styles.breadcrumb}`}>
        <Breadcrumb />
      </div>
      <div className={`${styles.table}`}>
        <TableCart />
      </div>
    </section>
  );
}
