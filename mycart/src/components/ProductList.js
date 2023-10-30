import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps';

    // Define the API headers
    const headers = {
      'X-RapidAPI-Key': '78e9d4af66msh91a7d59dc590f08p1aa70ejsn7b9584694a35',
      'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com',
    };

    // Fetch data from the API
    fetch(apiUrl, { method: 'GET', headers })
      .then((response) => {
        if (response.ok) {
            console.log(response.json)
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.asin} className="bg-white p-4 rounded shadow">
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700">Price: {product.price.current_price} USD</p>
              <p className="text-gray-700">Rating: {product.reviews.rating} ({product.reviews.total_reviews} reviews)</p>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Amazon
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
