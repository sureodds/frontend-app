import React, { useState } from 'react';

const AccordionItem = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6 bg-primary">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full px-4 py-4 border text-white rounded-lg focus:outline-none"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ${
          isOpen ? 'max-h-full' : 'max-h-0'
        }`}
      >
        <div className="mt-2 px-6 py-4 bg-primary text-gray-300 rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
