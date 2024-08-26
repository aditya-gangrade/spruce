import React from 'react';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg md:text-xl font-bold mb-4">Card 1</h3>
        <p className="text-gray-600">This is the content of card 1.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg md:text-xl font-bold mb-4">Card 2</h3>
        <p className="text-gray-600">This is the content of card 2.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg md:text-xl font-bold mb-4">Card 3</h3>
        <p className="text-gray-600">This is the content of card 3.</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg md:text-xl font-bold mb-4">Card 4</h3>
        <p className="text-gray-600">This is the content of card 4.</p>
      </div>
    </div>
  );
};

export default Cards;
