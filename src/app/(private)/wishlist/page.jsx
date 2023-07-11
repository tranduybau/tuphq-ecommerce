import React from 'react';

import styles from './WishlistPage.module.scss';

const Wishlist = React.lazy(() => import('./components/Wishlist'));
const WishlistForYou = React.lazy(() => import('./components/WishlistForYou'));

export default function WishlistPage() {
  return (
    <main className={styles.wrapper}>
      <Wishlist />
      <WishlistForYou />
    </main>
  );
}
