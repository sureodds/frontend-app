import React from 'react';
import { SectionTitle } from '@/components';
import { SlWallet } from 'react-icons/sl';

const WalletPage = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle icon={<SlWallet />} title="My Wallet" />
      </div>
    </section>
  );
};

export default WalletPage;
