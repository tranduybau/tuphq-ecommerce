'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import styles from './InputForm.module.scss';

export default function InputForm({
  name,
  type,
  className,
  placeholder,
  ...props
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  InputForm.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    // ...props: PropTypes.any, // Nếu bạn muốn chấp nhận bất kỳ thuộc tính nào khác
  };

  InputForm.defaultProps = {
    type: 'text',
    className: '',
    placeholder: '',
  };
  return (
    <div>
      {errors[name] && (
        <p className={styles.errorMessage}>{errors[name].message}</p>
      )}
      <input
        {...register(name)}
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
