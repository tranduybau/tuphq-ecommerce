import React from 'react';

import Wishlist from './components/Wishlist';
import WishlistForYou from './components/WishlistForYou';

import 'react-toastify/dist/ReactToastify.css';
import styles from './WishlistPage.module.scss';

export default function WishlistPage() {
  return (
    <main className={styles.wrapper}>
      <Wishlist />
      <WishlistForYou />
    </main>
  );
}
