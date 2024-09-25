import React, { useState } from 'react';

function Cards({ item }) {
  const [error, setError] = useState('');

  const handleBuyNowClick = () => {
    if (item.link) {
      // Open the PDF in a new tab.
      window.open(item.link, '_blank');
      setError(''); // Clear any previous errors.
    } else {
      setError('PDF link is not available.');
    }
  };

  return ( 
    <div className='mt-5 mb-5'>
      <div className="card dark:bg-white dark:hover:bg-gray-800 hover:bg-red-600 duration-700 text-white w-96 shadow-2xl hover:scale-105 pt-4">
        <figure>
        <img 
  src={item.image} 
  alt="Books" 
  onError={() => setError('Image could not be loaded')} 
  // style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensures the image covers the space
/>

        </figure>
        <div className="card-body">
          <h2 className="card-title dark:text-yellow-600 text-black font-bold">
            {item.name}
            <div className="badge dark:bg-black dark:text-yellow-500 bg-[#FFD700] text-black">{item.category}</div>
          </h2>
          <p className='text-black dark:text-yellow-600 font-bold'>{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="text-black font-bold">{item.price}</div>
            <div 
              className="button rounded-xl p-2 text-black font-semibold hover:text-white hover:bg-black hover:font-bold duration-500 dark:bg-black dark:text-yellow-500 dark:hover:bg-gray-500" 
              onClick={handleBuyNowClick}
            > 
              Buy Now 
            </div>
          </div>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Cards;
