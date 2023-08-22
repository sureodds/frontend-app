import React from 'react'

const SectionTitle = ({ title, icon }: any) => {
  return (
    <h2 className='text-md sm:text-2xl font-bold text-white my-4 sm:my-3 flex items-center'>
      {title}
    </h2>
  )
}

export default SectionTitle
