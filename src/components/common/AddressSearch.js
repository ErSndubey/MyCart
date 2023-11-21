import React, { useState } from 'react';

const AddressSearch = ({ onAddressSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [predictions, setPredictions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length >= 3) {
      try {
        const response = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/misc/place-autocomplete?input=${value}&types=`);
        const data = await response.json();
        console.log(data);
        setPredictions(data.data);
      } catch (error) {
        console.error('Error fetching place suggestions:', error);
      }
    } else {
      setPredictions([]);
    }
  };

  const handleSuggestionClick = (prediction) => {
    setInputValue(prediction.description);
    setPredictions([]);
    // Call the callback function with the selected address
    onAddressSelect(prediction.description);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className='p-2 w-60 rounded-md text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-pink-400'
        placeholder="Search for a location..."
      />
      <div>
        {predictions.map((prediction) => (
          <div
            key={prediction.place_id}
            onClick={() => handleSuggestionClick(prediction)}
            className='cursor-pointer p-1 h-auto bg-pink-300'
          >
            {prediction.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressSearch;
