import React from 'react';

const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded shadow-md p-4">
            {/* Display featured product details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
