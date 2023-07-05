'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

import styles from './Breadcrumb.module.scss';

function Breadcrumb({ pathname, urls }) {
  Breadcrumb.propTypes = {
    pathname: PropTypes.string,
    urls: PropTypes.string,
  };

  Breadcrumb.defaultProps = {
    pathname: '',
    urls: '',
  };
  let pathnameVar = usePathname();
  if (pathname) {
    pathnameVar = pathname;
  }
  const pathNameArray = pathnameVar.split('/');
  pathNameArray.shift();
  const pathNameMainArray = pathNameArray.map((pathnameItem) => {
    return (
      pathnameItem.slice(0).charAt(0).toUpperCase() + pathnameItem.slice(1)
    );
  });
  return (
    <div className={styles.wrapper}>
      <Link href="/" className={`${styles.link} font-poppins`}>
        Home
      </Link>
      {pathNameMainArray.map((url, index) => {
        const id = index;
        return (
          <Link key={id} href="/" className={`${styles.link} font-poppins`}>
            {url}
          </Link>
        );
      })}
      {urls &&
        urls.map((url, index) => {
          const id = index;
          return (
            <Link key={id} href="/" className={`${styles.link} font-poppins`}>
              {url}
            </Link>
          );
        })}
    </div>
  );
}

export default React.memo(Breadcrumb);
