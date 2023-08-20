'use client';
import React from 'react';

interface ButtonProps {
  type: any;
  text: string;
  loading: boolean;
}

const Button = ({ type, text, loading }: ButtonProps) => (
  <button
    type={type}
    className="group relative flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-gradient focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-100 ease-in-out shadow-lg"
  >
    {loading ? (
      <span className="flex items-center">
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        <span className="ml-2">Loading...</span>
      </span>
    ) : (
      <span>{text}</span>
    )}
  </button>
);

export default Button;
