'use client'
import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

interface ButtonProps {
  type: any
  text: string
  loading?: boolean
}

const Button = ({ type, text, loading }: ButtonProps) => (
  <button
    type={type}
    className='w-full bg-main text-white sm:py-3 py-2 font-bold rounded-md hover:bg-blue-400 transition duration-300'>
    {loading ? (
      <span className='flex items-center pl-4'>
        <ClipLoader size={20} color='#fff' />
        <span className='ml-2'>Loading...</span>
      </span>
    ) : (
      <>
        <span className='font-bold'>{text}</span>{' '}
        <span aria-hidden='true'>&rarr;</span>
      </>
    )}
  </button>
)

export default Button
