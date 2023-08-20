'use client';
import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  ariaLabel: string;
}

const InputField: React.FC<InputFieldProps> = ({
  ariaLabel,
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-5">
      <label
        htmlFor={props.name}
        className="block text-xs mb-2 text-darkGray"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        aria-label={ariaLabel}
        className={`w-full px-4 sm:py-4 py-2 sm:text-md text-sm border rounded-md shadow-sm text-primary bg-transparent focus:outline-none focus:border-main ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;
