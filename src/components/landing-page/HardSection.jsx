import React from 'react';

export const HardSection = () => {
  return (
    <div className=''>
      <div className='pt-10 sm:pt-20 pb-5 sm:pb-10 flex justify-center items-center bg-[#333333] text-white'>
        <div className='w-full max-w-7xl px-4 sm:px-6 flex justify-center items-center flex-col lg:px-8'>
          <h1 className='font-semibold text-3xl sm:text-4xl pt-5 pb-3 text-center'>Join the Herd!</h1>
          <label className="text-center px-4 sm:px-0">Join our mailing list and keep up with all the exciting things.</label>
          <button className='py-3 px-8 bg-[#a76435] my-7 font-medium'>Sign me up</button>
        </div>
      </div>
    </div>
  ); 
};
