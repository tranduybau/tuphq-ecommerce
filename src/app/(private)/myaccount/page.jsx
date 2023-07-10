import React from 'react';
import classNames from 'classnames';

import MyAccountBreadcrumb from './components/MyAccountBreadcrumb';
import MyAccountForm from './components/MyAccountForm';
import MyAccountSidebar from './components/MyAccountSidebar';

import styles from './MyAccountPage.module.scss';

export default function MyAccountPage() {
  return (
    <section className={classNames(styles.wrapper, 'container', 'px-0')}>
      <MyAccountBreadcrumb />
      <div className={classNames(styles.main)}>
        <MyAccountSidebar />
        <MyAccountForm />
      </div>
    </section>
  );
}
