/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

import styles from './Breadcrumb.module.scss';

function Breadcrumb({ pathname = '', urls = '' }) {
  const pathnameVar = usePathname() || pathname;
  const pathNameArray = pathnameVar.split('/').filter((item) => item !== '');
  const pathNameMainArray = pathNameArray.map((pathnameItem) => {
    return pathnameItem.charAt(0).toUpperCase() + pathnameItem.slice(1);
  });

  const renderLink = (url, index) => (
    <Link key={index} href="/" className={`${styles.link}`}>
      {url}
    </Link>
  );

  return (
    <div className="font-poppins w-full">
      <Link href="/" className={`${styles.link}`}>
        Home
      </Link>
      {pathNameMainArray.map(renderLink)}
      {urls && urls.map(renderLink)}
    </div>
  );
}

Breadcrumb.propTypes = {
  pathname: PropTypes.string,
  urls: PropTypes.array,
};

export default React.memo(Breadcrumb);
