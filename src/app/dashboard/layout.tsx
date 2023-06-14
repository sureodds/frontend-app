'use client';
import React, { useState } from 'react';
import { Sidenav, MobileSidenav } from '@/components';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-primary h-screen w-full">
      <section className="flex h-screen w-full">
        <Sidenav />
        <MobileSidenav toggle={toggle} handleToggle={handleToggle} />
        <main className="w-screen relative container">
          <HiOutlineBars3BottomLeft
            onClick={handleToggle}
            className="absolute left-3 top-3 sm:hidden block text-main text-4xl cursor-pointer"
          />
          {children}
        </main>
      </section>
    </div>
  );
}
