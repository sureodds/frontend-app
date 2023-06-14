'use client';
import React, { useState } from 'react';
import { Sidenav, MobileSidenav } from '@/components';

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
          <button
            onClick={handleToggle}
            className="bg-green-500 absolute left-0 top-0 sm:hidden block"
          >
            Toggle Button
          </button>
          {children}
        </main>
      </section>
    </div>
  );
}
