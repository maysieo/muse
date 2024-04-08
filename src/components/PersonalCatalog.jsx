/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

const PersonalCatalog = ({ userReviews, getUserCatalog }) => {

  useEffect(() => {
    getUserCatalog();
  }, [getUserCatalog]);

  return (
    <div className="text-center text-lg">
      <h1 className="text-center text-4xl mb-4">Your Personal Catalog</h1>
    <div>
      {userReviews.map((review, index) => {
        return (
          <div key={index} className="flex mb-4">
            <div className="mr-4">
              <img src='https://via.placeholder.com/150' alt={review.Title} />
            </div>
            <div className="text-left">
              <h3>Piece: {review.Title}</h3>
              <h4>Artist: {review.Artist}</h4>
              <h4>When and where: {review.dateSeen},  {review.Repository}</h4>
              <p>Your Review: {review.review}</p>
              <p>Your Rating: {review.rating}</p>
              {review.isFavorite ? <p>Favorite</p> : null}
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default PersonalCatalog;