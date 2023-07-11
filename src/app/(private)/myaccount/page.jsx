import React from 'react';
import classNames from 'classnames';

import styles from './MyAccountPage.module.scss';

const MyAccountBreadcrumb = React.lazy(() =>
  import('./components/MyAccountBreadcrumb')
);
const MyAccountForm = React.lazy(() => import('./components/MyAccountForm'));
const MyAccountSidebar = React.lazy(() =>
  import('./components/MyAccountSidebar')
);

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
