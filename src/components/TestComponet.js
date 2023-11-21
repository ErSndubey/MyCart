
import React, { useState } from 'react';

function TestComponet() {
  const [responseData, setResponseData] = useState(null);

  // Function to make the API request
  const callApi = async () => {
    try {
      // Make the API request using the fetch function or any other method
      const response = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=25.4358011&lng=81.846311&str=Veg%20Pizza&trackingId=undefined&submitAction=SUGGESTION&');
      
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
        {/* <pre>{JSON.stringify(responseData, null, 2)}</pre> */}
      )}
    </div>
  );
}

export default TestComponet;
