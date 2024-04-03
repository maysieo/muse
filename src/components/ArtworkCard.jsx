/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';

function ArtworkCard ({ art, getCurrentArtwork }) {

  return (
    <div className="card w-1/5" onClick={() => getCurrentArtwork(art)}>
      <img src="https://source.unsplash.com/random" className="w-full h-auto" alt={art.Title} />
      <p className="text-left font-bold">{art.Title}</p>
      <p className="text-left">{art.Artist}</p>
    </div>
  );
}

export default ArtworkCard;