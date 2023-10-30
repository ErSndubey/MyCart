import React from 'react';
import AddressSearch from './common/AddressSearch';

const Modal = ({ isOpen, onClose, onAddressSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-pink-200 p-8 rounded-lg w-96 h-72">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-gray-700 font-semibold my-4">Your Address</h2>
          <button onClick={onClose} className="text-white bg-pink-500 rounded-md hover:bg-pink-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <AddressSearch onAddressSelect={onAddressSelect} />
      </div>
    </div>
  );
};

export default Modal;
