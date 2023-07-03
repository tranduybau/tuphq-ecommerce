import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './FeaturedItem.module.scss';

export default function FeaturedItem({
  className,
  imgClassName,
  children,
  name,
  description,
}) {
  FeaturedItem.propTypes = {
    className: PropTypes.string,
    imgClassName: PropTypes.string,
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  FeaturedItem.defaultProps = {
    className: '',
    imgClassName: '',
  };

  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={`${imgClassName} ${styles.image} relative`}>
        {children}
      </div>
      <div className={`${styles.content}`}>
        <span className={`${styles.name} font-inter`}>{name}</span>
        <span className={`${styles.description} font-poppins`}>
          {description}
        </span>
        <Link href="/" className={`${styles.link} font-poppins`}>
          Shop Now
        </Link>
      </div>
    </div>
  );
}
