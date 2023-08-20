import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import PlayerCard from './PlayerCard';

const PlayerCardRow = ({ title, btnTxt, data }: any) => {
  return (
    <section className="shadow-2xl rounded-md bg-secondary mt-6 px-4 py-4">
      <div className="flex items-center justify-between lg:flex-row md:flex-col sm:flex-col lg:mt-4 sm:mt-3 sm:pt-3 sm:mb-3">
        <SectionTitle title={title} />
        <Button sm text={btnTxt} />
      </div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-4 sm:mt-2 mt-6">
        {data?.data.map((item: any) => (
          <PlayerCard key={item} data={item} />
        ))}
      </div>
    </section>
  );
};

export default PlayerCardRow;
