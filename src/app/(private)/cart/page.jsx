import React from 'react';

import styles from './CartPage.module.scss';

const Breadcrumb = React.lazy(() => import('@/components/Breadcrumb'));
const TableCart = React.lazy(() => import('./components/TableCart'));

export default function CartPage() {
  return (
    <section className={`${styles.wrapper} container`}>
      <div className={`${styles.breadcrumb}`}>
        <Breadcrumb />
      </div>
      <div className={`${styles.table}`}>
        <TableCart />
      </div>
    </section>
  );
}
