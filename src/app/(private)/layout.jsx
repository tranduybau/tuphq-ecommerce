'use client';

import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

export default function PrivateLayout({ children }) {
  PrivateLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const router = useRouter();
  if (typeof window !== 'undefined') {
    const currentUser = Cookies.get('currentUser')
      ? JSON.parse(Cookies.get('currentUser'))
      : null;
    if (currentUser === null) {
      router.push('/signin');
    }
    return <div>{children}</div>;
  }
}
