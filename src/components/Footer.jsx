import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">E-Commerce Store</h3>
          <p className="text-sm">Your one-stop shop for quality products.</p>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-2">Social Media</h4>
          <ul className="space-y-2">
            <li><a href="/facebook">Facebook</a></li>
            <li><a href="/twitter">Twitter</a></li>
            <li><a href="/instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
