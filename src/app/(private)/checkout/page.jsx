import React from 'react';
import classNames from 'classnames';

import styles from './CheckOutPage.module.scss';

const Breadcrumb = React.lazy(() => import('@/components/Breadcrumb'));
const CheckOutForm = React.lazy(() => import('./components/CheckOutForm'));
const CheckOutTable = React.lazy(() => import('./components/ChecOutTable'));

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
