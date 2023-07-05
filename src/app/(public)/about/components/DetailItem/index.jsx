import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './DetailItem.module.scss';

export default function DetailItem({ icon, count, text }) {
  const Icon = icon;
  DetailItem.propTypes = {
    icon: PropTypes.node.isRequired,
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  };
  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.iconWrapper)}>
        <Icon className={classNames(styles.icon)} />
      </div>
      <span className={classNames(styles.count, 'font-inter')}>{count}k</span>
      <span className={classNames(styles.text, 'font-poppins')}>{text}</span>
    </div>
  );
}
