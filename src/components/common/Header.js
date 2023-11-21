import React, { useState } from "react";
import Logo from "../Images/MyCart-logo.png";
import Modal from "../Model";
import SearchBar from '../Search';
import LogoImage from '../Images/logoText.png'
import TestButton from '../TestComponet'

const Header = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Change the parameter name to avoid shadowing the state variable
  const handleAddressSelectInGrandparent = (address) => {
    setSelectedAddress(address);
  };



  return (
 
    <header className=" bg-pink-200 p-2 flex items-center justify-between">
      {/* Logo Image */}
      <div className="flex items-center">
        <img src={Logo} alt="Company Logo" className="h-8 w-auto " />
        <img src={LogoImage} alt="Company Logo" className="h-9 mx-1 w-auto " />
        
      </div>
      <TestButton/>
      {/* Address Search button*/}
      <Modal onAddressSelect={handleAddressSelectInGrandparent} isOpen={isModalOpen} onClose={closeModal} />
      {selectedAddress ? (
        <button onClick={openModal} className="bg-none text-gray-600 p-2 rounded-lg">
          <div className="flex items-center font-semibold">
          <img
            src="https://foodies-ersndubey.vercel.app/location-icon.ac8b213f.svg"
            alt="user-location"
            className="w-5 mx-2 mt-1"
          />
          {selectedAddress}
          </div>
        </button>
      ) : (
        <button onClick={openModal} className="bg-none text-gray-600 p-2 rounded-lg">
          <div className="flex">
          <img
            src="https://foodies-ersndubey.vercel.app/location-icon.ac8b213f.svg"
            alt="user-location"
            className="w-5 mx-2 mt-1"
          />
          <div className="flex-col justify-start ">
            <h4 className="font-semibold text-sm text-left">Hello</h4>
            <h1 className="font-bold text-base -mt-2">select your address</h1>
          </div>
          </div>
        </button>
      )}

      {/*Product search bar */}
      <SearchBar />

      {/* Cart */}

      {/* cart */}

      <div className="mx-2 relative">
        <img
          src="https://www.svgrepo.com/show/43071/shopping-bag.svg"
          alt="Shoping Cart"
          className="w-8 h-auto"
        />
        <span className="bg-indigo-500 text-white w-4 h-4  rounded-full absolute -top-1 -right-1 md:-top-2 md:-right-2 lg:-top-2 lg:-right-2 flex items-center justify-center text-sm ">
          2 {/* Display the number of items in the cart */}
        </span>
      </div>
    </header>
  );
};

export default Header;
