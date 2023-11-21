import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Function to fetch search suggestions from the API based on the search term
  const fetchSuggestions = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.snapdeal.com/app/get/json/autoSuggestions?ss=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
       
        setSuggestions(data.responseAutosuggestions); // Assuming the API response is an array of suggestions
      }
    } catch (error) {
      console.error('Error fetching suggestions: ', error);
    }
  };

  // Function to handle changes in the search input
  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    // Fetch and update suggestions based on the query
    fetchSuggestions(query);
  };

  return (
    <div className=''>
      <div className='flex  items-center'>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        className=' className=" h-10 w-96 px-2 font-normal rounded-tl-md rounded-bl-md bg-white  focus:outline-none focus:ring-1 focus:ring-pink-400'
        onChange={handleSearchInput}
      />
              <button
          id="search-button"
          className="bg-pink-500 text-white p-2 rounded-r"
        >
          <img
            src="https://www.svgrepo.com/show/532555/search.svg"
            className="w-6 h-auto"
            alt="Search"
          />
        </button>
        </div>
        {suggestions.length > 0 && (
      <ul className='bg-white border absolute w-96 rounded-sm shadow-md z-10'>
        {suggestions.map((suggestion, index) => (
          <li key={index} className='mx-2 divider cursor-pointer my-1'>{suggestion.keyword}</li>
        ))}
      </ul>
        )}
    </div>

  );
}

export default SearchBar;

