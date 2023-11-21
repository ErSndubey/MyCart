import React from 'react';
import { Link } from 'react-router-dom';

const ProductListing = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Product Listing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow-md p-4">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
