import React, { useState } from 'react';

function Cards({ item }) {
  const [error, setError] = useState('');

  const handleBuyNowClick = () => {
    if (item.link) {
      // Open the PDF in a new tab.
      window.open(item.link, '_blank');
      setError(''); // Clear any previous errors.
    } else {
      setError('Comic is not available.');
    }
  };

  return ( 
    <div className='mt-5 mb-5'>
    <div className="card dark:bg-white dark:hover:bg-gray-800 hover:bg-red-800 duration-700 text-white w-96 h-[550px] shadow-2xl hover:scale-105 pt-4 rounded-lg">
      <figure className="h-2/3 overflow-hidden"> {/* Fixed height for the image container */}
        <img 
          src={item.image} 
          alt="Books" 
          onError={() => setError('Image could not be loaded')}
          className="w-full h-full object-cover" // Ensure the image covers the space
        />
      </figure>
      <div className="card-body flex flex-col justify-between h-1/3"> {/* Maintain vertical layout */}
        <h2 className="card-title dark:text-yellow-600 text-black font-bold">
          {item.name}
          <div className="badge dark:bg-black dark:text-yellow-500 bg-[#FFD700] text-black">{item.category}</div>
        </h2>
        <p className='text-black dark:text-yellow-600 font-bold'>{item.title}</p>
        <div className="card-actions flex justify-between items-center"> {/* Align items vertically */}
          <div className="text-black font-bold">{item.price}</div>
          <div 
            className="button rounded-xl p-2 bg-yellow-500 text-black font-semibold hover:text-white hover:bg-black hover:font-bold duration-500 dark:bg-black dark:text-yellow-500 dark:hover:bg-gray-500" 
            onClick={handleBuyNowClick}
          > 
            Read Now 
          </div>
        </div>
      </div>
    </div>
    {error && <p className="text-red-500">{error}</p>}
  </div>
  );
}

export default Cards;
