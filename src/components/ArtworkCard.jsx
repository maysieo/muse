/* eslint-disable react/prop-types */
import React from 'react';

function ArtworkCard ({ art }) {
  return (
    <div className="card w-1/5">
      <img src="https://source.unsplash.com/random" className="w-full h-auto" alt={art.Title} />
      <p className="text-left">{art.Title}</p>
      <p>{art.Artist}</p>
    </div>
  );
}

export default ArtworkCard;