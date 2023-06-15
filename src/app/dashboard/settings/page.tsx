import React from 'react';
import { RxGear } from 'react-icons/rx';
import { SectionTitle } from '@/components';

const SettingPage = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle icon={<RxGear />} title="Settings" />
      </div>
    </section>
  );
};

export default SettingPage;
