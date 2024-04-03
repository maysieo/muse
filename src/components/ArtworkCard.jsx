/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ArtworkCard ({ art, getCurrentArtwork }) {

  return (
      <div className="card w-1/5 text-left" >
        <Link to="/artwork" onClick={() => getCurrentArtwork(art)} >
          <img src="https://source.unsplash.com/random" className="w-full h-auto" alt={art.Title} />
          <p className="text-left font-bold">{art.Title}</p>
          <p className="text-left">{art.Artist}</p>
          { (art["Gallery Number"]) ? <p className="text-left">Gallery {art["Gallery Number"]} </p> : null }
          { art.OnView ? <p>{art.OnView.replace(/MoMA,|["']/g, "")}</p> : null }
        </Link>
      </div>
  );
}

export default ArtworkCard;