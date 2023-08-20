'use client';
import React, { useState } from 'react';
import { Sidenav, MobileSidenav, Header } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <section className="flex sm:h-screen h-full w-full overflow-hidden">
        <Sidenav />
        <MobileSidenav toggle={toggle} handleToggle={handleToggle} />
        <main className="w-screen relative bg-primary overflow-y-auto">
          <Header onClick={handleToggle} />
          {children}
        </main>
      </section>
    </div>
  );
}
