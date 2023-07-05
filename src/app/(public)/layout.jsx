import React from 'react';
import PropTypes from 'prop-types';

export default function PublicLayout({ children }) {
  PublicLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return <div>{children}</div>;
}
