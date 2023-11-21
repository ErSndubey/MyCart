import React from 'react';
import topOffersData from '../API/TopOffers.json'

const ImageGrid = () => {
  const topOffers = topOffersData.TopOffers;

  return (
    <>
    <div className='bg-white '>
      <h1 className='font-semibold text-2xl mt-6 mb-5 mx-6 '>Explore top offers in mobile accessories</h1>
      <div className="grid grid-cols-7 ">

        {topOffers.map((offer) => (
          <div key={offer.id} className="max-w-xs">
            <img src={offer.url} alt={offer.title} className="max-w-feturedImage h-auto object-contain mx-3" />
            
          </div>
        ))}
      </div>
      </div>
      </>
      );

};

export default ImageGrid;
