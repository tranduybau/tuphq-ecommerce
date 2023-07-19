'use client';

import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

export default function PrivateLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const currentUser = Cookies.get('userData')
      ? JSON.parse(Cookies.get('userData'))
      : null;
    if (!currentUser) {
      router.push('/signin');
    }
  }, [router]);

  return <div>{children}</div>;
}

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
