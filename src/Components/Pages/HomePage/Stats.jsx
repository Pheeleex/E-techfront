import React from 'react';

const Stats = () => {
  const bigStats = [
    {
      numbers: '2.5K',
      Description: 'Graduates since 2022',
    },
    {
      numbers: '90%',
      Description: 'Employment rate',
    },
    {
      numbers: '95%',
      Description: 'Graduate satisfactory score',
    },
    {
      numbers: '85M',
      Description: 'Global demand for tech professionals by 2030',
    },
  ];

  return (
    <div className='stats p-8'>
      <div className='flex flex-col lg:flex-row justify-between'>
        {bigStats.map((stat, index) => (
          <div key={index} className='flex flex-col justify-center items-center text-white lg:w-1/4 md:w-1/2 w-full mb-4'>
            <h1 className='font-bold'>{stat.numbers}</h1>
            <span>{stat.Description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
