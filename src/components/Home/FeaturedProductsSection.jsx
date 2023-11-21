import React from 'react';
import ProductCard from '../ProductCard'

const FeaturedProductsSection = () => {
  // Import your JSON data
  const featuredProductsData = require('../API/FeaturedProducts.json');

  return (
   
    <section className="py-6 bg-white relative mt-96">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-sans  font-semibold mb-2">Blockbuster deals</h2>
        <div className="grid grid-cols-6  gap-3">
          {featuredProductsData.featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={{
                image: product.image,
                title: product.name,
                percentOff: product.percentOff,
                offerDescription: product.offerDescription
              }}
            />
          ))}
        </div>
      </div>
    </section>
   
  );
};

export default FeaturedProductsSection;
