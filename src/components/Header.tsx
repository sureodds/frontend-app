import React from 'react';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import Button from './Button';

const Header = ({ onClick }: any) => {
  return (
    <div className="flex container justify-between items-center relative py-5 bg-secondary">
      <HiOutlineBars3BottomLeft
        onClick={onClick}
        className="sm:hidden block text-main text-4xl cursor-pointer"
      />
      <h1 className="text-xl text-white hidden sm:block">Header</h1>
      <Button text="Add Your Forecast" />
    </div>
  );
};

export default Header;
