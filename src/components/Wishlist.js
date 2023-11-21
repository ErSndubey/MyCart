import React from 'react';

const Wishlist = ({ wishlistItems }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Wishlist</h2>
      {wishlistItems.map((item) => (
        <div key={item.id} className="bg-white rounded shadow-md p-4 mb-4">
          <h3 className="text-xl font-semibold">{item.product.name}</h3>
          <p className="text-gray-600">Price: ${item.product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
