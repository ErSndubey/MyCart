import React from 'react';

const ProductCard = ({ product }) => {
  const { image, title, percentOff, offerDescription } = product;

  return (
    <div>
      <div className=' h-56 flex items-center'>
        <div className=" rounded-lg max-w-feturedImageBox max-h-56  p-2 border-none shadow-none ">
          <img src={image} alt={title} className="max-w-feturedImage  max-h-56  mx-auto hover:scale-110 transition duration-500 cursor-pointer object-cover " />
        </div>
      </div>
      <div>
        <div className='flex justify-between'>
          <div className='bg-red-600 text-white max-w-offerTag rounded-sm '>
            <h4 className='mx-2 text-xs' >Up to {percentOff} off</h4>
          </div>
          <div className='text-red-700 text-sm font-semibold mr-4'>Great Indian festival</div>
        </div>
        <h3 className=" text-sm ">{offerDescription}</h3>
        {/* <p className="text-gray-600 text-sm mb-4">{price}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;
