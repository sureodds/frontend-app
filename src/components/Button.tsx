import React from 'react';

const Button = ({ onClick, text, icon }: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center rounded-full bg-main hover:rounded-md transition ease-in-out duration-500 text-white text-sm sm:text-lg py-3 sm:px-10 px-4`}
    >
      <span>{icon}</span>
      {text}
    </button>
  );
};

export default Button;
