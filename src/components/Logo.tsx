import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Logo Icon */}
      <div className="sm:w-5 sm:h-5 w-4 h-4 bg-main rounded-md mr-2"></div>
      <p className="uppercase text-white font-black sm:text-lg text-sm">
        Sure<span className="text-main">Odds</span>
      </p>
    </div>
  );
};

export default Logo;
