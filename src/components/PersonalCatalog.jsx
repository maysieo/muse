import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PersonalCatalog = () => {
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    let userEmail = localStorage.getItem('userEmail');
    axios.get(`http://localhost:3000/review/${userEmail}`)
      .then((response) => {
        setUserReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div>
    <h2 className="text-custom-yellow">Your Personal Catalog</h2>
    <div>
      {userReviews.map((review, index) => {
        return (
          <div key={index}>
            <h3>{review.Title}</h3>
            <h4>{review.Artist}</h4>
            <p>{review.review}</p>
            <p>Rating: {review.rating}</p>
            <img src='https://via.placeholder.com/150' alt={review.Title} />
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default PersonalCatalog;