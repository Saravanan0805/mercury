import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex items-center">
        <h1 className="text-4xl font-bold mr-3">Coming Soon</h1>
        <div className="flex items-baseline mt-4">
            <div className='loader'></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
