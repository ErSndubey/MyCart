import React from 'react';

const ReviewsAndRatings = ({ reviews, averageRating }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Reviews and Ratings</h2>
      <div className="text-2xl font-semibold">Average Rating: {averageRating}</div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            {/* Display individual ratings and comments */}
          </li>
        ))}
      </ul>
      {/* Add a review form */}
    </div>
  );
};

export default ReviewsAndRatings;
