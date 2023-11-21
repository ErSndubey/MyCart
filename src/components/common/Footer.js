import React from 'react';
import logo from '../Images/MyCart-logo.png'
function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold">Who we are</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Release</p>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold">Customer Service</h3>
          <ul>
            <li><a href="https://example.com/">FAQs</a></li>
            <li><a href="https://example.com/">Contact Us</a></li>
            <li><a href="https://example.com/">Returns & Exchanges</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold">Categories</h3>
          <ul>
            <li><a href="https://example.com/">Electronics</a></li>
            <li><a href="https://example.com/">Clothing</a></li>
            <li><a href="https://example.com/">Home & Garden</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <div className="flex space-x-2">
            <a href="https://example.com/" className="text-blue-300 hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://example.com/" className="text-blue-300 hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://example.com/" className="text-blue-300 hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  my-7">
       
         
     &copy; 2023 <img src={logo} alt="Footer logo" className='w-3 h-auto mx-1 ' /><span>MyCart</span> 
       
        <p className='mx-2'> [ Developed with ❤️ by <a href="https://www.linkedin.com/in/ersndubey/" className='underline text-pink-400'> Sachchidanand Dubey </a>]</p>
        
      </div>
    </footer>
  );
}

export default Footer;
