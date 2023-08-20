import React from 'react';

const Button = ({ sm, onClick, text, icon }: any) => {
  return (
    <>
      {sm ? (
        <button
          onClick={onClick}
          className={`flex items-center rounded-md bg-main transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-white text-sm sm:text-md py-2 sm:px-6 px-4`}
        >
          <span>{icon}</span>
          {text}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`flex items-center rounded-md bg-main transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-white text-sm sm:text-lg py-3 sm:px-10 px-4`}
        >
          <span>{icon}</span>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
