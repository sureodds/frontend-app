import React from 'react';
import Image from 'next/image';
import ProfileImage from '@/public/profile-photo.jpg';
import Golden from '@/public/levels/golden.png';
import Link from 'next/link';

const PlayerCard = ({ data }: any) => {
  return (
    <div className="bg-primary flex justify-between shadow-lg border-l-4 border-main p-2 rounded-md mb-2 relative">
      <div className="user pl-2">
        <div className="image relative h-10 w-10">
          <Image
            src={data?.imgurl ? data?.imgurl : ProfileImage}
            alt={data?.username}
            fill
            className="rounded-full border-2 border-main object-cover"
          />
        </div>
        <p className="text-xs mt-2 text-white">{data?.username}</p>
        <p className="text-xs mt-1 font-semibold text-orange-400">
          Ranking <span className="">{data?.rank}</span>
        </p>
        <div className="image h-10 w-10 absolute top-[-1rem] left-[-1rem]">
          <Image
            src={data?.levelurl ? data?.levelurl : Golden}
            alt={data?.username}
            fill
            className="rounded-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-2">
          <div className="bg-secondary border-2 border-primary p-1 w-20 h-10">
            <p className="text-xs text-gray-400 text-right">Win Rate</p>
            <p className="text-xs text-white text-right">78.46%</p>
          </div>
          <div className="bg-secondary border-2 border-primary p-1 w-20 h-10">
            <p className="text-xs text-gray-400 text-right">Avr Odds</p>
            <p className="text-xs text-white text-right">78.46%</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="bg-secondary border-2 border-primary p-1 w-20 h-10">
            <p className="text-xs text-gray-400 text-right">Copied</p>
            <p className="text-xs text-white text-right">784</p>
          </div>
          <div className="bg-secondary border-2 border-primary p-1 w-20 h-10">
            <Link href={`/dashboard/leaderboard/${data?.id}`}>
              <button className="text-xs text-white p-1 whitespace-nowrap bg-main text-right">
                View odds
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
