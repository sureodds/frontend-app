import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Logo Icon */}
      <div className="w-6 h-6 bg-main rounded-md mr-2"></div>
      <p className="uppercase text-white font-black text-xl">
        Sure<span className="text-main">Odds</span>
      </p>
    </div>
  );
};

export default Logo;
