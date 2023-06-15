import { SectionTitle } from '@/components';
import React from 'react';
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
