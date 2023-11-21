
import React, { useState } from 'react';

function ApiCallComponent() {
  const [responseData, setResponseData] = useState(null);

  // Function to make the API request
  const callApi = async () => {
    try {
      // Make the API request using the fetch function or any other method
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/search/v3?lat=25.4358011&lng=81.846311&str=Veg%20Pizza&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=b79ef1e9-6c70-d85c-c125-06645a449787&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22yhipqrmi6px7reeblkix%22%2C%22dishFamilyId%22%3A%22846647%22%2C%22dishTypeId%22%3A%22847543%22%2C%22dishFamilyIds%22%3A%5B%22846647%22%5D%2C%22dishTypeIds%22%3A%5B%22847543%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D');
      
      if (response.ok) {
        const data = await response.json();
        // Set the response data to the state
        setResponseData(data);
        // Log the response to the console
        console.log(data);
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <div>
      <button onClick={callApi}>Call API</button>
      {/* Display the response data in the component (optional) */}
      {responseData && (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )}
    </div>
  );
}

export default ApiCallComponent;
