import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import PlayerCard from './PlayerCard';

const PlayerCardRow = ({ title, btnTxt, data }: any) => {
  return (
    <section className="shadow-2xl rounded-md bg-secondary mt-6 px-4">
      <div className="flex items-center justify-between mt-4">
        <SectionTitle title={title} />
        <Button sm text={btnTxt} />
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:mt-2 mt-6">
        {data?.data.map((item: any) => (
          <PlayerCard key={item} data={item} />
        ))}
      </div>
    </section>
  );
};

export default PlayerCardRow;
