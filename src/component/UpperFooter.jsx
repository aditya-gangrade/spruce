import React from 'react';

const UpperFooter = () => {
  return (
    <div className="bg-upperfooter text-white flex flex-col items-center justify-center text-center p-28">
      <h1 className="text-2xl font-bold mb-4">Join over 25,000 healthcare professionals today</h1>
      <p className="mb-6">Get started with an unlimited 14-day free trial.</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Get started for free
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          See a demo 
        </button>
      </div>
    </div>
  );
};
export default UpperFooter;