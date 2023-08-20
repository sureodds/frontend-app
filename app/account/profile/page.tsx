import { SectionTitle } from '@/components';
import React from 'react';
import { RxAvatar } from 'react-icons/rx';

const ProfilePage = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle icon={<RxAvatar />} title="My Profile" />
      </div>
    </section>
  );
};

export default ProfilePage;
