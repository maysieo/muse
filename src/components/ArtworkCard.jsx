/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ArtworkCard ({ art, getCurrentArtwork }) {

  return (
      <div className="card w-1/5 text-left flex flex-col justify-between" >
        <Link to="/artwork" onClick={() => getCurrentArtwork(art)} >
            {art.ImageURL ? <div className="imageContainer h-2/3"> <img src={art.ImageURL} className="h-full object-cover" alt={art.Title} />  </div> : null}
          <div className="textContainer mt-auto">
            <p className="text-left font-bold">{art.Title}</p>
            <p className="text-left">{art.Artist}</p>
            { (art["Gallery Number"]) ? <p className="text-left">Gallery {art["Gallery Number"]} </p> : null }
            { art.OnView ? <p>{art.OnView.replace(/MoMA,|["']/g, "")}</p> : null }
          </div>
        </Link>
      </div>
  );
}

export default ArtworkCard;