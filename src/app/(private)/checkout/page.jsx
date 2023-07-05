import React from 'react';
import classNames from 'classnames';

import Breadcrumb from '@/components/Breadcrumb';

import CheckOutForm from './components/CheckOutForm';
import CheckOutTable from './components/ChecOutTable';

import styles from './CheckOutPage.module.scss';

export default function CheckOutPage() {
  return (
    <section className={classNames(styles.wrapper, 'container')}>
      <div className={classNames(styles.breadcrumb)}>
        <Breadcrumb urls={['My Account', 'Product', 'View Cart']} />
      </div>
      <div className={classNames(styles.main)}>
        <CheckOutForm />
        <CheckOutTable />
      </div>
    </section>
  );
}
