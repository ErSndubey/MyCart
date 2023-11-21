import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="bg-indigo-700 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">Stay updated with the latest products and offers.</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="py-2 px-4 mr-2 rounded-l-md" />
          <button className="bg-yellow-500 py-2 px-6 rounded-r-md hover:bg-yellow-400">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
