'use client';
import React, { useState } from 'react';

const InputField = ({ label, type, value, onChange, error }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="mb-4">
      <label
        className={`block text-sm font-medium ${
          isFocused ? 'text-blue-500' : 'text-gray-300 mb-2'
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`mt-1 px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md focus:outline-none text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent`}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
