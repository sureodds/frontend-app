import React from 'react'
import { SectionTitle } from '@/components'
import { IoWalletOutline } from 'react-icons/io5'
import { SiCashapp } from 'react-icons/si'
import { BiSolidMessageSquareAdd } from 'react-icons/bi'
import Card from '@/components/shared/Card'

const WalletPage = () => {
  return (
    <section className="h-screen">
      <div className='container'>
        <SectionTitle title='My Wallet' />
        {/* Card Rows */}
        <section className='grid sm:grid-cols-2 grid-rows-1 gap-4 mt-8'>
          <div>
            <Card>
              <IoWalletOutline className='text-main text-4xl mb-6' />
              <h3 className='text-white text-sm mb-3'>Current Balance</h3>
              <h3 className='text-white font-extrabold text-4xl'>
                $ 10,567.89
              </h3>
            </Card>
            <div className='grid grid-cols-2 sm:gap-20 gap-4 mt-6'>
              <button className='border border-main font-bold text-main py-3 px-6 shadow-xl rounded-lg flex items-center justify-between'>
                Withdraw
                <SiCashapp className='text-xl' />
              </button>
              <button className='border border-main font-bold text-main py-3 px-6 shadow-xl rounded-lg flex items-center justify-between'>
                Fund Wallet
                <BiSolidMessageSquareAdd className='text-xl' />
              </button>
            </div>
          </div>
          <Card>
            <IoWalletOutline className='text-main text-4xl mb-6' />
            <h3 className='text-white text-sm mb-3'>Current Balance</h3>
            <h3 className='text-white font-extrabold text-4xl'>$ 10,567.89</h3>
          </Card>
        </section>
      </div>
    </section>
  )
}

export default WalletPage
