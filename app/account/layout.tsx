'use client'
import React, { useState } from 'react'
import { Sidenav, MobileSidenav, Header } from '@/components'
import '../globals.css'
import localFont from 'next/font/local'

const zonapro = localFont({
  src: [
    {
      path: '../../public/fonts/ZonaPro-Light.otf',
      weight: '300',
    },
    {
      path: '../../public/fonts/ZonaPro.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/ZonaPro-SemiBold.otf',
      weight: '600',
    },
    {
      path: '../../public/fonts/ZonaPro-Bold.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/ZonaPro-ExtraBold.otf',
      weight: '800',
    },
  ],
  variable: '--font-zona',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <html lang='en'>
      <body className={`${zonapro.variable} font-sans`} suppressHydrationWarning={true}>
        <section className='flex sm:h-screen h-full w-full overflow-hidden'>
          <Sidenav />
          <MobileSidenav toggle={toggle} handleToggle={handleToggle} />
          <main className='w-screen relative bg-primary overflow-y-auto'>
            <Header onClick={handleToggle} />
            {children}
          </main>
        </section>
      </body>
    </html>
  )
}
