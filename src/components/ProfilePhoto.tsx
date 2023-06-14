import React from 'react';
import Image from 'next/image';
import ProfileImage from '@/public/profile-photo.jpg';
import { ProfilePhotoTypes } from '../types';

const ProfilePhoto = ({ imgUrl, username }: ProfilePhotoTypes) => {
  return (
    <>
      <div className="mt-16 flex items-center justify-center relative h-16 w-20 mx-auto">
        <Image
          src={imgUrl ? imgUrl : ProfileImage}
          alt={username ? username : `Profile Photo`}
          fill
          className="rounded-md border-4 border-main"
        />
      </div>
      <div>
        <p className="text-center text-sm text-white mt-3">@JamesRollings</p>
        <div className="grid grid-cols-2 mt-6 items-center text-white">
          <div className="w-full text-center">
            <div className="flex items-center justify-center">
              <p className="text-sm mr-2 text-gray-300">on</p>
              <p className="text-sm text-gray-300">Golden</p>
            </div>
            <p className="text-sm text-gray-500 mt-2">Level</p>
          </div>
          <div className="border-l border-gray-500 w-full text-center">
            <div className="flex items-center justify-center ">
              <p className="text-sm mr-2 text-gray-300">Icon</p>
              <p className="text-sm text-gray-300">89%</p>
            </div>
            <p className="text-sm text-gray-500 mt-2">Win Rate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePhoto;
