import React from 'react';

const SectionTitle = ({ title, icon }: any) => {
  return (
    <h2 className="lg:text-xl md:text-lg sm:text-sm text-md font-semibold text-white lg:mb-4 sm:mb-3 flex items-center">
      <span className="pr-2 text-xl">{icon}</span>
      {title}
    </h2>
  );
};

export default SectionTitle;
