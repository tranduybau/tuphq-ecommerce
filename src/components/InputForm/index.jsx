/* eslint-disable react/require-default-props */

'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

function InputForm({
  name,
  type = 'text',
  className = '',
  placeholder = '',
  ...props
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div>
      {error && <p className="text-[red] text-[12px]">{error.message}</p>}
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

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default React.memo(InputForm);
