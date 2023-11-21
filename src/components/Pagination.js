import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Pagination</h2>
      <div className="flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-pink-400 text-white' : 'bg-pink-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
