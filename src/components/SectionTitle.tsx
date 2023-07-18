import React from 'react';

const SectionTitle = ({ title, icon }: any) => {
  return (
    <h2 className="sm:text-xl text-md font-semibold text-white my-4 flex items-center">
      <span className="pr-2 text-xl">{icon}</span>
      {title}
    </h2>
  );
};

export default SectionTitle;
