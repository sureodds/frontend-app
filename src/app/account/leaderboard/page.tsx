import React from 'react';
import { SectionTitle } from '@/components';
import { RxActivityLog } from 'react-icons/rx';
import Banner from '@/components/Banner';
import PlayerCardRow from '@/components/PlayerCardRow';
import { forecasters } from '../../../contants';

const LeaderboardPage = () => {
  return (
    <section className="pb-20">
      {/* <div className="container grid grid-cols-2 gap-x-4">
        <Banner />
        <Banner />
      </div> */}
      <div className="lg:px-10 sm:px-6">
        {/* <SectionTitle icon={<RxActivityLog />} title="Leader Board" /> */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-x-4">
          {forecasters.map((data) =>
            data?.level === 'vip' ? (
              <PlayerCardRow
                key={data.id}
                data={data}
                title="VIP Players"
                btnTxt="Subscribe"
              />
            ) : null,
          )}
          {forecasters.map((data) =>
            data?.level === 'golden' ? (
              <PlayerCardRow
                key={data.id}
                data={data}
                title="Golden Players"
                btnTxt="Subscribe"
              />
            ) : null,
          )}
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-x-4">
          {forecasters.map((data) =>
            data?.level === 'sliver' ? (
              <PlayerCardRow
                key={data.id}
                data={data}
                title="Sliver Players"
                btnTxt="Subscribe"
              />
            ) : null,
          )}
          {forecasters.map((data) =>
            data?.level === 'bronze' ? (
              <PlayerCardRow
                key={data.id}
                data={data}
                title="Bronze Players"
                btnTxt="Free Odds"
              />
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPage;
